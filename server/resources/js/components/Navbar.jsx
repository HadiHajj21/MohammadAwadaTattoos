import React, { useState } from 'react';
import '../../css/navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        LandingPage
      </div>
      
      {/* Hamburger Icon (only visible on mobile via CSS) */}
      <div className="hamburger" onClick={toggleMenu}>
        {/* Toggle between Hamburger (☰) and Close (✕) icons */}
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        </li>
        <li>
          <a href="#location" onClick={() => setIsOpen(false)}>Location</a>
        </li>
        <li>
          <a href="#background" onClick={() => setIsOpen(false)}>Background</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;