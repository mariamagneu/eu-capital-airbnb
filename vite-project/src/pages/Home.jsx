import React, { useState } from "react";
import ApartmentCard from "../components/ApartmentCard";
import rentalsData from "../rentals.json";
import AddAptForm from "../components/AddAptForm";

function Home() {
  const [apartments, setApartments] = useState(rentalsData);

  const handleDelete = (id) => {
    setApartments(apartments.filter((apartment) => apartment.id !== id));
  };

  const handleAddApartment = (newApartment) => {
    setApartments([newApartment, ...apartments]);
  };

  return (
    <div className="dashboard">
      <AddAptForm addApt={handleAddApartment} />
      <h2>Apartment Database</h2>
      {apartments.length > 0 ? (
        apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>No apartments available.</p>
      )}
    </div>
  );
}

export default Home;
