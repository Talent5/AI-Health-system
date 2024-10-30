import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProviderDashboard from './pages/provider/Dashboard';
import InsurerDashboard from './pages/insurer/Dashboard';
import PatientDashboard from './pages/patient/Dashboard';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/login" replace />} />
            <Route path="provider/*" element={<ProviderDashboard />} />
            <Route path="insurer/*" element={<InsurerDashboard />} />
            <Route path="patient/*" element={<PatientDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;