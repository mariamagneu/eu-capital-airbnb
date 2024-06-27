// Home.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

import ApartmentCard from "../components/ApartmentCard";
import rentalsData from "../rentals.json";

function Home() {
  const [apartments, setApartments] = useState(rentalsData);

  const handleDelete = (id) => {
    setApartments(apartments.filter((apartment) => apartment.id !== id));
  };

  return (
    <div className="dashboard">
      <h2>Apartments in the Database</h2>
      {apartments.length > 0 ? (
        apartments.map((apartment) => (
          <Link to={`/apartments/${apartment.id}`}>
            {" "}
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              onDelete={handleDelete}
            />
          </Link>
        ))
      ) : (
        <p>No apartments available.</p>
      )}
    </div>
  );
}

export default Home;
