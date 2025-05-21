import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sakthivel G</h3>
            <div className="social-icons">
              <a className="blueicon" href="#">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a className="blueicon" href="#">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className='redicon'>
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              <a className="instaaa">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About me</a></li>
              <li><a href="#">My Skills</a></li>
              <li><a href="#">Contact me</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Me</h3>
            <div className="contact-details">
              <p>Balaji PG, Prasanth Layout, White Field Main Road, Bangalore 560066</p>
              <p>Email: Sekarsakthi73@gmail.com</p>
              <p>Phone: +91 9080760890</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
