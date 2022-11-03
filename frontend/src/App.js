import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"
import "./App.css";

// Import Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

// Import Screens
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />{/* Navbar */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} /> {/* SideDrawer */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />{/* Backdrop */}
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} /> {/* HomeScreen */}
          <Route exact path="/product/:id" element={<ProductScreen />} /> {/* ProductScreen */}
          <Route exact path="/cart" element={<CartScreen />} /> {/* CartScreen */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
