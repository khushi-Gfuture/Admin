import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './Admin.css';
import useUser from '../hooks/useUser';

const Admin = () => {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    // keep simple UX: show confirmation
    alert('Logged out successfully!');
  };

  return (
    <div className="admin-container">
      <Navbar user={user} onLogout={handleLogout} />
      <div className="admin-main">
        <Sidebar user={user} />
        <div className="admin-content">
          <h1>Welcome to Admin Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Admin;
