// src/components/Dashboard/UserDashboard.jsx
import React from 'react';
import styles from './Dashboard.module.css';

const UserDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>User Dashboard</h1>
      <p>Welcome! You can browse stores and give ratings.</p>
      <ul className={styles.list}>
        <li>Browse Stores</li>
        <li>Rate Stores</li>
        <li>View Your Ratings</li>
      </ul>
    </div>
  );
};

export default UserDashboard;
