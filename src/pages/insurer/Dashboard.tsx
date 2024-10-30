import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Shield, FileText, AlertTriangle, DollarSign } from 'lucide-react';

const claimsData = [
  { name: 'Jan', claims: 120, fraudulent: 8 },
  { name: 'Feb', claims: 150, fraudulent: 12 },
  { name: 'Mar', claims: 180, fraudulent: 15 },
  { name: 'Apr', claims: 170, fraudulent: 10 },
  { name: 'May', claims: 190, fraudulent: 14 },
  { name: 'Jun', claims: 160, fraudulent: 11 },
];

const pieData = [
  { name: 'Approved', value: 65 },
  { name: 'Pending', value: 25 },
  { name: 'Rejected', value: 10 },
];

const COLORS = ['#10B981', '#3B82F6', '#EF4444'];

function InsurerDashboard() {
  return (
    <Routes>
      <Route
        index
        element={
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DashboardCard
                title="Total Claims"
                value="970"
                trend="+12.5%"
                icon={FileText}
                color="blue"
              />
              <DashboardCard
                title="Fraud Alerts"
                value="24"
                trend="+5.2%"
                icon={Shield}
                color="red"
              />
              <DashboardCard
                title="Pending Review"
                value="45"
                trend="-2.1%"
                icon={AlertTriangle}
                color="yellow"
              />
              <DashboardCard
                title="Processed Amount"
                value="$1.2M"
                trend="+8.3%"
                icon={DollarSign}
                color="green"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Claims Overview</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={claimsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="claims" fill="#3B82F6" name="Total Claims" />
                      <Bar dataKey="fraudulent" fill="#EF4444" name="Fraudulent" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Claims Status Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Recent Fraud Alerts</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <Shield className="w-5 h-5 text-red-500" />
                      <div>
                        <h4 className="font-medium">Suspicious Claim Detected</h4>
                        <p className="text-sm text-gray-500">
                          Claim ID: {10000 + i} flagged for unusual billing pattern
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                      Investigate
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

function DashboardCard({
  title,
  value,
  trend,
  icon: Icon,
  color,
}: {
  title: string;
  value: string;
  trend: string;
  icon: React.ElementType;
  color: string;
}) {
  const colors = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${colors[color]} bg-opacity-10`}>
          <Icon className={`w-6 h-6 text-${color}-500`} />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-semibold">{value}</p>
            <span className={`text-sm ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {trend}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsurerDashboard;