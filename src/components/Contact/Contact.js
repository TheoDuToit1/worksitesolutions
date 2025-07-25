import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1000);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      content: '44 2nd Avenue, Newton Park, Port Elizabeth, 6057',
      link: 'https://maps.google.com',
      linkText: 'View on Map'
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      content: '041 363 3062',
      link: 'tel:+27413633062',
      linkText: 'Call Now'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      content: 'info@worksitesolutions.co.za',
      link: 'mailto:info@worksitesolutions.co.za',
      linkText: 'Send Email'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed',
      link: '#',
      linkText: 'Book an Appointment'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you. Contact us today for any inquiries or assistance.</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="section-title">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              {isSubmitted ? (
                <div className="form-success">
                  <FaCheckCircle className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span className="required">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Your Name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address <span className="required">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message <span className="required">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      rows="5"
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                  
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <FaPaperPlane className="icon-right" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="contact-info-container">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <p>Have questions or need assistance? We're here to help!</p>
                
                <div className="contact-info-list">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="contact-info-item">
                      <div className="contact-info-icon">
                        {item.icon}
                      </div>
                      <div className="contact-info-content">
                        <h4>{item.title}</h4>
                        <p>{item.content.split('\n').map((line, i) => (
                          <span key={i} className="d-block">{line}</span>
                        ))}</p>
                        <a href={item.link} className="contact-info-link">
                          {item.linkText}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <FaXTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe 
            title="Worksite Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.04281136937!2d25.58171131521233!3d-33.94297178063972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad4b0c1bf885d%3A0x4a8e6b9c3a7e9b0a!2s44%202nd%20Ave%2C%20Newton%20Park%2C%20Gqeberha%2C%206043!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
