// Navbar.jsx

import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="App Logo" style={{ height: '50px' }} />
        <span>CAPITAL APARTMENTS</span>
      </div>
      
    </nav>
  );
}

export default Navbar;
