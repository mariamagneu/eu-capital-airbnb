import React from 'react';
import { useParams } from 'react-router-dom';
import ApartmentCard from './ApartmentCard'; // Adjust import if needed
import rentalsData from '../rentals.json';

function ItemDetails() {
  const { id } = useParams();
  const apartment = rentalsData.find(apartment => apartment.id === parseInt(id));

  if (!apartment) {
    return <div>Item not found.</div>;
  }

  return (
    <div>
      <h2>Apartment Details</h2>
      <ApartmentCard apartment={apartment} />
    </div>
  );
}

export default ItemDetails;
