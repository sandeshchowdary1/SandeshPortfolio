import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import logoImage from '../images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);
      if (!mobileView) {
        setIsMenuOpen(false); // Close menu if switching to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="nav-wrapper">
      <nav className="home1-navbar">
        <div className="home1-logo">
          <img src={logoImage} alt="NSC Logo" />
        </div>

        <div
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        ></div>

        <div className={`home1-nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-close-icon" onClick={toggleMenu}>✕</div>
          </div>
          <a className="home1-nav-link" href="#Home" onClick={closeMenu}>ABOUT</a>
          <a className="home1-nav-link" href="#Resume" onClick={closeMenu}>RESUME</a>
          <a className="home1-nav-link" href="#Projects" onClick={closeMenu}>PROJECTS</a>
          <a className="home1-nav-link" href="#Contact" onClick={closeMenu}>CONTACT</a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {!isMenuOpen && isMobile && <span className="hamburger">☰</span>}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
