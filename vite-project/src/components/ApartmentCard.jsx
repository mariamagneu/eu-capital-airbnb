import React from "react";
import { useNavigate } from "react-router-dom";
import placeholderImage from "../assets/placeholderimg.jpg";

const cardStyle = {
  border: "1px solid #c7afe9",
  backgroundColor: "#e4d4fa",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "16px",
  width: "80%",
  color: "black",
  textDecoration: "none",
};

const buttonContainerStyle = {
  marginTop: "1em",
};

function ApartmentCard({ apartment, onDelete }) {
  const navigate = useNavigate();
  const isHighlyRated = apartment.review_scores_rating > 80;

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    onDelete(apartment.id);
  };

  const handleEditClick = (event) => {
    event.stopPropagation();
    navigate(`/apartments/edit/${apartment.id}`);
  };

  const handleCardClick = () => {
    navigate(`/apartments/${apartment.id}`);
  };

  return (
    <div className="apartment-card" style={cardStyle} onClick={handleCardClick}>
      <h3>{apartment.name}</h3>
      <p>
        Location: {apartment.city}, {apartment.country}
      </p>
      <p>High Rating: {isHighlyRated ? "✅" : "❌"}</p>
      <p>Accommodates: {apartment.accommodates} guests</p>
      <div>
        <a
          className="apartment-link"
          href={apartment.picture_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // Prevent navigation on link click
        >
          View Apartment Details
        </a>
      </div>
      <div style={buttonContainerStyle}>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default ApartmentCard;
