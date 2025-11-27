import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  useEffect(() => {
    localStorage.setItem('Email', 'Demo@demo.com');
    localStorage.setItem('password','demo')
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
