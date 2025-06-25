import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/products') {
      return location.pathname === '/products' || 
             location.pathname === '/visitor-management' || 
             location.pathname === '/qr-food-ordering';
    }
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-700" />
              <span className="text-xl font-bold text-gray-900">SITS</span>
              <span className="text-sm text-gray-600 hidden sm:block">Soham IT Solutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              About Us
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowProducts(true)}
                onMouseLeave={() => setShowProducts(false)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/products') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {showProducts && (
                <div
                  onMouseEnter={() => setShowProducts(true)}
                  onMouseLeave={() => setShowProducts(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200"
                >
                  <Link
                    to="/products"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-t-md"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/visitor-management"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Visitor Management System
                  </Link>
                  <Link
                    to="/qr-food-ordering"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-b-md"
                  >
                    QR Food Ordering System
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              Contact
            </Link>
            
            <Link
              to="/demo/visitor-management"
              className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              View Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/products') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                Products
              </Link>
              <Link
                to="/visitor-management"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50"
              >
                Visitor Management
              </Link>
              <Link
                to="/qr-food-ordering"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50"
              >
                QR Food Ordering
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/demo/visitor-management"
                onClick={() => setIsOpen(false)}
                className="block mx-3 mt-4 bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium text-center hover:bg-blue-800 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;