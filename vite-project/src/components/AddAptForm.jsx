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

function AddAptForm({ addApt }) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [name, setName] = useState("");
  const [space, setSpace] = useState("");
  const [description, setDescription] = useState("");
  const [houseRules, setHouseRules] = useState("");
  const [hostName, setHostName] = useState("");
  const [hostSince, setHostSince] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [accommodates, setAccommodates] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const [price, setPrice] = useState(0);
  const [cleaningFee, setCleaningFee] = useState(0);
  const [date, setDate] = useState("");
  const [cancellationPolicy, setCancellationPolicy] = useState("");

  const generateId = () => {
    return Math.floor(Math.random() * (9999999 - 8455484 + 1)) + 8455484;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateId();
    const newListing = {
      id,
      country,
      city,
      neighbourhood,
      name,
      space,
      description,
      houseRules,
      hostName,
      hostSince,
      propertyType,
      roomType,
      accommodates,
      bathrooms,
      bedrooms,
      beds,
      price,
      cleaningFee,
      date,
      cancellationPolicy,
    };
    console.log("New Listing ", newListing);
    addApt(newListing);

    // Reset form after submission
    setCountry("");
    setCity("");
    setNeighbourhood("");
    setName("");
    setSpace("");
    setDescription("");
    setHouseRules("");
    setHostName("");
    setHostSince("");
    setPropertyType("");
    setRoomType("");
    setAccommodates(0);
    setBathrooms(0);
    setBedrooms(0);
    setBeds(0);
    setPrice(0);
    setCleaningFee(0);
    setDate("");
    setCancellationPolicy("");
  };

  return (
    <>
      <h1 style={titleStyle}>Add new apartment</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={inputStyle}
        />
        <input
          type="text"
          value={space}
          onChange={(e) => setSpace(e.target.value)}
          placeholder="Space"
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
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
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
          onChange={(e) => setAccommodates(Number(e.target.value))}
          placeholder="Accommodates"
          style={inputStyle}
        />
        <input
          type="number"
          value={bathrooms}
          onChange={(e) => setBathrooms(Number(e.target.value))}
          placeholder="Bathrooms"
          style={inputStyle}
        />
        <input
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(Number(e.target.value))}
          placeholder="Bedrooms"
          style={inputStyle}
        />
        <input
          type="number"
          value={beds}
          onChange={(e) => setBeds(Number(e.target.value))}
          placeholder="Beds"
          style={inputStyle}
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Price"
          style={inputStyle}
        />
        <input
          type="number"
          value={cleaningFee}
          onChange={(e) => setCleaningFee(Number(e.target.value))}
          placeholder="Cleaning Fee"
          style={inputStyle}
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
