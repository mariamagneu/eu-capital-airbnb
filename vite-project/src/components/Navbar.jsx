import React from 'react';
import logo from '../assets/logo.png'; // Adjusted path

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="App Logo" style={{ height: '50px' }} />
      <span>Apartment Rental Admin Dashboard</span>
    </nav>
  );
}

export default Navbar;
