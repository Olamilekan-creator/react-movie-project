import React from 'react';
import Movie1 from '../assets/g2.jpg'
import Movie2 from '../assets/q1.jpg'
import Movie3 from '../assets/g5.jpg'
import Movie4 from '../assets/g6.jpg'
import { PlayCircle } from '@mui/icons-material';

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
    <div className="movie">
        {movieItems.map((item) => (
              <div className="movie__one">
              <img src={item.image} className="movie1" alt="Movie Poster" />
              <div className="movie__wrapper--bg">
                <div className="movie__description">
                  <h3 className="movie__description--title">{item.title}</h3>
                  <span className="material-symbols-rounded movie__btn click"><PlayCircle style={{ fontSize: 25, color: '' }} /></span>
                  <a href="./details.html" className="more">
                    More <span className="orange details">Details...</span>
                  </a>
                </div>
              </div>
            </div>
        ))}
      </div>
);
}

export default MovieCard;