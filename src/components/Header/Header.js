import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaChevronDown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  
  // Toggle dropdown for mobile
  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  // Handle scroll events for header appearance
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for styling changes
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Only apply hide/show logic if we have a header reference
      if (!headerRef.current) return;
      
      // Scrolling down and past threshold
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        headerRef.current.classList.add('hide');
        headerRef.current.classList.remove('show');
      } 
      // Scrolling up or at top of page
      else if (currentScrollY < lastScrollY || currentScrollY < 10) {
        headerRef.current.classList.remove('hide');
        headerRef.current.classList.add('show');
      }
      
      lastScrollY = currentScrollY;
    };
    
    // Use passive scroll for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Add smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      if (e.target.hash && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Account for header height
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleSmoothScroll);

    // Initial check
    handleScroll();

    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    // Toggle body scroll and overlay when menu is open/closed
    if (newIsOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('menu-open');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if current path matches the link
  const isActive = (path) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  // Services dropdown items
  const servicesItems = [
    { name: 'Funeral Plans', path: '/services/funeral' },
    { name: 'Retirement Planning', path: '/services/retirement' },
    { name: 'Investment Plans', path: '/services/investment' },
    { name: 'Life Insurance', path: '/services/life' },
    { name: 'Medical Aid', path: '/services/medical' },
    { name: 'Savings Plans', path: '/services/savings' },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className={`nav-overlay ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Close menu"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        />
      )}
      <header 
        ref={headerRef}
        className={`header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}
      >
      <div className="container">
        <div className="header-container">
          <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
            <h1>Worksite Solutions</h1>
            <span>Financial Insurance</span>
          </Link>
          
          <button 
            className={`mobile-menu-btn ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="menu-icon">
              <FaBars className="menu-open-icon" />
              <FaTimes className="menu-close-icon" />
            </span>
          </button>
          
          <nav 
            id="main-navigation" 
            className={`nav-links ${isOpen ? 'open' : ''}`}
            aria-label="Main navigation"
          >
            <Link 
              to="/" 
              className={`nav-item ${isActive('/') ? 'active' : ''}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>
            
            <div className={`dropdown ${isActive('/services') ? 'active' : ''} ${activeDropdown === 'services' ? 'active' : ''}`}>
              <button 
                className="dropdown-toggle nav-item"
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
                onClick={() => toggleDropdown('services')}
              >
                Our Services
                <FaChevronDown className="dropdown-icon" style={{
                  marginLeft: '4px',
                  transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} />
              </button>
              <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                <Link to="/services#funeral" className="dropdown-item" onClick={() => setIsOpen(false)}>Funeral Plans</Link>
                <Link to="/services#retirement" className="dropdown-item" onClick={() => setIsOpen(false)}>Retirement Planning</Link>
                <Link to="/services#investment" className="dropdown-item" onClick={() => setIsOpen(false)}>Investment Plans</Link>
                <Link to="/services#life" className="dropdown-item" onClick={() => setIsOpen(false)}>Life Insurance</Link>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className={`nav-item ${isActive('/about') ? 'active' : ''}`}
            >
              About Us
            </Link>
            
            <Link 
              to="/contact" 
              className={`nav-item ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact Us
            </Link>
            <a 
              href="tel:+27413633062" 
              className="contact-btn nav-item"
              onClick={handleContactClick}
              aria-label="Call us"
            >
              <FaPhone className="phone-icon" /> 
              <span className="phone-text">041 363 3062</span>
            </a>
          </nav>
        </div>
      </div>
      </header>
    </>
  );
};

export default Header;
