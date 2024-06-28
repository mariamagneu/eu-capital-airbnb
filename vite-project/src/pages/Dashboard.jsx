import React, { useState } from "react";
import ApartmentCard from "../components/ApartmentCard";
import AddItemForm from "../components/AddItemForm";
import UpdateItemForm from "../components/UpdateItemForm";
import rentalsData from "../rentals.json";

function Dashboard() {
  const [apartments, setApartments] = useState(rentalsData);
  const [currentItem, setCurrentItem] = useState(null);

  const handleAdd = (newItem) => {
    newItem.id = apartments.length ? apartments[apartments.length - 1].id + 1 : 1;
    setApartments([...apartments, newItem]);
  };

  const handleDelete = (id) => {
    setApartments(apartments.filter((apartment) => apartment.id !== id));
  };

  const handleUpdate = (updatedItem) => {
    setApartments(
      apartments.map((apartment) =>
        apartment.id === updatedItem.id ? updatedItem : apartment
      )
    );
    setCurrentItem(null);
  };

  return (
    <div className="dashboard">
      <h2>Apartment Database</h2>
      <AddItemForm onAdd={handleAdd} />
      {currentItem && (
        <UpdateItemForm currentItem={currentItem} onUpdate={handleUpdate} />
      )}
      {apartments.length > 0 ? (
        apartments.map((apartment) => (
          <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            onDelete={handleDelete}
            onEdit={() => setCurrentItem(apartment)}
          />
        ))
      ) : (
        <p>No apartments available.</p>
      )}
    </div>
  );
}

export default Dashboard;
