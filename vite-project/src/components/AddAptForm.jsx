import { useState } from "react";

function AddAptForm(props) {
  const [id, setId] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [name, setName] = useState("");
  const [space, setSpace] = useState("");
  const [description, setDescription] = useState("");
  const [houseRules, setHouseRules] = useState("");
  const [hostName, setHostName] = useState("");
  const [hostSince, setHostSince] = useState("");
  const [hostResponseTime, setHostResponseTime] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [accommodates, setAccommodates] = useState(0);
  const [bathrooms, setBathrooms] = useState(0.0);
  const [bedrooms, setBedrooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const [price, setPrice] = useState(0);
  const [cleaningFee, setCleaningFee] = useState(0);
  const [reviewScoresRating, setReviewScoresRating] = useState(0);
  const [cancellationPolicy, setCancellationPolicy] = useState("");

  function handleIdInput(e) {
    setId(e.target.value);
  }

  function handleCountryInput(e) {
    setCountry(e.target.value);
  }

  function handleCityInput(e) {
    setCity(e.target.value);
  }

  function handleNeighbourhoodInput(e) {
    setNeighbourhood(e.target.value);
  }

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleSpaceInput(e) {
    setSpace(e.target.value);
  }

  function handleDescriptionInput(e) {
    setDescription(e.target.value);
  }

  function handleHouseRulesInput(e) {
    setHouseRules(e.target.value);
  }

  function handleHostNameInput(e) {
    setHostName(e.target.value);
  }

  function handleHostSinceInput(e) {
    setHostSince(e.target.value);
  }

  function handleHostResponseTimeInput(e) {
    setHostResponseTime(e.target.value);
  }

  function handlePropertyTypeInput(e) {
    setPropertyType(e.target.value);
  }

  function handleRoomTypeInput(e) {
    setRoomType(e.target.value);
  }

  function handleAccommodatesInput(e) {
    setAccommodates(Number(e.target.value));
  }

  function handleBathroomsInput(e) {
    setBathrooms(Number(e.target.value));
  }

  function handleBedroomsInput(e) {
    setBedrooms(Number(e.target.value));
  }

  function handleBedsInput(e) {
    setBeds(Number(e.target.value));
  }

  function handlePriceInput(e) {
    setPrice(Number(e.target.value));
  }

  function handleCleaningFeeInput(e) {
    setCleaningFee(Number(e.target.value));
  }

  function handleReviewScoresRatingInput(e) {
    setReviewScoresRating(Number(e.target.value));
  }

  function handleCancellationPolicyInput(e) {
    setCancellationPolicy(e.target.value);
  }

  // Handle input functions for picture_url object
  function handleThumbnailInput(e) {
    setThumbnail(e.target.checked);
  }

  function handleFilenameInput(e) {
    setFilename(e.target.value);
  }

  function handleFormatInput(e) {
    setFormat(e.target.value);
  }

  function handleWidthInput(e) {
    setWidth(Number(e.target.value));
  }

  function handleMimetypeInput(e) {
    setMimetype(e.target.value);
  }

  function handleEtagInput(e) {
    setEtag(e.target.value);
  }

  function handlePictureIdInput(e) {
    setPictureId(e.target.value);
  }

  function handleLastSynchronizedInput(e) {
    setLastSynchronized(e.target.value);
  }

  function handleColorSummaryInput(e) {
    setColorSummary(e.target.value.split(","));
  }

  function handleHeightInput(e) {
    setHeight(Number(e.target.value));
  }

  function handleUrlInput(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
      hostResponseTime,
      propertyType,
      roomType,
      accommodates,
      bathrooms,
      bedrooms,
      beds,
      price,
      cleaningFee,
      reviewScoresRating,
      cancellationPolicy,
    };
    console.log("New Listing ", newListing);
    props.addApt(newListing);

    // Reset form after submission
    setId("");
    setCountry("");
    setCity("");
    setNeighbourhood("");
    setName("");
    setSpace("");
    setDescription("");
    setHouseRules("");
    setHostName("");
    setHostSince("");
    setHostResponseTime("");
    setPropertyType("");
    setRoomType("");
    setAccommodates(0);
    setBathrooms(0.0);
    setBedrooms(0);
    setBeds(0);
    setPrice(0);
    setCleaningFee(0);
    setReviewScoresRating(0);
    setCancellationPolicy("");
  }

  return (
    <>
      <h1>New Apartment Listing</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={handleIdInput}
            placeholder="ID"
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={handleCountryInput}
            placeholder="Country"
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={handleCityInput}
            placeholder="City"
          />
        </label>
        <label>
          Neighbourhood:
          <input
            type="text"
            value={neighbourhood}
            onChange={handleNeighbourhoodInput}
            placeholder="Neighbourhood"
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameInput}
            placeholder="Name"
          />
        </label>
        <label>
          Space:
          <input
            type="text"
            value={space}
            onChange={handleSpaceInput}
            placeholder="Space"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionInput}
            placeholder="Description"
          />
        </label>
        <label>
          House Rules:
          <input
            type="text"
            value={houseRules}
            onChange={handleHouseRulesInput}
            placeholder="House Rules"
          />
        </label>
        <label>
          Host Name:
          <input
            type="text"
            value={hostName}
            onChange={handleHostNameInput}
            placeholder="Host Name"
          />
        </label>
        <label>
          Host Since:
          <input
            type="date"
            value={hostSince}
            onChange={handleHostSinceInput}
            placeholder="Host Since"
          />
        </label>
        <label>
          Host Response Time:
          <input
            type="text"
            value={hostResponseTime}
            onChange={handleHostResponseTimeInput}
            placeholder="Host Response Time"
          />
        </label>
        <label>
          Property Type:
          <input
            type="text"
            value={propertyType}
            onChange={handlePropertyTypeInput}
            placeholder="Property Type"
          />
        </label>
        <label>
          Room Type:
          <input
            type="text"
            value={roomType}
            onChange={handleRoomTypeInput}
            placeholder="Room Type"
          />
        </label>
        <label>
          Accommodates:
          <input
            type="number"
            value={accommodates}
            onChange={handleAccommodatesInput}
            placeholder="Accommodates"
          />
        </label>
        <label>
          Bathrooms:
          <input
            type="number"
            value={bathrooms}
            onChange={handleBathroomsInput}
            placeholder="Bathrooms"
          />
        </label>
        <label>
          Bedrooms:
          <input
            type="number"
            value={bedrooms}
            onChange={handleBedroomsInput}
            placeholder="Bedrooms"
          />
        </label>
        <label>
          Beds:
          <input
            type="number"
            value={beds}
            onChange={handleBedsInput}
            placeholder="Beds"
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={handlePriceInput}
            placeholder="Price"
          />
        </label>
        <label>
          Cleaning Fee:
          <input
            type="number"
            value={cleaningFee}
            onChange={handleCleaningFeeInput}
            placeholder="Cleaning Fee"
          />
        </label>
        <label>
          Review Scores Rating:
          <input
            type="number"
            value={reviewScoresRating}
            onChange={handleReviewScoresRatingInput}
            placeholder="Review Scores Rating"
          />
        </label>
        <label>
          Cancellation Policy:
          <input
            type="text"
            value={cancellationPolicy}
            onChange={handleCancellationPolicyInput}
            placeholder="Cancellation Policy"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default AddAptForm;
