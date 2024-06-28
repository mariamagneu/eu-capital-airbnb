// AddItemForm.jsx
import React, { useState } from "react";

function AddItemForm({ onAdd }) {
  const [newItem, setNewItem] = useState({
    name: "",
    city: "",
    country: "",
    review_scores_rating: 0,
    accommodates: 1,
    picture_url: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newItem);
    setNewItem({
      name: "",
      city: "",
      country: "",
      review_scores_rating: 0,
      accommodates: 1,
      picture_url: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Apartment</h3>
      <input
        type="text"
        name="name"
        value={newItem.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="city"
        value={newItem.city}
        onChange={handleChange}
        placeholder="City"
        required
      />
      <input
        type="text"
        name="country"
        value={newItem.country}
        onChange={handleChange}
        placeholder="Country"
        required
      />
      <input
        type="number"
        name="review_scores_rating"
        value={newItem.review_scores_rating}
        onChange={handleChange}
        placeholder="Rating"
        required
      />
      <input
        type="number"
        name="accommodates"
        value={newItem.accommodates}
        onChange={handleChange}
        placeholder="Accommodates"
        required
      />
      <input
        type="text"
        name="picture_url"
        value={newItem.picture_url}
        onChange={handleChange}
        placeholder="Picture URL"
        required
      />
      <button type="submit">Add Apartment</button>
    </form>
  );
}

export default AddItemForm;
