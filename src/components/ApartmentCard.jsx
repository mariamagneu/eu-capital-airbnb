import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/Planchonella-House-2.jpg";
import image from "../assets/apt_1.jpg";
import image1 from "../assets/apt_2.jpg";
import image2 from "../assets/apt_3.jpg";
import image3 from "../assets/apt_4.jpg";
import image4 from "../assets/apt_5.jpg";
import image5 from "../assets/apt_6.jpg";
import image6 from "../assets/apt_7.jpg";
import image7 from "../assets/apt_8.jpg";
import image8 from "../assets/apt_9.jpg";
import image9 from "../assets/apt_10.jpg";

const images = [
  image,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const cardStyle = {
  border: "1px solid #c7afe9",
  backgroundColor: "#e4d4fa",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "16px",
  width: "70%", // Adjusted to match AddAptForm
  margin: "0 auto", // Center align horizontally
  display: "grid",
  gridTemplateColumns: "1fr 300px", // Adjusted for image
  gap: "16px",
};

const buttonContainerStyle = {
  marginTop: "1em",
};

const thumbnailStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
};

function ApartmentCard({ apartment, onDelete }) {
  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setThumbnail(randomImage);
  }, []);
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);

  const isHighlyRated = apartment.review_scores_rating > 80;

  const handleDeleteClick = (event) => {
    event.stopPropagation(); // Prevent card click event bubbling
    onDelete(apartment.id); // Call onDelete prop function
  };

  const handleEditClick = (event) => {
    event.stopPropagation(); // Prevent card click event bubbling
    navigate(`/apartments/edit/${apartment.id}`); // Navigate to edit page
  };

  const handleCardClick = () => {
    navigate(`/apartments/${apartment.id}`); // Navigate to details page
  };

  return (
    <div className="apartment-card" style={cardStyle} onClick={handleCardClick}>
      <div>
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
      <div>
        <img
          src={thumbnail || placeholder}
          alt="thumbnail"
          style={thumbnailStyle}
        />
      </div>
    </div>
  );
}

export default ApartmentCard;
