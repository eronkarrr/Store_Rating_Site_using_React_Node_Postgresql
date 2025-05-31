// src/components/Dashboard/OwnerDashboard.jsx
import React from 'react';
import styles from './Dashboard.module.css';

const OwnerDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>Owner Dashboard</h1>
      <p>Welcome, Store Owner! Manage your store and view ratings here.</p>
      <ul className={styles.list}>
        <li>Update Store Details</li>
        <li>View Store Ratings</li>
        <li>Respond to Feedback</li>
      </ul>
    </div>
  );
};

export default OwnerDashboard;
