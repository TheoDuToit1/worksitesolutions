import React, { useState } from 'react';
import { FaShieldAlt, FaPiggyBank, FaChartLine, FaHandHoldingHeart, FaHandHoldingUsd, FaUserShield, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Services.css';

// Export services data to be used in ServiceDetail component
export const services = [
    {
      id: 'funeral',
      title: 'Funeral Plans',
      icon: <FaHandHoldingHeart />,
      description: 'Comprehensive funeral cover options to ensure your loved ones are taken care of during difficult times with affordable and flexible plans.',
      longDescription: 'Our funeral plans provide comprehensive coverage to help ease the financial burden on your loved ones during a difficult time. We offer flexible payment options and customizable plans to suit your specific needs and budget. With our funeral cover, you can have peace of mind knowing that your family will be taken care of when they need it most.',
      category: 'insurance',
      featured: true,
      features: [
        'Coverage for funeral expenses',
        'Flexible payment options',
        'No medical examinations required',
        '24/7 claims assistance',
        'Coverage for extended family members'
      ],
      benefits: [
        { title: 'Financial Security', description: 'Protect your family from unexpected funeral costs' },
        { title: 'Peace of Mind', description: 'Know that your loved ones will be taken care of' },
        { title: 'Flexibility', description: 'Choose a plan that fits your budget and needs' }
      ]
    },
    {
      id: 'retirement',
      title: 'Retirement Planning',
      icon: <FaPiggyBank />,
      description: 'Secure your golden years with our tailored retirement solutions and investment strategies designed to provide financial stability.',
      longDescription: 'Our retirement planning services help you build a secure financial future. We work with you to create a personalized retirement strategy that aligns with your goals, whether you\'re just starting to save or are nearing retirement age. Our experts will guide you through investment options, tax strategies, and income planning to ensure you can enjoy your retirement years with confidence.',
      category: 'investment',
      featured: true,
      features: [
        'Personalized retirement planning',
        'Investment portfolio management',
        'Tax-efficient strategies',
        'Income planning',
        'Regular portfolio reviews'
      ],
      benefits: [
        { title: 'Financial Freedom', description: 'Achieve the retirement lifestyle you desire' },
        { title: 'Expert Guidance', description: 'Benefit from our experienced financial advisors' },
        { title: 'Peace of Mind', description: 'Know you\'re on track for a comfortable retirement' }
      ]
    },
    {
      id: 'investment',
      title: 'Investment Plans',
      icon: <FaChartLine />,
      description: 'Grow your wealth with our diverse range of investment options and expert financial advice to help you achieve your long-term goals.',
      longDescription: 'Our investment plans are designed to help you grow your wealth over time. Whether you\'re saving for a specific goal or building long-term wealth, we offer a range of investment options to suit your risk tolerance and financial objectives. Our team of investment professionals will work with you to develop a customized investment strategy and provide ongoing guidance to help you stay on track.',
      category: 'investment',
      featured: true,
      features: [
        'Diversified investment portfolios',
        'Risk assessment and management',
        'Regular performance reviews',
        'Tax-efficient investing',
        'Access to professional fund managers'
      ],
      benefits: [
        { title: 'Wealth Growth', description: 'Potential for higher returns than traditional savings' },
        { title: 'Diversification', description: 'Spread risk across different asset classes' },
        { title: 'Professional Management', description: 'Benefit from expert investment management' }
      ]
    },
    {
      id: 'life',
      title: 'Life Insurance',
      icon: <FaUserShield />,
      description: 'Protect your family\'s financial future with flexible life insurance options that provide peace of mind and security.',
      longDescription: 'Life insurance is one of the most important financial safety nets you can have in place for your loved ones. Our life insurance policies provide financial protection that can help your family maintain their standard of living, pay off debts, and cover future expenses in the event of your passing. We offer a range of policy options to suit different needs and budgets, with the flexibility to adjust coverage as your circumstances change.',
      category: 'insurance',
      featured: true,
      features: [
        'Term and whole life insurance options',
        'Flexible coverage amounts',
        'Competitive premium rates',
        'Optional riders for additional protection',
        'Fast and simple application process'
      ],
      benefits: [
        { title: 'Family Protection', description: 'Ensure your loved ones are financially secure' },
        { title: 'Debt Coverage', description: 'Help cover mortgages, loans, and other debts' },
        { title: 'Estate Planning', description: 'Provide for future generations' }
      ]
    },
    {
      id: 'medical',
      title: 'Medical Aid',
      icon: <FaShieldAlt />,
      description: 'Comprehensive medical aid solutions to ensure you and your family have access to quality healthcare when you need it most.',
      longDescription: 'Our medical aid plans provide comprehensive healthcare coverage for you and your family. We understand that healthcare needs change over time, which is why we offer flexible plans that can be tailored to your specific requirements. From hospital cover to chronic medication and day-to-day benefits, our medical aid solutions ensure you have access to quality healthcare when you need it most, without the financial stress.',
      category: 'insurance',
      featured: false,
      features: [
        'Hospital cover for in-patient care',
        'Chronic medication benefits',
        'Preventive care services',
        'Dental and optical benefits',
        'Nationwide network of healthcare providers'
      ],
      benefits: [
        { title: 'Comprehensive Coverage', description: 'Access to quality healthcare services' },
        { title: 'Financial Protection', description: 'Avoid unexpected medical expenses' },
        { title: 'Peace of Mind', description: 'Know you\'re covered when health issues arise' }
      ]
    },
    {
      id: 'savings',
      title: 'Savings Plans',
      icon: <FaHandHoldingUsd />,
      description: 'Flexible savings solutions to help you achieve your financial goals, whether for education, a home, or other life milestones.',
      longDescription: 'Our savings plans are designed to help you achieve your financial goals, whether you\'re saving for education, a new home, a dream vacation, or any other important life milestone. We offer a variety of savings products with competitive interest rates and flexible terms to suit your timeline and financial situation. With automatic contribution options and online account management, reaching your savings goals has never been easier.',
      category: 'investment',
      featured: false,
      features: [
        'Goal-oriented savings accounts',
        'Competitive interest rates',
        'Flexible contribution options',
        'Easy online account management',
        'No or low fees'
      ],
      benefits: [
        { title: 'Financial Discipline', description: 'Develop regular saving habits' },
        { title: 'Goal Achievement', description: 'Save systematically for your dreams' },
        { title: 'Earn Interest', description: 'Grow your money over time' }
      ]
    }
  ];

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive financial and insurance solutions tailored to your needs</p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="services-nav section">
        <div className="container">
          <div className="section-title">
            <h2>What We Offer</h2>
            <p>Explore our range of financial products and services</p>
          </div>
          
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Services
            </button>
            <button 
              className={`tab ${activeTab === 'insurance' ? 'active' : ''}`}
              onClick={() => setActiveTab('insurance')}
            >
              Insurance
            </button>
            <button 
              className={`tab ${activeTab === 'investment' ? 'active' : ''}`}
              onClick={() => setActiveTab('investment')}
            >
              Investment
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section bg-light">
        <div className="container">
          <div className="services-container">
            {filteredServices.map((service, index) => (
              <Link to={`/services/${service.id}`} className="service-card" key={service.id}>
                <div className={`service-card ${service.featured ? 'featured' : ''} fade-in`} 
                   style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-link">
                    <span>Learn More</span>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Services</h2>
            <p>Our most popular financial solutions</p>
          </div>
          
          <div className="featured-services">
            {services.filter(service => service.featured).map((service, index) => (
              <div key={`featured-${service.id}`} className="featured-service">
                <div className="featured-icon">
                  {service.icon}
                </div>
                <div className="featured-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={`/services/${service.id}`} className="btn btn-outline">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section bg-primary">
        <div className="container">
          <div className="cta-content">
            <h2>Need Help Choosing the Right Plan?</h2>
            <p>Our financial experts are here to help you find the perfect solution for your needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-light">
                Get a Free Consultation
              </Link>
              <a href="tel:+27413633062" className="btn btn-outline-light">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
