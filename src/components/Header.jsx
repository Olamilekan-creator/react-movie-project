import React, { useState } from "react";
import PersonalLogo from "../assets/my logo.png";
import { Menu, Search, Close } from "@mui/icons-material";
import "../index.css";
import { Link } from "react-router-dom";
import NoMoviesFound from "./NoMoviesFound";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const openMenu = () => {
   document.body.classList += " menu--open"
  };

  const closeMenu = () => {
    document.body.classList.remove("menu--open")
  };

  const toggleContrast = () => {
    console.log("Toggling contrast");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="header">
      <div className="nav__row">
        <nav>
          <div className="nav__container">
            <div className="overlay__btn">
              <span
                className="btn__menu material-symbols-rounded"
                onClick={openMenu}
              >
                <Menu />
              </span>
            </div>

              <div className="menu__backdrop" onClick={closeMenu}>
                <span className="material-symbols-rounded menu__close click">
                  <Close />
                </span>
                <div className="menu__search">
                  <Link to="/recommend">
                    <span className="material-symbols-rounded menu__search--btn">
                      <Search />
                    </span>
                  </Link>
                  <input
                    type="text"
                    className="search__input"
                    id="searchInput"
                    placeholder="Search for movies"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                <ul className="menu__links">
                  <li className="menu__list">
                    <Link to="/" className="menu__link" onClick={closeMenu}>
                    Home
                    </Link>
                  </li>
                  <li className="menu__list">
                    <Link to="/recommended" className="menu__link" onClick={closeMenu}>
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
                  <Link to="/"
                    className="nav__link--anchor link__hover-effect link__hover-effect--black"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav__link" onClick={toggleContrast}>
                  <Link to="/#recommended"
                    className="nav__link--anchor link__hover-effect link__hover-effect--black"
                  >
                    Movies
                  </Link>
                </li>
                <li className="nav__link" onClick={toggleContrast}>
                  <Link to="/about"
                    className="nav__link--anchor link__hover-effect link__hover-effect--black"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav__link" onClick={toggleContrast}>
                  <Link to="mailto:olamilekan.akinlusi@icloud.com"
                    className="nav__link--anchor link__hover-effect link__hover-effect--black"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="search__container">
              <div className="search__bar">
                <Link to="/recommend">
                  <span className="material-symbols-rounded btn__search">
                    {" "}
                    <Search style={{ fontSize: 25, color: "" }} />
                  </span>
                </Link>
                <input
                  type="text"
                  className="movie__bar"
                  id="searchInput"
                  placeholder="Search for movies"
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
