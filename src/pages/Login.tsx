import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, UserCog, User } from 'lucide-react';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<'provider' | 'insurer' | 'patient' | null>(null);

  const handleLogin = () => {
    if (selectedRole) {
      login(selectedRole);
      navigate(`/${selectedRole}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Healthcare AI Platform
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={() => setSelectedRole('provider')}
            className={`w-full p-4 rounded-lg border-2 flex items-center gap-4 transition-all ${
              selectedRole === 'provider'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <UserCog className="w-6 h-6 text-blue-500" />
            <span className="font-medium">Healthcare Provider</span>
          </button>

          <button
            onClick={() => setSelectedRole('insurer')}
            className={`w-full p-4 rounded-lg border-2 flex items-center gap-4 transition-all ${
              selectedRole === 'insurer'
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-purple-200'
            }`}
          >
            <Shield className="w-6 h-6 text-purple-500" />
            <span className="font-medium">Insurer</span>
          </button>

          <button
            onClick={() => setSelectedRole('patient')}
            className={`w-full p-4 rounded-lg border-2 flex items-center gap-4 transition-all ${
              selectedRole === 'patient'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-green-200'
            }`}
          >
            <User className="w-6 h-6 text-green-500" />
            <span className="font-medium">Patient</span>
          </button>
        </div>

        <button
          onClick={handleLogin}
          disabled={!selectedRole}
          className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>

        <p className="mt-4 text-sm text-center text-gray-500">
          Choose your role to access the platform
        </p>
      </div>
    </div>
  );
}

export default Login;