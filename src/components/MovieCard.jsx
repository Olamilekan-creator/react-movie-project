import React from 'react';
import Movie1 from '../assets/g2.jpg'
import Movie2 from '../assets/q1.jpg'
import Movie3 from '../assets/g5.jpg'
import Movie4 from '../assets/g6.jpg'
import { PlayCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../index.css'

const MovieCard = () => {
    const movieItems = [
        {
            image: Movie1,
            title: 'Guardians of the Galaxy Vol. 2'
        },
        {
            image: Movie2,
            title: 'Captain America The Winter Soldier' 
        },
        {
            image: Movie3,
            title: 'Avengers' 
        },
        {
            image: Movie4,
            title: 'Echo' 
        }
    ]
return (
  <>
    <Link to="/recommend" className="recommend">
      <div id="recommended">
      Recommended Movies <span className="right">&#10095;</span>
      </div>
      </Link>

    <div className="movie">
{movieItems.map((item, index) => (
              <div key={index} className="movie__one">
              <img src={item.image} className="movie1" alt="Movie Poster" />
              <div className="movie__wrapper--bg">
                <div className="movie__description">
                  <h3 className="movie__description--title">{item.title}</h3>
                  <span className="material-symbols-rounded movie__btn click"><PlayCircle style={{ fontSize: 25, color: '' }} /></span>
                  <Link to="#" className="more">
                    More <span className="orange details">Details...</span>
                  </Link>
                </div>
              </div>
            </div>
        ))}
      </div>
      </>
);
}

export default MovieCard;