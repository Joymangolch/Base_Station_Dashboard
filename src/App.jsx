// src/App.jsx
import React, { useState } from 'react';
import './Header.jsx';
import Login from './login.jsx';
import Dashboard from './Dashboard.jsx';
import './index.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    // Add authentication logic here
    setUser(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
