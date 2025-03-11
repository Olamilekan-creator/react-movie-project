import React from "react";
import Logo from "../assets/my logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__row">
        <div className="footer__logo">
          <img src={Logo} className="footer__personal-logo" alt="Logo" />
        </div>
        <div
          className="footer__links"
        >
          <Link to="/about"
            className="footer__link
          nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            About
          </Link>
          <Link to="mailto:olamilekan.akinlusi@icloud.com"
            className="footer__link
          nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            Contact
          </Link>
          <Link to="https://www.linkedin.com/in/olamilekan-akinlusi-26084a290/"
            className="footer__link
          nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            LinkedIn
          </Link>
          <Link to="https://github.com/Olamilekan-creator"
            target="_blank"
            className="footer__link nav__link--anchor link__hover-effect link__hover-effect--black"
          >
            Github
          </Link>
          <Link to="/" target="_blank" className="footer__link
          nav__link--anchor link__hover-effect link__hover-effect--black">
            Resume
          </Link>
        </div>
        <div className="footer__copyright">
          Copyright &copy; 2025 Olamilekan Akinlusi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
