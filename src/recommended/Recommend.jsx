import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../index.css';
import { PlayCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import image1 from "../assets/g6.jpg";
import NoMoviesFound from "../components/NoMoviesFound";
import axios from "axios";

const Recommend = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
  
const searchMovies = async (query) => {
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?s=${query}&apikey=4f56ff1f`
            );
            if(response.data && response.data.Search) { // Change to check response for 'Search'
                setMovies(response.data.Search); // Adjust to use the correct response data
                setError(false);
            } else {
                setMovies([]);
                setError(true);
            }
        } catch(error) {
            setMovies([]);
            setError(true);
        }
    };

    const toggleContrast = (event) => {
        console.log("Toggling contrast");
    };

    const recommendedMovies = [
        { image: image1, title: 'Echo' },
        { image: image1, title: 'Echo' },
        { image: image1, title: 'Echo' },
        { image: image1, title: 'Echo' },
        { image: image1, title: 'Echo' },
        { image: image1, title: 'Echo' },
        { image: image1, title: 'Echo' },
        { image: image1, title: 'Echo' },
        { image: image1, title: 'Echo' },
        { image: image1, title: 'Echo' },
    ];

    // Main rendering logic remains as you have it, just be sure to call `searchMovies` correctly.

    return (
        <div>
            <Header searchMovies={searchMovies} />
                            
            <section id="new__page">
                <div className="dot hide"></div>
                <div className="new__page--container">
                    <div className="new__row">
                        
                    {movies.length === 0 && error ? (
                            <NoMoviesFound />
                        ) : (
                            <>
                        <div className="new__page--description">
                            Recommended
                        </div>
                      
                        <p className="new__para">We sorted these out for you.</p>
                        <hr className="new__line" />
                        
                            <div className="new__wrapper">
                                {recommendedMovies.map((item, index) => (
                                    <div key={index} className="new__movie">
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
                            </>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Recommend;