import React from 'react';

function ApartmentCard({ apartment }) {
  return (
    <div className="apartment-card">
      <h3>{apartment.name}</h3>
      <p>Location: {apartment.city}, {apartment.country}</p>
      <p>Price: ${apartment.price} per night</p>
      <p>Rating: {apartment.review_scores_rating}/5</p>
      <img src={apartment.picture_url.url} alt={apartment.name} style={{ maxWidth: '100%' }} />
      <p>{apartment.description}</p>
      <p>Hosted by: {apartment.host_name}</p>
      <p>Accommodates: {apartment.accommodates} guests</p>
    </div>
  );
}

export default ApartmentCard;
