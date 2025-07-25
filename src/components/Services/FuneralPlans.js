import React from 'react';
import { FaHandHoldingHeart, FaCheck, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Services.css';

const FuneralPlans = () => {
  const planFeatures = [
    'Coverage for funeral expenses up to R100,000',
    '24/7 support and assistance',
    'Coverage for extended family members',
    'Flexible payment options',
    'No medical examinations required',
    'Immediate cover for accidental death',
    'Assistance with funeral arrangements',
    'Coverage for repatriation of remains'
  ];

  const planOptions = [
    {
      name: 'Basic Plan',
      price: 'R99',
      period: 'month',
      coverage: 'R25,000',
      features: [
        'Basic funeral cover',
        '24/7 support',
        'Cover for main member + 1'
      ]
    },
    {
      name: 'Standard Plan',
      price: 'R199',
      period: 'month',
      coverage: 'R50,000',
      features: [
        'Standard funeral cover',
        '24/7 support',
        'Cover for main member + 3',
        'Repatriation assistance'
      ],
      popular: true
    },
    {
      name: 'Premium Plan',
      price: 'R349',
      period: 'month',
      coverage: 'R100,000',
      features: [
        'Comprehensive funeral cover',
        '24/7 premium support',
        'Cover for main member + 5',
        'Repatriation assistance',
        'Grocery benefit',
        'Tombstone benefit'
      ]
    }
  ];

  return (
    <div className="service-detail">
      {/* Hero Section */}
      <section className="service-hero funeral-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Funeral Cover Plans</h1>
              <p>Affordable and comprehensive funeral cover to protect your loved ones during difficult times with flexible plans tailored to your needs.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
                <a href="tel:+27413633062" className="btn btn-outline">
                  <FaPhone /> 041 363 3062
                </a>
              </div>
            </div>
            <div className="hero-image">
              <FaHandHoldingHeart className="service-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Funeral Cover?</h2>
            <p>We understand the importance of giving your loved ones a dignified farewell</p>
          </div>
          
          <div className="features-grid">
            {planFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <FaCheck />
                </div>
                <h4>{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Options */}
      <section className="section plans-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Funeral Plan Options</h2>
            <p>Choose the plan that best suits your family's needs</p>
          </div>
          
          <div className="plans-grid">
            {planOptions.map((plan, index) => (
              <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-tag">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <div className="coverage">Coverage: {plan.coverage}</div>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheck className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-block btn-primary">
                  Get Started <FaArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section additional-info">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What is covered under the funeral plan?</h4>
              <p>Our funeral plans cover funeral service costs, transportation of the deceased, catering, and other related expenses as specified in your chosen plan.</p>
            </div>
            <div className="faq-item">
              <h4>How soon does the cover start?</h4>
              <p>Cover for natural causes starts after 6 months of continuous premium payment, while accidental death is covered from day one.</p>
            </div>
            <div className="faq-item">
              <h4>Can I add family members to my plan?</h4>
              <p>Yes, you can add immediate family members to your plan, with coverage amounts varying based on your selected package.</p>
            </div>
            <div className="faq-item">
              <h4>What documentation is required to claim?</h4>
              <p>Standard requirements include a death certificate, ID copies of the deceased and claimant, and the policy document.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Secure Your Family's Future?</h2>
            <p>Contact us today to discuss the best funeral cover options for your needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Quote</Link>
              <a href="tel:+27413633062" className="btn btn-outline btn-lg">
                <FaPhone /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuneralPlans;
