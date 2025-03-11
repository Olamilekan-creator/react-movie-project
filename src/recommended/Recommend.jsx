import React from "react";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../index.css'
import { PlayCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import image1 from "../assets/g6.jpg"

const Recommend = () => {
    const toggleContrast = (event) => {
        console.log("Toggling contrast");
    };
    const recommendItems = [
        {
            image: 'image1',
            title: 'Guardians of the Galaxy Vol 2'
        }
    ]

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
                 {recommendItems.map((item) => (<div className="new__movie">
                        <div className="new__movie--one">
                            <img src={item.image} className="new__movie1" alt="Movie Poster" id="moviePoster" />
                            <div className="new__movie__wrapper-bg">
                                <div className="new__movie--description">
                                    <h3 id="movieTitle" className="new__description--title">
                                        {item.title}
                                    </h3>
                                    <span className="material-symbols-rounded new__btn click" onClick={toggleContrast}>{PlayCircle}</span>
                                    <Link to="/details" className="more">
                                    More <span className="orange details">Details...</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))};
                </div>
            </div>
        </div>
      </section>
        <Footer />
       </div>
    );
}

export default Recommend;