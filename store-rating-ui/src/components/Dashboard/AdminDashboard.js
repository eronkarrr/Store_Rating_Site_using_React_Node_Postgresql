// src/components/Dashboard/AdminDashboard.jsx

import React from "react";

const AdminDashboard = () => {
  // Dummy data for illustration
  const totalUsers = 120;
  const totalStores = 45;
  const totalRatings = 350;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-4xl font-bold text-blue-600">{totalUsers}</p>
        </div>

        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Stores</h2>
          <p className="text-4xl font-bold text-green-600">{totalStores}</p>
        </div>

        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Ratings</h2>
          <p className="text-4xl font-bold text-yellow-600">{totalRatings}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>New user registered: Rahul Patil</li>
          <li>Store approved: Sweet Treats</li>
          <li>Rating submitted by user: Sneha Kulkarni</li>
          <li>System maintenance scheduled for Sunday</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
