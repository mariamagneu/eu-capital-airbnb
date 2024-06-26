import React, { useEffect, useState } from 'react';
import ApartmentCard from './ApartmentCard';
import rentalsData from '../rentals.json'; // Adjusted path

function ApartmentList() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    setApartments(rentalsData);
  }, []);

  return (
    <div className="apartment-list">
      <h2>List of Apartments</h2>
      {apartments.length > 0 ? (
        apartments.map(apartment => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))
      ) : (
        <p>Loading apartments...</p>
      )}
    </div>
  );
}

export default ApartmentList;
