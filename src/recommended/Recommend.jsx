import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../index.css'
import { PlayCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import image1 from "../assets/g6.jpg"
import NoMoviesFound from "../components/NoMoviesFound";
import axios from "axios";

const Recommend = ({ Movies }) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    console.log('Search for movies:', movies);

    const searchMovies = async (query) => {
        try {
          const response = await axios.get(
            `https://www.omdbapi.com/?s=${query}&apikey=4f56ff1f`
          );
          if (response.data && response.data.length > 0) {
            setMovies(response.data);
            setError(false);
          } else {
            setMovies([]);
            setError(true);
          }
        } catch (error) {
          setMovies([]);
          setError(true);
        }
      };

    const toggleContrast = (event) => {
        console.log("Toggling contrast");
    };
    const recommendedMovies = [
        {
            image: image1,
            title: 'Echo'
        },
        {
            image: image1,
            title: 'Echo'
        },
        {
            image: image1,
            title: 'Echo'
        },
        {
            image: image1,
            title: 'Echo'
        },
        {
            image: image1,
            title: 'Echo'
        },
        {
            image: image1,
            title: 'Echo'
        },
        {
            image: image1,
            title: 'Echo'
        },
        {
            image: image1,
            title: 'Echo'
        },
        {
            image: image1,
            title: 'Echo'
        },
        {
            image: image1,
            title: 'Echo'
        }
    ]

    if (!Movies) {
        // Render something while waiting for movies data, or an empty state.
        return (
            <div>
            <Header />
          <section id="new__page">
            <div className="dot hide"></div>
            <div className="new__page--container">
                <div className="new__row">
                    <div className="new__page--description">
                        Recommended
                    </div>
                    <p className="new__para">We sorted these out for you.</p>
                    <hr className="new__line" />

                    <div className="new__wrapper">
                 {recommendedMovies.map((item, index) => (
                    <div  key={index} className="new__movie">
                        <div className="new__movie--one">
                            <img src={item.image} className="new__movie1" alt="Movie Poster" />
                            <div className="new__movie__wrapper-bg">
                                <div className="new__movie--description">
                                    <h3 id="movieTitle" className="new__description--title">
                                        {item.title}
                                    </h3>
                                    <span className="material-symbols-rounded new__btn click" onClick={toggleContrast}><PlayCircle/></span>
                                    <Link to="/details" className="more">
                                    More <span className="orange details">Details...</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
        </div>
      </section>
        <Footer />
       </div>
        );
      }
    
      if (Movies.length === 0) {
        // Render a message when there are no movies to display.
        return (
            <>
            <Header />
            <NoMoviesFound />
                <Footer />
                </>
        );
      }


    return (
       <div>
        <Header />
      <section id="new__page">
        <div className="dot hide"></div>
        <div className="new__page--container">
            <div className="new__row">
                <div className="new__page--description">
                    Recommended
                </div>
                <p className="new__para">We sorted these out for you.</p>
                <hr className="new__line" />

      <input
      className="search__input"
        type="text"
        id="searchInput"
        placeholder="Search for a movie..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchMovies(e.target.value)}
        }}
      />
      <span onClick={searchMovies}>Search</span>

      {movies.length === 0 && error ? (
        <NoMoviesFound />
      ) : (
        <div className="new__wrapper">
                 {recommendedMovies.map((item, index) => (
                    <div  key={index} className="new__movie">
                        <div className="new__movie--one">
                            <img src={item.image} className="new__movie1" alt="Movie Poster" />
                            <div className="new__movie__wrapper-bg">
                                <div className="new__movie--description">
                                    <h3 id="movieTitle" className="new__description--title">
                                        {item.title}
                                    </h3>
                                    <span className="material-symbols-rounded new__btn click" onClick={toggleContrast}><PlayCircle/></span>
                                    <Link to="/details" className="more">
                                    More <span className="orange details">Details...</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
      )}
            </div>
        </div>
      </section>
        <Footer />
       </div>
    );
}

export default Recommend;