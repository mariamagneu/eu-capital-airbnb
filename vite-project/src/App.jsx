import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import AptDetailsPage from "./pages/AptDetailsPage.jsx";
import EditAptPage from "./pages/EditAptPage.jsx";
import ApartmentCard from "./components/ApartmentCard.jsx";
import rentalsData from "./rentals.json";

function App() {
  const [apartments, setApartments] = useState(rentalsData);
  const [editedApt, setEditedApt] = useState(null);

  const handleDelete = (id) => {
    const updatedApartments = apartments.filter((apt) => apt.id !== id);
    setApartments(updatedApartments);
    // You can handle deleting from server or local storage here if needed
  };

  const handleEditClick = (id) => {
    const apartmentToEdit = apartments.find((apt) => apt.id === id);
    setEditedApt(apartmentToEdit);
  };

  const handleCancelEdit = () => {
    setEditedApt(null);
  };

  const updateApartmentData = (updatedApt) => {
    const updatedApartments = apartments.map((apt) =>
      apt.id === updatedApt.id ? updatedApt : apt
    );
    setApartments(updatedApartments);
    setEditedApt(null);
    // Persist data if necessary, e.g., saving to a server or local storage
  };

  return (
    <Router>
      <div className="absolutecontainer">
        <Sidebar />
        <div className="maincontent">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/apartments"
              element={
                <ApartmentCard
                  apartments={apartments}
                  onDelete={handleDelete}
                  onEdit={handleEditClick}
                />
              }
            />
            <Route
              path="/apartments/:aptId"
              element={<AptDetailsPage apartments={apartments} />}
            />
            <Route
              path="/apartments/edit/:aptId"
              element={
                <EditAptPage
                  apartment={editedApt}
                  onUpdate={updateApartmentData}
                  onCancel={handleCancelEdit}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
