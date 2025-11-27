import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ user }) => {
  const menuItems = [
    { id: 1, label: 'Home', icon: '🏠', to: '/admin/home' },
    { id: 2, label: 'Orders', icon: '📦', to: '/admin/orders' },
    { id: 3, label: 'Transaction', icon: '💳', to: '/admin/transactions' },
    { id: 4, label: 'Categories', icon: '📂', to: '/admin/categories' },
    { id: 5, label: 'Users', icon: '👥', to: '/admin/users' },
    { id: 6, label: 'Customers', icon: '🛍️', to: '/admin/customers' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">📊</div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.to} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">👤</div>
          <div className="user-details">
            <div className="user-name">{user?.name || 'User Name'}</div>
            <div className="user-email">{user?.email || 'user@example.com'}</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
