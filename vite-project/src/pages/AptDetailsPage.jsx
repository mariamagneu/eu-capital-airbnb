import placeholderImage from "../assets/placeholderimg.jpg";
import appartmentData from "../rentals.json";
import { useParams, Link } from "react-router-dom";

const containerStyle = {
  border: "1px solid #c7afe9",
  backgroundColor: "#e4d4fa",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "16px",
  width: "80%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
  alignItems: "center",
  height: "80vh",
  width: "85vw",
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
  const aptData = appartmentData.find((appartment) => appartment.id === aptId);

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
      </div>
    </div>
  );
}

export default AptDetailsPage;
