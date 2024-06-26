import React from 'react';

function ApartmentCard({ apartment, onDelete }) {
  const isHighlyRated = apartment.review_scores_rating > 80;

  return (
    <div className="apartment-card">
      <h3>{apartment.name}</h3>
      <p>Location: {apartment.city}, {apartment.country}</p>
      <p>Price: ${apartment.price} per night</p>
      <p>Rating: {apartment.review_scores_rating}/5</p>
      <p>Status: {isHighlyRated ? '✅' : '❌'}</p>
      <p>Description: {apartment.description}</p>
      <p>Hosted by: {apartment.host_name}</p>
      <p>Accommodates: {apartment.accommodates} guests</p>
      <div>
        <a href={apartment.picture_url.url} target="_blank" rel="noopener noreferrer">View Apartment Details</a>
      </div>
      <div style={{ marginTop: '1em' }}>
        <button onClick={() => onDelete(apartment.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ApartmentCard;
