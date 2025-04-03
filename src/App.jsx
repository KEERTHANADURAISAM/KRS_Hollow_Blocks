import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Header from './Pages/Header'
import Navbar from './Pages/Navbar'
import ProductCard from './Pages/ProductCard'
import Footer from './Pages/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar /> {/* Navbar remains static */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<ProductCard />} />
        <Route path="/contact" element={<Contact />} />
        {/* Dynamic routes for product details */}
        <Route path="/products/:productName" element={<ProductCard />} />
      </Routes>
      <Footer /> {/* Footer remains static */}
    </Router>
  )
}

export default App
