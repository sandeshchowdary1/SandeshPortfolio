import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landinganime.css';

const Openingpage = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start the animation after 2s
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 2000);

    // Navigate after animation completes (total 3s)
    const navigateTimer = setTimeout(() => {
      // sessionStorage.setItem('opening_shown', 'true');
      navigate('/home');
    }, 3000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <>
      {/* This div will represent the contact page "underneath" */}
      <div className="contact-page-preview"></div>
      
      {/* Opening page that will scroll up */}
      {/* <div className={opening-page ${isAnimating ? 'scroll-up' : ''}}> */}
        <div className="loading">
          <div className="loading-text">
            <span className="loading-text-words">L</span>
            <span className="loading-text-words">O</span>
            <span className="loading-text-words">A</span>
            <span className="loading-text-words">D</span>
            <span className="loading-text-words">I</span>
            <span className="loading-text-words">N</span>
            <span className="loading-text-words">G</span>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Openingpage;