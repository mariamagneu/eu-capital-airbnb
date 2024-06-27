import React from "react";

function ApartmentCard({ apartment, onDelete }) {
  const isHighlyRated = apartment.review_scores_rating > 80;

  const cardStyle = {
    border: "1px solid #c7afe9",
    backgroundColor: "#e4d4fa",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    width: "80%",
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onDelete(apartment.id);
  };

  return (
    <div className="apartment-card" style={cardStyle}>
      <h3>{apartment.name}</h3>
      <p>
        Location: {apartment.city}, {apartment.country}
      </p>
      <p>High Rating: {isHighlyRated ? "✅" : "❌"}</p>
      <p>Accommodates: {apartment.accommodates} guests</p>

      <div>
        <a
          className="apartment-link"
          href={apartment.picture_url.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Apartment Details
        </a>
      </div>
      <div style={{ marginTop: "1em" }}>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default ApartmentCard;
