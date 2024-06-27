import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div id="sidebar">
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li> {/* Updated link */}
      </ul>
    </div>
  );
}

export default Sidebar;
