import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="dorbesh-footer">
      <div className="footer-container">
        {/* <div className="footer-top">
          <div className="footer-column about-column">
            <div className="footer-logo">Dorbesh</div>
            <p className="footer-tagline">
              Crafting user-centric design with pixel-perfect precision for digital experiences that stand out.
            </p>
            <div className="social-links">
              {['facebook', 'twitter', 'instagram', 'linkedin', 'dribbble'].map((platform) => (
                <a key={platform} href={`#${platform}`} className="social-link">
                  <span className={`social-icon ${platform}`}></span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column links-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {['About', 'Services', 'Works', 'Pricing', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column contact-column">
            <h3 className="footer-heading">Contact Me</h3>
            <ul className="contact-info">
              <li>
                <span className="contact-icon email"></span>
                <span>dorbesh@example.com</span>
              </li>
              <li>
                <span className="contact-icon phone"></span>
                <span>+1 (123) 456-7890</span>
              </li>
              <li>
                <span className="contact-icon location"></span>
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          <div className="footer-column newsletter-column">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="newsletter-text">Subscribe to get the latest updates</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                <span className="send-icon"></span>
              </button>
            </form>
          </div>
        </div> */}

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Sandesh Chowdary. All Rights Reserved.
          </div>
          <div className="footer-links-bottom">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
