import React from 'react';
import Logo from '../assets/my logo.png';

const Footer = () => {
    return (
<footer id="footer">
      <div className="footer__row">
        <div className="footer__logo">
          <img src={Logo} className="footer__personal-logo" alt="Logo" />
        </div>
        <div className="footer__links">
          <a href="/about" className="footer__link">About</a>
          <a href="mailto:olamilekan.akinlusi@icloud.com" className="footer__link">Contact</a>
          <a href="https://www.linkedin.com/in/olamilekan-akinlusi-26084a290/" className="footer__link">LinkedIn</a>
          <a href="https://github.com/Olamilekan-creator" target="_blank" className="footer__link">Github</a>
          <a href="/" target="_blank" className="footer__link">Resume</a>
        </div>
        <div className="footer__copyright">
          Copyright &copy; 2025 Olamilekan Akinlusi
        </div>
      </div>
    </footer>
    );
}

export default Footer;