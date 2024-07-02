import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import AptDetailsPage from "./pages/AptDetailsPage.jsx";
import EditAptPage from "./pages/EditAptPage.jsx";
import AddAptForm from "./components/AddAptForm.jsx"; // Import AddAptForm component
import rentalsData from "./rentals.json";
import Dashboard from "./pages/Dashboard.jsx"; // Import Dashboard component

function App() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    setApartments(rentalsData);
  }, []);

  const handleDelete = (id) => {
    const updatedApartments = apartments.filter((apt) => apt.id !== id);
    setApartments(updatedApartments);
  };

  const updateApartmentData = (updatedApt) => {
    const updatedApartments = apartments.map((apt) =>
      apt.id === updatedApt.id ? updatedApt : apt
    );
    setApartments(updatedApartments);
  };

  const addNewApartment = (newApartment) => {
    // Generate a new ID for the new apartment
    newApartment.id =
      apartments.length > 0
        ? Math.max(...apartments.map((apt) => apt.id)) + 1
        : 1;

    // Update state immutably using the functional form of setState
    setApartments((prevApartments) => [newApartment, ...prevApartments]);
  };

  return (
    <Router>
      <div className="absolutecontainer">
        <Sidebar className="sidebar" />
        <div className="maincontent">
          <Navbar className="navbar" />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    apartments={apartments}
                    handleDelete={handleDelete}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/apartments/:aptId"
                element={<AptDetailsPage apartments={apartments} />}
              />
              <Route
                path="/apartments/edit/:aptId"
                element={
                  <EditAptPage
                    apartments={apartments}
                    onUpdate={updateApartmentData}
                  />
                }
              />
              <Route
                path="/add"
                element={<AddAptForm newApt={addNewApartment} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer className="footer" />
        </div>
      </div>
    </Router>
  );
}

export default App;
