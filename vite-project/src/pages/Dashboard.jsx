import React from "react";
import ApartmentCard from "../components/ApartmentCard";
import AddAptForm from "../components/AddAptForm";
import EditAptPage from "./EditAptPage";

function Dashboard({
  apartments,
  updateApartmentData,
  handleAddApartment,
  handleDelete,
}) {
  return (
    <div className="dashboard">
      <h2>Add New Apartment</h2>
      <AddAptForm handleNewApartment={handleAddApartment} />
      <h2>Apartment Database</h2>
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
