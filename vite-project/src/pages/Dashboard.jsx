import React from "react";
import ApartmentCard from "../components/ApartmentCard";
import AddAptForm from "../components/AddAptForm";
import EditAptPage from "./EditAptPage";

const titleStyle = {
  marginBottom: "16px",
  textAlign: "center",
};

function Dashboard({
  apartments,
  updateApartmentData,
  handleAddApartment,
  handleDelete,
}) {
  return (
    <div className="dashboard">
      <AddAptForm handleNewApartment={handleAddApartment} />
      <h2 style={titleStyle}>Apartment Database</h2>
      {apartments.length > 0 ? (
        apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            onDelete={() => handleDelete(apartment.id)}
          />
        ))
      ) : (
        <p>No apartments available.</p>
      )}
    </div>
  );
}

export default Dashboard;
