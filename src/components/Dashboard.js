import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard</h1>
      <p>User: {currentUser && currentUser.email}</p>
      <div className="analytics">
        <h2>Restaurant Analytics</h2>
        <ul>
          <li>Total Orders: 120</li>
          <li>Revenue: $3,400</li>
          <li>Pending Orders: 7</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;