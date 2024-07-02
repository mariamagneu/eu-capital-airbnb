import React, { useState } from "react";
import ApartmentCard from "../components/ApartmentCard";
import AddAptForm from "../components/AddAptForm";
import EditAptPage from "../pages/EditAptPage";
import rentalsData from "../rentals.json";
import { Route, Routes, Navigate } from "react-router-dom";

function Dashboard({ apartmens, onDelete }) {
  const [apartments, setApartments] = useState(rentalsData);

  const handleDelete = (id) => {
    setApartments(apartments.filter((apartment) => apartment.id !== id));
  };

  const handleAddApartment = (newApartment) => {
    newApartment.id = "_" + Math.random().toString(36).substr(2, 9); // Generate random ID
    setApartments([newApartment, ...apartments]);
  };

  const handleEditApartment = (updatedApartment) => {
    const updatedApartments = apartments.map((apartment) =>
      apartment.id === updatedApartment.id ? updatedApartment : apartment
    );
    setApartments(updatedApartments);
  };

  return (
    <>
      <h2>Apartment Database</h2>
      {apartments.length > 0 ? (
        apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No apartments available.</p>
      )}
    </>
  );
}

export default Dashboard;
