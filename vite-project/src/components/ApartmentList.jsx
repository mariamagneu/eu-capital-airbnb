import React from "react";
import ApartmentCard from "./ApartmentCard";

function ApartmentList({ apartments, onDelete, onEdit }) {
  return (
    <div className="apartment-list">
      {apartments.length > 0 ? (
        apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            onDelete={onDelete}
            onEdit={() => onEdit(apartment.id)}
          />
        ))
      ) : (
        <p>No apartments available.</p>
      )}
    </div>
  );
}

export default ApartmentList;
