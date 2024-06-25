import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
function App() {
  return (
    <div class="absolutecontainer">
      <Sidebar />
      <div class="maincontent">
        <Navbar />
        <h1>WOMEN WHO CODE!</h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;
