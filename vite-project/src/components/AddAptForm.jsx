import React, { useState } from "react";

const formStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "15px", // Adjusted to match EditAptPage
  width: "70%",
  margin: "0 auto",
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
  gridColumn: "span 3",
  width: "calc(100% - 16px)",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "16px",
};

function AddAptForm({ handleNewApartment }) {
  console.log("handleNewApartment type:", typeof handleNewApartment);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [space, setSpace] = useState("");
  const [description, setDescription] = useState("");
  const [houseRules, setHouseRules] = useState("");
  const [hostName, setHostName] = useState("");
  const [hostSince, setHostSince] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [accommodates, setAccommodates] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [price, setPrice] = useState("");
  const [cleaningFee, setCleaningFee] = useState("");
  const [date, setDate] = useState("");
  const [cancellationPolicy, setCancellationPolicy] = useState("");

  const generateId = () => {
    return "_" + Math.random().toString(36).substr(2, 9); // Using a simple UUID generation approach
  };

  const handleSubmit = (e) => {
    console.log("something is trying to be submitted");
    e.preventDefault();
    const id = generateId();
    const newListing = {
      id,
      name,
      country,
      city,
      neighbourhood,
      space,
      description,
      houseRules,
      hostName,
      hostSince,
      propertyType,
      roomType,
      accommodates: parseInt(accommodates, 10),
      bathrooms: parseInt(bathrooms, 10),
      bedrooms: parseInt(bedrooms, 10),
      beds: parseInt(beds, 10),
      price: parseFloat(price),
      cleaningFee: parseFloat(cleaningFee),
      date,
      cancellationPolicy,
    };

    handleNewApartment(newListing);

    // Reset form after submission
    setName("");
    setCountry("");
    setCity("");
    setNeighbourhood("");
    setSpace("");
    setDescription("");
    setHouseRules("");
    setHostName("");
    setHostSince("");
    setPropertyType("");
    setRoomType("");
    setAccommodates("");
    setBathrooms("");
    setBedrooms("");
    setBeds("");
    setPrice("");
    setCleaningFee("");
    setDate("");
    setCancellationPolicy("");
  };

  return (
    <>
      <h1 style={titleStyle}>Add new apartment</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={inputStyle}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          style={inputStyle}
        />
        <input
          type="text"
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
          placeholder="Host Name"
          style={inputStyle}
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          style={inputStyle}
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          style={inputStyle}
        />
        <input
          type="text"
          value={neighbourhood}
          onChange={(e) => setNeighbourhood(e.target.value)}
          placeholder="Neighbourhood"
          style={inputStyle}
        />
        <input
          type="text"
          value={space}
          onChange={(e) => setSpace(e.target.value)}
          placeholder="Space"
          style={inputStyle}
        />
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          style={selectStyle}
        >
          <option value="" disabled>
            Property Type
          </option>
          <option value="Apartment">Apartment</option>
          <option value="Loft">Loft</option>
          <option value="Other">Other</option>
        </select>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          style={selectStyle}
        >
          <option value="" disabled>
            Room Type
          </option>
          <option value="Entire Home/Apt">Entire Home/Apt</option>
          <option value="Private Room">Private Room</option>
          <option value="Shared Room">Shared Room</option>
        </select>
        <input
          type="number"
          value={accommodates}
          onChange={(e) => setAccommodates(e.target.value)}
          placeholder="Accommodates"
          style={inputStyle}
          min="1"
        />
        <input
          type="number"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          placeholder="Bathrooms"
          style={inputStyle}
          min="0"
        />
        <input
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          placeholder="Bedrooms"
          style={inputStyle}
          min="0"
        />
        <input
          type="number"
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          placeholder="Beds"
          style={inputStyle}
          min="0"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          style={inputStyle}
          min="0"
        />
        <input
          type="number"
          value={cleaningFee}
          onChange={(e) => setCleaningFee(e.target.value)}
          placeholder="Cleaning Fee"
          style={inputStyle}
          min="0"
        />
        <select
          value={cancellationPolicy}
          onChange={(e) => setCancellationPolicy(e.target.value)}
          style={selectStyle}
        >
          <option value="" disabled>
            Cancellation Policy
          </option>
          <option value="Strict">Strict</option>
          <option value="Moderate">Moderate</option>
          <option value="Flexible">Flexible</option>
        </select>
        <textarea
          value={houseRules}
          onChange={(e) => setHouseRules(e.target.value)}
          placeholder="House Rules"
          style={{ ...inputStyle, ...fullWidthStyle }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={{ ...inputStyle, ...fullWidthStyle }}
        />
        <div style={{ gridColumn: "span 3", textAlign: "right" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default AddAptForm;
