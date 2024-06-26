// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
