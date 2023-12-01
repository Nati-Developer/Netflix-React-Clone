

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="netflix-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            {/* You can replace the logo with the Netflix logo or your project logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
            />
          </div>
          <div className="footer-links">
            <ul>
              <li>Home</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-social">
            {/* Add social media icons or links as needed */}
            <i className="fab fa-facebook-square" ></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="footer-disclaimer">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
