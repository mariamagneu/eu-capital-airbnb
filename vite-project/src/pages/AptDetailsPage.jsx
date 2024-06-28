import React from "react";
import { useParams, Link } from "react-router-dom";
import placeholderImage from "../assets/placeholderimg.jpg";
import axios from "axios";

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
};

const imgStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  objectFit: "cover",
};

const txtContainerStyle = {
  width: "100%",
  height: "80vh", // Adjust height as needed
  overflow: "auto",
};

function AptDetailsPage() {
  const { aptId } = useParams();
  const [aptData, setAptData] = React.useState(null);

  React.useEffect(() => {
    const fetchApartment = async () => {
      try {
        const response = await axios.get(`/api/apartments/${aptId}`);
        setAptData(response.data);
      } catch (error) {
        console.error("Error fetching apartment:", error);
      }
    };

    fetchApartment();
  }, [aptId]);

  if (!aptData) {
    return <div>Loading...</div>; // Or handle loading state
  }

  return (
    <div style={containerStyle}>
      <div className="imgContainer" style={imgContainerStyle}>
        <img
          src={aptData.image || placeholderImage}
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
        <p>Description: {aptData.description}</p>
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

        {/* Edit button */}
        <Link to={`/apartments/edit/${aptId}`} style={{ textDecoration: "none" }}>
          <button style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}>
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AptDetailsPage;
