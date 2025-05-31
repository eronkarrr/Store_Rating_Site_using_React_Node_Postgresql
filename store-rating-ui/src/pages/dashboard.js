import React from 'react';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import OwnerDashboard from '../components/Dashboard/OwnerDashboard';
import UserDashboard from '../components/Dashboard/UserDashboard';
import DashboardLayout from '../components/Layout/DashboardLayout';

const Dashboard = () => {
  const userRole = 'admin'; // example
  const userName = 'Shubham'; // example

  const handleLogout = () => {
    // logout logic (clear tokens, redirect, etc.)
    console.log('User logged out');
  };

  let dashboardComponent;
  if (userRole === 'admin') dashboardComponent = <AdminDashboard />;
  else if (userRole === 'owner') dashboardComponent = <OwnerDashboard />;
  else if (userRole === 'user') dashboardComponent = <UserDashboard />;
  else dashboardComponent = <div>Unauthorized</div>;

  return (
    <DashboardLayout userName={userName} onLogout={handleLogout}>
      {dashboardComponent}
    </DashboardLayout>
  );
};

export default Dashboard;
