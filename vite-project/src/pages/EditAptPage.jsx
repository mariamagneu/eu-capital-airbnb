import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const formStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridRowGap: "15px",
  gridColumnGap: "20px",
  width: "50%",
  margin: "0 auto 50px auto",
  padding: "16px",
  border: "1px solid #c7afe9",
  backgroundColor: "#e4d4fa",
  borderRadius: "8px",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "calc(100% - 16px)",
};

const selectStyle = {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "calc(100% + 2px)",
};

const fullWidthStyle = {
  gridColumn: "span 2",
  width: "calc(100% - 16px)",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "16px",
};

function EditAptPage({ apartments, onUpdate }) {
  const { aptId } = useParams();
  const navigate = useNavigate();

  // Find the initial apartment data
  const initialApt = apartments.find((apartment) => apartment.id.toString() === aptId);

  // State to hold the updated apartment data
  const [updatedApt, setUpdatedApt] = useState(initialApt || {
    name: "",
    accommodates: "",
    bathrooms: "",
    bedrooms: "",
    beds: "",
    price: "",
    cleaning_fee: "",
    cancellation_policy: "",
    description: "",
    house_rules: "",
  });

  useEffect(() => {
    // Update local state with new apartment data if props change (e.g., on initial load)
    setUpdatedApt(initialApt || {
      name: "",
      accommodates: "",
      bathrooms: "",
      bedrooms: "",
      beds: "",
      price: "",
      cleaning_fee: "",
      cancellation_policy: "",
      description: "",
      house_rules: "",
    });
  }, [initialApt]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedApt((prevApt) => ({
      ...prevApt,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call onUpdate function to update parent state
    onUpdate(updatedApt);

    // Navigate back to details page
    navigate(`/apartments/${aptId}`);
  };

  const handleCancel = () => {
    // Navigate back to details page without updating
    navigate(`/apartments/${aptId}`);
  };

  return (
    <div>
      <h2 style={titleStyle}>Update apartment info</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={updatedApt.name}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Name"
        />
        <input
          type="number"
          name="accommodates"
          value={updatedApt.accommodates}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Accommodates"
          min="1"
        />
        <input
          type="number"
          name="bathrooms"
          value={updatedApt.bathrooms}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Bathrooms"
          min="1"
        />
        <input
          type="number"
          name="bedrooms"
          value={updatedApt.bedrooms}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Bedrooms"
          min="1"
        />
        <input
          type="number"
          name="beds"
          value={updatedApt.beds}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Beds"
          min="1"
        />
        <input
          type="number"
          name="price"
          value={updatedApt.price}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Price"
          min="0"
        />
        <input
          type="number"
          name="cleaning_fee"
          value={updatedApt.cleaning_fee}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Cleaning Fee"
          min="0"
        />
        <select
          name="cancellation_policy"
          value={updatedApt.cancellation_policy}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="">Select Cancellation Policy</option>
          <option value="strict">Strict</option>
          <option value="moderate">Moderate</option>
          <option value="flexible">Flexible</option>
        </select>
        <textarea
          name="description"
          value={updatedApt.description}
          onChange={handleChange}
          style={{ ...inputStyle, ...fullWidthStyle, height: "100px" }}
          placeholder="Description"
        />
        <textarea
          name="house_rules"
          value={updatedApt.house_rules}
          onChange={handleChange}
          style={{ ...inputStyle, ...fullWidthStyle, height: "100px" }}
          placeholder="House Rules"
        />
        <div style={{ gridColumn: "span 2", textAlign: "right" }}>
          <button type="button" onClick={handleCancel} style={{ marginRight: "10px" }}>
            Cancel
          </button>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditAptPage;
