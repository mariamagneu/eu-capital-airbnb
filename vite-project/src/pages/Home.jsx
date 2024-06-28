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
      <h2>Apartment Database</h2>
      {apartments.length > 0 ? (
        apartments.map((apartment) => (
          <Link key={apartment.id} to={`/apartments/${apartment.id}`}>
            <ApartmentCard apartment={apartment} onDelete={handleDelete} />
          </Link>
        ))
      ) : (
        <p>No apartments available.</p>
      )}
    </div>
  );
}

export default Home;
