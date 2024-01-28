// Header.js

import React from 'react';
import Logo from './Logo';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Logo />
      </div>
       <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <div className="search-icons">
          <span className="icon">🔍</span>
          <span className="icon">🔔</span>
          <div className="profile-icon">
            <span className="icon">👤</span>
            {/* Dropdown for profile options */}
            <div className="dropdown">
             <ul className="black-list">
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    
  );
};

export default Header;
