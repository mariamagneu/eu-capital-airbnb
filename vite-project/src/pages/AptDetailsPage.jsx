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
  gridTemplate: "1fr/ 1fr",
  gap: "30px",
};

const imgContainerStyle = {
  width: "100%",
  gridColumn: "1 / 2", // Ensures it spans the first column
};

const txtContainerStyle = {
  width: "100%",
  gridColumn: "2 / 3", // Ensures it spans the second column
};

function AptDetailsPage() {
  const { aptId } = useParams();
  const aptData = appartmentData.find((appartment) => appartment.id === aptId);

  return (
    <div style={containerStyle}>
      <div className="imgContainer" style={imgContainerStyle}>
        <img src={aptData.image || placeholderImage} alt="location image" />
      </div>
      <div className="txtContainer" style={txtContainerStyle}>
        <h1>
          {aptData.name} in {aptData.city},{aptData.country}
        </h1>
      </div>
    </div>
  );
}

export default AptDetailsPage;
