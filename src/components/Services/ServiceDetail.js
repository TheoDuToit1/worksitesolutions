import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheck, FaHandHoldingHeart, FaPiggyBank, FaChartLine, FaUserShield, FaShieldAlt, FaHandHoldingUsd } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ServiceDetail.css';

// Import the services data
import { services } from './Services';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  
  // Find the service with the matching ID
  const service = services.find(service => service.id === id);
  
  // Scroll to top on service change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // If service not found, show a 404 message
  if (!service) {
    return (
      <motion.div 
        className="service-detail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="back-button">
          <div className="container">
            <Link to="/services" className="btn-back">
              <FaArrowLeft /> Back to Services
            </Link>
          </div>
        </div>
        <div className="not-found container">
          <h2>Service not found</h2>
          <p>The service you're looking for doesn't exist or has been removed.</p>
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </motion.div>
    );
  }

  // Function to get related services (excluding the current one)
  const getRelatedServices = () => {
    return services
      .filter(s => s.id !== id && s.category === service.category)
      .slice(0, 2); // Show max 2 related services
  };

  const relatedServices = getRelatedServices();

  // Get appropriate icon based on service ID
  const getServiceIcon = (serviceId) => {
    switch(serviceId) {
      case 'funeral': return <FaHandHoldingHeart />;
      case 'retirement': return <FaPiggyBank />;
      case 'investment': return <FaChartLine />;
      case 'life': return <FaUserShield />;
      case 'medical': return <FaShieldAlt />;
      case 'savings': return <FaHandHoldingUsd />;
      default: return <FaChartLine />;
    }
  };



  return (
    <motion.div 
      className="service-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <motion.section 
        className="service-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="service-icon">
            {getServiceIcon(service.id)}
          </div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {service.title}
          </motion.h1>
          <div className="hero-actions">
            <motion.p 
              className="service-category"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/services" className="btn-back">
                <FaArrowLeft /> Back to Services
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Content */}
      <motion.section 
        className="service-content section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <motion.div 
            className="service-description"
            variants={itemVariants}
          >
            <h2>About This Service</h2>
            <p>{service.longDescription || service.description}</p>
            
            {/* Features Section */}
            {service.features && (
              <motion.div 
                className="service-features"
                variants={itemVariants}
              >
                <h3>Key Features</h3>
                <ul>
                  {service.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <span className="feature-icon"><FaCheck /></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Why Choose Us Section */}
            <motion.div className="why-choose-us" variants={itemVariants}>
              <div className="why-choose-container">
                <div className="why-choose-content">
                  <h2>Why Choose Us</h2>
                  <div className="features-list">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaCheck />
                      </div>
                      <div className="feature-text">
                        <h4>Expert Team</h4>
                        <p>Our team of certified professionals has years of experience in the industry.</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaCheck />
                      </div>
                      <div className="feature-text">
                        <h4>Customer Satisfaction</h4>
                        <p>We prioritize your needs and ensure 100% satisfaction with our services.</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaCheck />
                      </div>
                      <div className="feature-text">
                        <h4>24/7 Support</h4>
                        <p>Round-the-clock assistance for all your queries and concerns.</p>
                      </div>
                    </div>
                  </div>
                  <motion.button 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get a Free Quote
                  </motion.button>
                </div>
                <div className="why-choose-image">
                  <img 
                    src={require('../../assets/images/b467a636-6025-4837-9df1-4255c80c92e3.png')} 
                    alt="Professional team working" 
                    className="why-choose-img"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="service-cta"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            <div className="cta-content">
              <h3>Ready to get started?</h3>
              <p>Contact us today to learn more about our {service.title} services.</p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/contact" className="btn btn-primary">
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <motion.section 
          className="related-services section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="section-title">
              <h2>Related Services</h2>
              <p>Explore other services that might interest you</p>
            </div>
            <div className="services-grid">
              {relatedServices.map((relatedService, index) => (
                <motion.div 
                  key={relatedService.id} 
                  className="service-card"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                >
                  <div className="service-icon">
                    {getServiceIcon(relatedService.id)}
                  </div>
                  <h3>{relatedService.title}</h3>
                  <p>{relatedService.description}</p>
                  <Link to={`/services/${relatedService.id}`} className="btn-link">
                    Learn More <FaArrowRight className="arrow-icon" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </motion.div>
  );
};

export default ServiceDetail;
