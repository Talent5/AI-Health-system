import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, Bell } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const { logout, userRole } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const roleColors = {
    provider: 'bg-blue-500',
    insurer: 'bg-purple-500',
    patient: 'bg-green-500',
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Healthcare AI Platform
            </h1>
            {userRole && (
              <span className={`ml-4 px-3 py-1 rounded-full text-white text-sm ${roleColors[userRole]}`}>
                {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;