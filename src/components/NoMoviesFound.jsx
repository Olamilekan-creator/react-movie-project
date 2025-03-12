import React, { useState, useEffect } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const NoMoviesFound = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(null);  // For handling errors

  const navigate = useNavigate();

  // Define searchMovie function inside the component
  const searchMovie = () => {
    const searchTerm = searchQuery.trim(); // Getting the value from the state
    if (searchTerm) {
      fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=4f56ff1f`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            setMovies(data.Search);  // Save the search results in the state
          } else {
            setError("No movies found! Please try another search.");  // Handle error
            setMovies([]);  // Clear previous results
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError("An error occurred while searching. Please try again later.");
          setMovies([]);
        });
    } else {
      setError("Please enter a movie name to search.");
      setMovies([]);
    }
  };

  // Filter movies when the search query changes
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const results = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(results);
    } else {
      setFilteredMovies(movies);
    }
  }, [searchQuery, movies]);

  // Handle form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (filteredMovies.length === 0) {
      setError("No movies found for your search. Try something else!");
    } else {
      navigate("/recommend"); // Navigate to the recommendation page
    }
  };

  return (
    <div>
      <input
        type="text"
        className="movie__bar"
        id="searchInput"
        placeholder="Search for movies"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span
        className="material-symbols-rounded btn__search"
        onClick={searchMovie}  // Calling searchMovie on click
      >
        🔍
      </span>

      {error && <div className="error-message">{error}</div>}  {/* Display error if exists */}

      <form onSubmit={handleSearchSubmit}>
        <button className="no__btn" type="submit">
          Search
        </button>
      </form>

      {filteredMovies.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {filteredMovies.map((movie) => (
              <li key={movie.imdbID || Math.random()}>{movie.Title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NoMoviesFound;
