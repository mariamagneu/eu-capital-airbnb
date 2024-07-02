import React from "react";
import ApartmentCard from "../components/ApartmentCard";
import { Route, Routes } from "react-router-dom";
import AddAptForm from "../components/AddAptForm";
import EditAptPage from "./EditAptPage";

function Dashboard({
  apartments,
  updateApartmentData,
  addNewApartment,
  handleDelete,
}) {
  return (
    <div className="dashboard">
      <h2>Add New Apartment</h2>
      <AddAptForm />
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
