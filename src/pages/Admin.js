import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './Admin.css';

const Admin = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  const handleLogout = () => {
    alert('Logged out successfully!');
    // Add actual logout logic here
  };

  return (
    <div className="admin-container">
      <Navbar user={user} onLogout={handleLogout} />
      <div className="admin-main">
        <Sidebar user={user} />
        <div className="admin-content">
          <h1>Welcome to Admin Dashboard</h1>
          <p>Select an option from the sidebar to get started.</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
