import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/admin/profile" className="profile-btn" title="Profile">
            👤 Profile
          </Link>
          <button className="logout-btn" onClick={onLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
