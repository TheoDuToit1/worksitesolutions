import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowRight } from 'react-icons/fa';
import notFoundImage from '../../assets/images/vecteezy_internet-network-warning-404-error-page-or-file-not-found_5084699.jpg';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-illustration">
          <div className="not-found-404">404</div>
          <div className="not-found-image">
            <img 
              src={notFoundImage} 
              alt="404 Error - Page Not Found" 
              className="not-found-img"
            />
          </div>
        </div>
        <h1>Page Not Found</h1>
        <p>We're sorry, the page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">
          <FaHome /> Back to Home <FaArrowRight className="icon-right" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
