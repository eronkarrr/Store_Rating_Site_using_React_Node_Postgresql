// src/components/Layout/Navbar.jsx
import React from 'react';

const Navbar = ({ userName, onLogout }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Store Rating App</div>
      <div className="flex items-center space-x-4">
        <span>Welcome, {userName}</span>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
