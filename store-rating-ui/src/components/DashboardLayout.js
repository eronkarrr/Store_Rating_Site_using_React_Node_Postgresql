import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardLayout.css';  // CSS फाइल आयात

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          {['Home', 'Stores', 'Ratings', 'Users'].map((item) => {
            const path = item === 'Home' ? '/dashboard' : `/dashboard/${item.toLowerCase()}`;
            return (
              <li key={item}>
                <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
