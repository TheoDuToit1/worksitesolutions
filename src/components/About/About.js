import React from 'react';
import { FaShieldAlt, FaHandshake, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Worksite Solutions</h1>
            <p>Your trusted partner in financial security and insurance solutions</p>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="about-intro section">
        <div className="container">
          <div className="section-title">
            <h2>Who We Are</h2>
            <p>Worksite Solutions is a registered Financial Services Provider (FSP License 12994)</p>
          </div>
          
          <div className="about-grid">
            <div className="about-content">
              <p>Established in 2001, Worksite Solutions began as part of Hollard Assurance Company, focusing on the Small and Medium Enterprise market.</p>
              <p>In 2003, we obtained our own FSP License and have since grown into a leading provider of comprehensive financial and insurance solutions across South Africa.</p>
            </div>
            <div className="about-image">
              <img 
                src={require('../../assets/images/51090958549.png')} 
                alt="Our Journey" 
                className="journey-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/600x400/f8fafc/0056b3?text=Our+Journey';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section bg-light">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon"><FaShieldAlt /></div>
              <h3>Our Vision</h3>
              <p>To be recognized as one of South Africa's premier brokerages, known for our professionalism, integrity, and commitment to excellence in all our interactions.</p>
            </div>
            
            <div className="mv-card">
              <div className="mv-icon"><FaHandshake /></div>
              <h3>Our Mission</h3>
              <p>To deliver exceptional service and build lasting partnerships based on trust, transparency, and shared success with our clients and partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="locations section">
        <div className="container">
          <div className="section-title">
            <h2>Our Locations</h2>
            <p>We serve clients across South Africa</p>
          </div>
          
          <div className="locations-grid">
            <LocationCard 
              city="Port Elizabeth"
              address1="44 2nd Avenue, Newton Park"
              address2="Port Elizabeth, 6057"
              phone="041 363 3062"
              email="marindab@worksitesolutions.co.za"
            />
            
            <LocationCard 
              city="Cape Town"
              address1="Unit 6, Durbanville Medi Suites"
              address2="9 Paul Kruger Street, Durbanville, 7550"
              phone="021 975 4530"
              email="capetown@worksitesolutions.co.za"
            />
            
            <LocationCard 
              city="East London"
              address1="Standard Bank Building, 4th Floor"
              address2="79 Oxford Street, East London, 5201"
              phone="043 743 5764"
              email="eastlondon@worksitesolutions.co.za"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const LocationCard = ({ city, address1, address2, phone, email }) => (
  <div className="location-card">
    <div className="location-icon"><FaMapMarkerAlt /></div>
    <h3>{city}</h3>
    <p>{address1}</p>
    <p>{address2}</p>
    <p><FaPhone className="icon" /> <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a></p>
    <p><FaEnvelope className="icon" /> <a href={`mailto:${email}`}>{email}</a></p>
  </div>
);

export default About;
