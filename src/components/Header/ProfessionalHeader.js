import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaEnvelope } from 'react-icons/fa';
import './ProfessionalHeader.css';

const ProfessionalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change and restore scroll
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    // Always restore body scroll when route changes
    document.body.style.overflow = 'auto';
  }, [location]);

  // Toggle mobile menu
  const toggleMenu = () => {
    const newIsOpen = !isMenuOpen;
    setIsMenuOpen(newIsOpen);
    
    if (newIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  // Cleanup effect to ensure scroll is always restored
  useEffect(() => {
    return () => {
      // Cleanup: always restore scroll when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  // Effect to manage body scroll based on menu state
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  // Toggle services dropdown
  const toggleServices = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.services-dropdown') && isServicesOpen) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isServicesOpen]);

  const services = [
    { name: 'All Services', path: '/services' },
    { name: 'Funeral Plans', path: '/services/funeral' },
    { name: 'Retirement Planning', path: '/services/retirement' },
    { name: 'Investment Plans', path: '/services/investment' },
    { name: 'Life Insurance', path: '/services/life' },
    { name: 'Medical Aid', path: '/services/medical' },
    { name: 'Savings Plans', path: '/services/savings' }
  ];

  return (
    <>
      {/* Main Header */}
      <header className={`professional-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <div className="logo-content">
                <h1>Worksite Solutions</h1>
                <span className="tagline">Your Trusted Insurance Partner</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul className="nav-menu">
                <li><Link to="/" className="nav-link">Home</Link></li>
                
                <li className="services-dropdown">
                  <button 
                    className="nav-link dropdown-toggle"
                    onClick={toggleServices}
                    aria-expanded={isServicesOpen}
                  >
                    Our Services
                    <FaChevronDown className={`chevron ${isServicesOpen ? 'rotated' : ''}`} />
                  </button>
                  <div className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        to={service.path} 
                        className="dropdown-item"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </li>
                
                <li><Link to="/about" className="nav-link">About Us</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
              </ul>
              
              <Link to="/contact" className="cta-button">
                Get Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <ul className="mobile-menu">
              <li>
                <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              
              <li className="mobile-services">
                <button 
                  className="mobile-link dropdown-toggle"
                  onClick={toggleServices}
                  aria-expanded={isServicesOpen}
                  type="button"
                >
                  Our Services
                  <FaChevronDown className={`chevron ${isServicesOpen ? 'rotated' : ''}`} />
                </button>
                <div className={`mobile-dropdown ${isServicesOpen ? 'show' : ''}`}>
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      to={service.path} 
                      className="mobile-dropdown-item"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </li>
              
              <li>
                <Link to="/about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              
              <li>
                <Link to="/contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              
              <li className="mobile-cta">
                <Link 
                  to="/contact" 
                  className="mobile-cta-button"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMenuOpen && <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}></div>}
      </header>
    </>
  );
};

export default ProfessionalHeader;
