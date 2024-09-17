// src/Header.jsx
import React from 'react';
import './index.css'; // Ensure the CSS file is imported

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <h1>Smart Suit Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
    </header>
  );
};

export default Header;