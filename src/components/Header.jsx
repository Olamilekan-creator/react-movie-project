import React, { useState, useRef } from "react";
import PersonalLogo from "../assets/my logo.png";
import { Menu, Search, Close } from "@mui/icons-material";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ searchMovies }) => {
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const openMenu = () => {
    document.body.classList += " menu--open";
  };

  const closeMenu = () => {
    document.body.classList.remove("menu--open");
  };

  const toggleContrast = () => {
    console.log("Toggling contrast");
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchInputRef.current) {
      searchMovies(searchInputRef.current.value);
      navigate('/recommend');
    }
  };

  const handleSearchClick = () => {
    if (searchInputRef.current) {
      searchMovies(searchInputRef.current.value);
      navigate('/recommend');
    }
  };

  return (
    <header className="header">
      <div className="nav__row">
        <nav>
          <div className="nav__container">
            <div className="overlay__btn">
              <span className="btn__menu material-symbols-rounded" onClick={openMenu}>
                <Menu />
              </span>
            </div>

            <div className="menu__backdrop">
              <span className="material-symbols-rounded menu__close click" onClick={closeMenu}>
                <Close />
              </span>

              <div className="menu__search">
                <span onClick={() => searchMovies(document.getElementById('searchInput').value)} className="menu__search--btn material-symbols-rounded click">
            <Search style={{ fontSize: 25, color: "" }} onClick={closeMenu}/>
        </span>
                <input
            className="search__input"
            type="text"
            id="searchInput"
            placeholder="Search for a movie..."
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    searchMovies(e.target.value);
                }
            }}
        />
                </div>
              <ul className="menu__links">
                <li className="menu__list">
                  <Link to="/" className="menu__link" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li className="menu__list">
                  <Link to="/recommend" className="menu__link" onClick={closeMenu}>
                    Movies
                  </Link>
                </li>
                <li className="menu__list">
                  <Link to="/about" className="menu__link" onClick={closeMenu}>
                    About Us
                  </Link>
                </li>
                <li className="menu__list">
                  <Link to="/mailto:olamilekan.akinlusi@icloud.com" className="menu__link" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
                <button className="login__menu--btn click" onClick={toggleContrast}>Login</button>
              </ul>
            </div>

            <div className="logo">
              <img src={PersonalLogo} id="personal-logo" alt="Logo" />
            </div>

            <div>
              <ul className="nav__link--list">
                <li className="nav__link">
                  <Link to="/" className="nav__link--anchor link__hover-effect link__hover-effect--black">
                    Home
                  </Link>
                </li>
                <li className="nav__link" onClick={toggleContrast}>
                  <Link to="/recommend" className="nav__link--anchor link__hover-effect link__hover-effect--black">
                    Movies
                  </Link>
                </li>
                <li className="nav__link" onClick={toggleContrast}>
                  <Link to="/about" className="nav__link--anchor link__hover-effect link__hover-effect--black">
                    About Us
                  </Link>
                </li>
                <li className="nav__link" onClick={toggleContrast}>
                  <Link to="mailto:olamilekan.akinlusi@icloud.com" className="nav__link--anchor link__hover-effect link__hover-effect--black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="search__container">
              <div className="search__bar">
                <span onClick={handleSearchClick} className="btn__search click">
                  <Search style={{ fontSize: 25, color: "" }} />
                </span>
                <input
                  ref={searchInputRef}
                  className="search__input"
                  type="text"
                  placeholder="Search for a movie..."
                  onKeyDown={handleSearchSubmit}
                />
              </div>
              <button className="login__btn click" onClick={toggleContrast}>
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;