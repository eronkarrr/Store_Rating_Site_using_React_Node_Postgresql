// src/components/Auth/RequireAuth.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const token = localStorage.getItem('token'); // तुम्ही login नंतर token save केला पाहिजे

  if (!token) {
    // जर user logged-in नसेल तर login page ला redirect करा
    return <Navigate to="/" replace />;
  }

  // logged-in असल्यास nested routes दाखवा
  return <Outlet />;
};

export default RequireAuth;
