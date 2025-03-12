import React, { useState, useEffect } from "react";
import './index.css';
import { useHistory} from "react-router-dom";

const NoMoviesFound = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            const fetchedMovies = {`https://www.omdbapi.com/?s=${searchTerm}&apikey=4f56ff1f`};
            setMovies(fetchedMovies);
        }, 1000);
    }, []);

     useEffect(() => {
        if (searchQuery, trim() !== '') {
            const results = movies.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery, toLowerCase())
            );
            setFilteredMovies(results);
        } else {
            setFilteredMovies(movies);
        }
     }, [searchQuery, movies]);

     const handleSearchSubmit = (event) => {
        event.preventDefault();

        if (filterMovies.length === 0) {
            alert("No movies found for your search. Try something else!");
        } else {
            history.pushState('/movies');
        }
     };

    return (
<div className="no-movies-container">
    <div className="no-movies">
        <h2>No Movies Found</h2>
        <p>Sorry, we couldn't find any movies matching your criteria.</p>

        <form onSubmit={handleSearchSubmit}>
          <span className="material-symbols-rounded btn__search">
            <Search style={{ fontSize: 25 }} />
          </span>
          <input
            type="text"
            className="movie__bar"
            id="searchInput"
            placeholder="Search for movies"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        
        {filteredMovies.length > 0 && (
          <div>
            <h3>Search Results:</h3>
            <ul>
              {filteredMovies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
</div>
    );
}

export default NoMoviesFound;