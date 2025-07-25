import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShieldAlt, FaChartLine, FaHandsHelping, FaPhoneAlt } from 'react-icons/fa';
import BotpressChat from '../BotpressChat/BotpressChat';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <BotpressChat />
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Your Trusted Partner in Financial Security</h1>
            <p>
              At Worksite Solutions, we provide comprehensive financial and insurance solutions to protect what matters most to you and your family. Our expert advisors are here to guide you every step of the way.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Explore Our Services <FaArrowRight className="icon-right" />
              </Link>
              <Link to="/contact" className="quote-button">
                <span>free quotes</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Worksite Solutions?</h2>
            <p>We are committed to providing exceptional service and tailored solutions for all your financial needs. Our team of experts is dedicated to helping you achieve financial security and peace of mind.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Financial Security</h3>
              <p>Protect what matters most with our comprehensive range of insurance and investment products designed to secure your family's future.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Expert Advice</h3>
              <p>Our experienced advisors provide personalized financial guidance to help you make informed decisions.</p>
            </div>
            
            <div className="feature-card fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">
                <FaHandsHelping />
              </div>
              <h3>Dedicated Support</h3>
              <p>We're with you every step of the way, offering ongoing support and assistance when you need it most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section bg-light">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>About Worksite Solutions</h2>
              <p>
                Worksite Solutions is a registered Financial Services Provider (FSP License 12994), licensed for Long Term Insurance Category A, B, C and Short-Term Insurance Personal and Commercial Lines.
              </p>
              <p>
                Since our establishment in February 2001, we have been committed to developing strong relationships with our clients and providing them with the best financial solutions tailored to their needs.
              </p>
              <Link to="/about" className="btn">
                Learn More <FaArrowRight className="icon-right" />
              </Link>
            </div>
            <div className="about-image">
              <img 
                src={require('../../assets/images/3d-illustration-hands-with-heart-white.jpg')} 
                alt="Our Team" 
                className="team-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/600x400/f8fafc/0056b3?text=Worksite+Solutions';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Explore our comprehensive range of financial and insurance solutions</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card fade-in">
              <h3>Funeral Plans</h3>
              <p>Ensure your loved ones are taken care of with our affordable and comprehensive funeral cover options.</p>
              <Link to="/services#funeral" className="service-link">
                Learn more <FaArrowRight className="icon-right" />
              </Link>
            </div>
            
            <div className="service-card fade-in" style={{ animationDelay: '0.1s' }}>
              <h3>Retirement Planning</h3>
              <p>Secure your golden years with our tailored retirement solutions and investment strategies.</p>
              <Link to="/services#retirement" className="service-link">
                Learn more <FaArrowRight className="icon-right" />
              </Link>
            </div>
            
            <div className="service-card fade-in" style={{ animationDelay: '0.2s' }}>
              <h3>Life Insurance</h3>
              <p>Protect your family's financial future with our flexible life insurance options.</p>
              <Link to="/services#life" className="service-link">
                Learn more <FaArrowRight className="icon-right" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
