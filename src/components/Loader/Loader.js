import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Add loading class to body when component mounts
    document.body.classList.add('loading');
    
    // Hide the loader after 1.5 seconds with a fade effect
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Small delay before removing the body class to allow for fade out
      const removeClassTimer = setTimeout(() => {
        document.body.classList.remove('loading');
      }, 300);
      
      return () => clearTimeout(removeClassTimer);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-overlay">
      <div className="warp-loader">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="core-glow"></div>
      </div>
    </div>
  );
};

export default Loader;
