import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Dashboard from "./components/Dashboard.jsx"; // Updated import
import ItemDetails from "./components/ItemDetails.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <Router>
      <div className="absolutecontainer">
        <Sidebar />
        <div className="maincontent">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Updated route */}
            <Route path="/dashboard/:id" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
