import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLink = ({ to, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`nav-link py-2 px-3 rounded-md ${
        isActive
          ? 'text-burgundy-red bg-gray-800'
          : 'text-white hover:text-royal-blue hover:bg-gray-800'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-midnight-blue shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-burgundy-red text-2xl font-bold">परम कॉम्पुटर</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/about" label="आमच्याबद्दल" />
            <NavLink to="/digital-seva" label="डिजिटल सेवा" />
            <NavLink to="/digital-printing" label="डिजिटल प्रिंटिंग" />
            <NavLink to="/events" label="कार्यक्रम" />
            <NavLink to="/concact" label=" संपर्क" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-royal-blue p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden absolute left-0 right-0 bg-midnight-blue shadow-lg z-10"
          >
            <div className="flex flex-col space-y-2 px-4 py-3">
              <NavLink to="/about" label="आमच्याबद्दल" onClick={() => setIsOpen(false)} />
              <NavLink to="/digital-seva" label="डिजिटल सेवा" onClick={() => setIsOpen(false)} />
              <NavLink to="/digital-printing" label="डिजिटल प्रिंटिंग" onClick={() => setIsOpen(false)} />
              <NavLink to="/events" label="कार्यक्रम" onClick={() => setIsOpen(false)} />
              <NavLink to="/concact" label=" संपर्क" onClick={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
