import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './NewHeader.css';

const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll, { passive: true });
  }, [scrolled]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Toggle mobile menu
  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    // Toggle body scroll
    if (newIsOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Toggle dropdown
  const toggleDropdown = (e, dropdownName) => {
    e.preventDefault();
    e.stopPropagation();
    
    // On mobile, we want to toggle the dropdown open/closed
    // On desktop, we want to close other dropdowns when opening a new one
    if (window.innerWidth <= 992) {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    } else {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    }
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth > 992 && activeDropdown && !e.target.closest('.dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Our Services', 
      path: '/services',
      dropdown: [
        { name: 'All Services', path: '/services' },
        { name: 'Funeral Plans', path: '/services/funeral' },
        { name: 'Retirement Planning', path: '/services/retirement' },
        { name: 'Investment Plans', path: '/services/investment' },
        { name: 'Life Insurance', path: '/services/life' },
        { name: 'Medical Aid', path: '/services/medical' },
        { name: 'Savings Plans', path: '/services/savings' }
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`new-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="new-header-inner">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="new-logo">
            <h1>Worksite Solutions</h1>
            <span>Your Trusted Partner</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`new-nav-links ${isOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <div key={item.name} className={item.dropdown ? 'dropdown' : ''}>
                {item.dropdown ? (
                  <>
                    <button 
                      className="dropdown-toggle nav-item"
                      onClick={(e) => toggleDropdown(e, item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <span style={{ marginLeft: '4px' }}>
                        {activeDropdown === item.name ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    <div className={`dropdown-menu ${activeDropdown === item.name ? 'active' : ''}`}>
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.path} 
                          className="dropdown-item"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    to={item.path} 
                    className="nav-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Link 
              to="/contact" 
              className="nav-item"
              onClick={() => setIsOpen(false)}
              style={{
                backgroundColor: '#1e40af',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '6px',
                marginLeft: '0.5rem',
              }}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
