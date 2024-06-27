import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ItemDetails from "./components/ItemDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import AptDetailsPage from "./pages/AptDetailsPage";

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
            {/* Updated route */}
            <Route path="/dashboard/:id" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/apartments/:aptId" element={<AptDetailsPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
