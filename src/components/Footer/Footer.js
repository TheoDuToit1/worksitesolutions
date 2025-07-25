import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="footer">
      <button 
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>

      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for the latest financial tips and updates.</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Worksite Solutions</h3>
            <p>Providing comprehensive financial and insurance solutions to help secure your future and protect what matters most.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services#funeral">Funeral Plans</Link></li>
              <li><Link to="/services#retirement">Retirement Planning</Link></li>
              <li><Link to="/services#investment">Investment Plans</Link></li>
              <li><Link to="/services#life">Life Insurance</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt className="icon" />
                <span>44 2nd Avenue, Newton Park, Port Elizabeth, 6057</span>
              </li>
              <li>
                <FaPhone className="icon" />
                <a href="tel:+27413633062">041 363 3062</a>
              </li>
              <li>
                <FaEnvelope className="icon" />
                <a href="mailto:info@worksitesolutions.co.za">info@worksitesolutions.co.za</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Worksite Solutions. All Rights Reserved.</p>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="divider">|</span>
              <Link to="/terms">Terms & Conditions</Link>
              <span className="divider">|</span>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
