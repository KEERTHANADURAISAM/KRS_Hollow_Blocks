import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Header from "./Pages/Header";
import Navbar from "./Pages/Navbar";
import ProductCard from "./Pages/ProductCard";
import Footer from "./Pages/Footer";
import HollowBlocks from "./Pages/HollowBlocks";
import PaverBlocks from "./Pages/PaverBlocks";
import MoledRings from "./Pages/MoledRings";
import MoldedPillars from "./Pages/MoldedPillars";
// import ProductDetails from "./Pages/ProductDetails"; // New Component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* All Products Page */}
        <Route path="/products" element={<ProductCard />} />
        
        {/* Individual Product Pages */}
        <Route path="/products/hollow-blocks" element={<HollowBlocks />} />
        <Route path="/products/paver-blocks" element={<PaverBlocks />} />
        <Route path="/products/molded-rings" element={<MoledRings />} />
        <Route path="/products/molded-pillars" element={<MoldedPillars />} />

        {/* Dynamic Route for Product Details */}
        {/* <Route path="/products/:productName" element={<ProductDetails />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
