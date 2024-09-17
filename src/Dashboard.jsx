// src/Dashboard.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './index.css'; // Ensure the CSS file is imported

const Dashboard = ({ onLogout }) => {
  return (
    <div className="dashboard">
      <Header onLogout={onLogout} />
      <main>
        <h2>Dashboard Content</h2>
        {/* Additional content goes here */}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;