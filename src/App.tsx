import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import VisitorManagement from './pages/VisitorManagement';
import QRFoodOrdering from './pages/QRFoodOrdering';
import Contact from './pages/Contact';
import Demo from './pages/Demo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/visitor-management" element={<VisitorManagement />} />
            <Route path="/qr-food-ordering" element={<QRFoodOrdering />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo/:product" element={<Demo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;