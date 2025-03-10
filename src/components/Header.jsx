import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PersonalLogo from "../assets/my logo.png";
import { Menu, Search, Close } from '@mui/icons-material';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleContrast = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

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
                  <Menu style={{ fontSize: 25, color: '' }} />
              </span>

              {isMenuOpen && (
                <div className="menu__backdrop" onClick={closeMenu}>
                  <span className="material-symbols-rounded menu__close click">
                  <Close style={{ fontSize: 25, color: '' }} />
                  </span>
                  <div className="menu__search">
                    <SearchBar />
                  </div>
                  <ul className="menu__links">
                    <li className="menu__list">
                      <a href="/" className="menu__link" onClick={closeMenu}>
                        Home
                      </a>
                    </li>
                    <li className="menu__list">
                      <a
                        href="/recommended"
                        className="menu__link"
                        onClick={closeMenu}
                      >
                        Movies
                      </a>
                    </li>
                    <li className="menu__list">
                      <a
                        href="/about"
                        className="menu__link no-cursor"
                        onClick={closeMenu}
                      >
                        About Us
                      </a>
                    </li>
                    <li className="menu__list">
                      <a
                        href="/mailto:olamilekan.akinlusi@icloud.com"
                        className="menu__link"
                        onClick={closeMenu}
                      >
                        Contact
                      </a>
                    </li>
                    <button className="login__menu--btn click">Login</button>
                  </ul>
                </div>
              )}
            </div>

            <div className="logo">
              <img src={PersonalLogo} id="personal-logo" alt="Logo" />
            </div>

            <div>
                <ul className="nav__link--list">
                  <li className="nav__link">
                    <a href="#" className="nav__link--anchor link__hover-effect link__hover-effect--black">
                      Home
                    </a>
                  </li>
                  <li className="nav__link" onClick={toggleContrast}>
                  {/* {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} */}
                    <a href="#recommended" className="nav__link--anchor link__hover-effect link__hover-effect--black">
                      Movies
                    </a>
                  </li>
                  <li className="nav__link" onClick={toggleContrast}>
                    <a href="#about" className="nav__link--anchor link__hover-effect link__hover-effect--black">
                      About Us
                    </a>
                  </li>
                  <li className="nav__link" onClick={toggleContrast}>
                    <a href="mailto:olamilekan.akinlusi@icloud.com" className="nav__link--anchor link__hover-effect link__hover-effect--black">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="search__container">
                <div className="search__bar">
                  <a href="/recommend.html">
                    <span className="material-symbols-rounded btn__search"> <Search style={{ fontSize: 25, color: '' }} /></span>
                  </a>
                  <input type="text" className="movie__bar" id="searchInput" placeholder="Search for movies" />
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
