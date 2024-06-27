import React, { useEffect, useState } from 'react';
import ApartmentCard from './ApartmentCard';
import rentalsData from '../rentals.json';

function Dashboard() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // Simulating an API call or data fetch
    setApartments(rentalsData);
  }, []);

  const handleDelete = (id) => {
    setApartments(apartments.filter(apartment => apartment.id !== id));
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {apartments.length > 0 ? (
        apartments.map(apartment => (
          <ApartmentCard key={apartment.id} apartment={apartment} onDelete={handleDelete} />
        ))
      ) : (
        <p>No apartments available.</p>
      )}
    </div>
  );
}

export default Dashboard;
