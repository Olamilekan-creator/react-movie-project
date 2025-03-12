import React, { useState } from 'react';
import axios from 'axios';
import Recommend from './Recommend';
import NoMoviesFound from './NoMoviesFound';
import './index.css'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(`https://api.example.com/movies?search=${query}`);
      if (response.data.length > 0) {
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

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            searchMovies(e.target.value);
          }
        }}
      />
      {error ? <NoMoviesFound /> : <Recommend movies={movies} />}
    </div>
  );
};

export default App;
