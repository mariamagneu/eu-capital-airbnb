// Navbar.jsx

import React from 'react';
import logo from '../assets/logo.png'; // Correct path to the logo

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="App Logo" style={{ height: '50px' }} />
      <span>CAPITAL APARTMENTS</span>
    </nav>
  );
}

export default Navbar;
