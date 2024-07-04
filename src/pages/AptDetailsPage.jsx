import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const containerStyle = {
  border: "1px solid #c7afe9",
  backgroundColor: "#e4d4fa",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "40px",
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
  alignItems: "center",
  height: "80vh",
  width: "82vw",
};

const imgContainerStyle = {
  width: "100%",
  height: "500px",
  overflow: "hidden",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const txtContainerStyle = {
  width: "100%",
  height: "80vh", // Adjust height as needed
  overflow: "auto",
};

function AptDetailsPage({ apartments }) {
  const { aptId } = useParams();
  const navigate = useNavigate();

  const [aptData, setAptData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    // Generate a random number between 1 and 10
    const getRandomNumber = () => {
      return Math.floor(Math.random() * 10) + 1;
    };

    // Construct the URL for a random asset image
    const getRandomAssetUrl = () => {
      const randomNum = getRandomNumber();
      return `/assets/apt_${randomNum}.jpg`; // Adjust the path as per your asset structure
    };

    // Set the random image URL
    setRandomImage(getRandomAssetUrl());

    // Find the apartment data from props based on aptId
    const foundApt = apartments.find((apt) => apt.id.toString() === aptId);
    if (foundApt) {
      setAptData(foundApt);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [apartments, aptId]);

  const handleBackClick = () => {
    navigate("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!aptData) {
    return <div>Apartment not found.</div>;
  }

  return (
    <div style={containerStyle}>
      <div className="imgContainer" style={imgContainerStyle}>
        <img
          src={randomImage || "https://via.placeholder.com/400x300"}
          alt="location image"
          style={imgStyle}
        />
      </div>
      <div className="txtContainer" style={txtContainerStyle}>
        <h1>
          {aptData.name} in {aptData.city}, {aptData.country}
        </h1>
        <p>Rating: {aptData.review_scores_rating}/100</p>
        <p>Property Type: {aptData.property_type}</p>
        <h2>Description</h2>
        <p>{aptData.description}</p>
        <p>Room Type: {aptData.room_type}</p>
        <p>Accommodates: {aptData.accommodates}</p>
        <p>Bathrooms: {aptData.bathrooms}</p>
        <p>Bedrooms: {aptData.bedrooms}</p>
        <p>Beds: {aptData.beds}</p>
        <p>Price: ${aptData.price} per night</p>
        <p>Cleaning Fee: ${aptData.cleaning_fee}</p>
        <p>Cancellation Policy: {aptData.cancellation_policy}</p>
        <h2>House Rules</h2>
        <p>{aptData.house_rules}</p>
        <h2>Host Information</h2>
        <p>Host Name: {aptData.host_name}</p>
        <p>Host Since: {aptData.host_since}</p>
        <p>Host Response Time: {aptData.host_response_time}</p>

        <Link to={`/apartments/edit/${aptId}`} style={{ textDecoration: "none" }}>
          <button style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}>
            Edit
          </button>
        </Link>

        <button onClick={handleBackClick} style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}>
          Back
        </button>
      </div>
    </div>
  );
}

export default AptDetailsPage;
