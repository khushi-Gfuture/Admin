import React from 'react';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Admin Dashboard</div>
        <div className="navbar-right">
          <div className="user-profile">
            <span className="user-name">{user?.name || 'User'}</span>
          </div>
          <button className="profile-btn" title="Profile">
            👤 Profile
          </button>
          <button className="logout-btn" onClick={onLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
