import React from 'react';
import './Sidebar.css';

const Sidebar = ({ user }) => {
  const menuItems = [
    { id: 1, label: 'Home', icon: '🏠', href: '#home' },
    { id: 2, label: 'Orders', icon: '📦', href: '#orders' },
    { id: 3, label: 'Transaction', icon: '💳', href: '#transaction' },
    { id: 4, label: 'Categories', icon: '📂', href: '#categories' },
    { id: 5, label: 'Users', icon: '👥', href: '#users' },
    { id: 6, label: 'Customers', icon: '🛍️', href: '#customers' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">📊</div>
        <div className="logo-text">Admin</div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <a key={item.id} href={item.href} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </a>
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
