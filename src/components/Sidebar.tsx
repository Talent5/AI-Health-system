import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  FileText,
  AlertTriangle,
  Users,
  Activity,
  ClipboardList,
  Shield,
  Heart,
} from 'lucide-react';

function Sidebar() {
  const { userRole } = useAuth();

  const providerLinks = [
    { to: '/provider', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/provider/patients', icon: Users, label: 'Patients' },
    { to: '/provider/risk-assessment', icon: AlertTriangle, label: 'Risk Assessment' },
    { to: '/provider/claims', icon: FileText, label: 'Claims' },
  ];

  const insurerLinks = [
    { to: '/insurer', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/insurer/claims', icon: FileText, label: 'Claims Review' },
    { to: '/insurer/fraud-alerts', icon: Shield, label: 'Fraud Alerts' },
    { to: '/insurer/analytics', icon: Activity, label: 'Analytics' },
  ];

  const patientLinks = [
    { to: '/patient', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/patient/health', icon: Heart, label: 'Health Insights' },
    { to: '/patient/claims', icon: ClipboardList, label: 'My Claims' },
  ];

  const links = {
    provider: providerLinks,
    insurer: insurerLinks,
    patient: patientLinks,
  }[userRole || 'patient'];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]">
      <nav className="p-4">
        <div className="space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to.split('/').length === 2}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;