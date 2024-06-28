import React, { useState } from "react";
import ApartmentCard from "../components/ApartmentCard";
import rentalsData from "../rentals.json";

function Dashboard() {
  // Directly initialize the state with the rentals data
  const [apartments, setApartments] = useState(rentalsData);

  const handleDelete = (id) => {
    setApartments(apartments.filter((apartment) => apartment.id !== id));
  };

  return (
    <div className="dashboard">
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

export default Dashboard;
