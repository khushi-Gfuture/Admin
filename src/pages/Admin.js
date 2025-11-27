import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './Admin.css';
import useUser from '../hooks/useUser';

import Home from './Home';
import Orders from './Orders';
import Transactions from './Transactions';
import Categories from './Categories';
import Customers from './Customers';
import Users from './Users';
import Profile from './Profile'

const Admin = () => {
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    alert('Logged out successfully!');
    window.location.href = '/login';
  };

  return (
    <div className="admin-container">
      <Navbar user={user} onLogout={handleLogout} />
      <div className="admin-main">
        <Sidebar user={user} />
        <div className="admin-content">
          <Routes>
            <Route index element={<Home/>} />
            <Route path="home" element={<Home />} />
            <Route path="orders" element={<Orders />}/>
            <Route path="categories" element={<Categories />} />
            <Route path="Transactions" element={<Transactions />} />
            <Route path="customers" element={<Customers />} />
            <Route path="users" element={<Users />}/>
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
