import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
