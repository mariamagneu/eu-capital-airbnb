import React, { useState } from "react";
import ApartmentCard from "./ApartmentCard";
import rentalsData from "../rentals.json";

function ApartmentList() {
  const [apartments, setApartments] = useState(rentalsData);

  const handleDelete = (id) => {
    setApartments(apartments.filter((apartment) => apartment.id !== id));
  };

  return (
    <div className="apartment-list">
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

export default ApartmentList;
