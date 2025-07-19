import React from 'react';
import './Footer.css';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import youtube from '../../assets/youtube.png';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>

        {/* Brand Info */}
        <div className='footer-details'>
          <h3>Rainbow Sky Productions</h3>
          <p>Address: 2/38 Sahid Nagar, Dhakuria, Kolkata 700031</p>
          <p>Email: <a href="mailto:therainbowsky20@gmail.com">therainbowsky20@gmail.com</a></p>
          <p>Contact: <a href="tel:8013498073">8013498073</a></p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="intro" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
            <li><Link to="services" spy={true} smooth={true} offset={-70} duration={500}>Services</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
            <li><Link to="work" spy={true} smooth={true} offset={-70} duration={500}>Work</Link></li>
            <li><Link to="gallery" spy={true} smooth={true} offset={-70} duration={500}>Gallery</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className='footer-socials'>
          <h4>Follow us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/rainbow.sky_11?igsh=cG15NWh1bmZhenVm" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61559163914632&rdid=nPFu9OtLdHlkeSgK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16vzfYF9qw%2F#" target="_blank" rel="noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/@rainbowsky601" target="_blank" rel="noreferrer">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
      <div className='ad'>
        <a href="https://www.instagram.com/_crecerox?igsh=MWN1YnVtYWRzN3o0Nw==" target="_blank" rel="noreferrer">Designed and developed by Crecerox</a></div>
      <div className='footer-bottom'>
        © 2025 Rainbow Sky Productions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
