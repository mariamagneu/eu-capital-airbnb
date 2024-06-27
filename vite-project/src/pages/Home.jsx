// Home.jsx

import React from 'react';
import banner from '../assets/banner.png'; // Import the banner image

function Home() {
  return (
    <div>
      <img src={banner} alt="Banner" style={{ width: '60%' }} />
      <h2>Welcome!</h2>
      <p>This is Capital Apartments – the No. 1 place for quality living in Europe's most thriving capitals.</p>
    </div>
  );
}

export default Home;

