import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cardStyle = {
  border: "1px solid #c7afe9",
  backgroundColor: "#e4d4fa",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "16px",
  width: "80%",
  color: "black",
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
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=holiday%20apartments&per_page=1&page=${Math.floor(
            Math.random() * 10 + 1
          )}`,
          {
            headers: {
              Authorization: "Bearer aqz2txxkC7hdXOmaKd0vWMN31S2PRLUdOLJRoVP0aNvQWI44fdfSq8CC",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();

        if (data.photos.length > 0) {
          setThumbnail(data.photos[0].src.medium);
        } else {
          setThumbnail("https://via.placeholder.com/400x300"); // Default placeholder image
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setThumbnail("https://via.placeholder.com/400x300"); // Set thumbnail to placeholder on error
      }
    };

    fetchThumbnail();
  }, []);

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
        <img src={thumbnail || "https://via.placeholder.com/400x300"} alt="thumbnail" style={thumbnailStyle} />
      </div>
    </div>
  );
}

export default ApartmentCard;
