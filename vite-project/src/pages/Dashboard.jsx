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
      <Routes>
        <Route path="/add" element={<AddAptForm addApt={addNewApartment} />} />
        <Route
          path="/edit/:id"
          element={
            <EditAptPage
              apartments={apartments}
              onUpdate={updateApartmentData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Dashboard;
