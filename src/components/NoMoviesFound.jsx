import React, { useState, useEffect } from "react";

import "../index.css";

import { useNavigate } from "react-router-dom"; // Changed from useHistory to useNavigate for React Router v6



const NoMoviesFound = () => {
    const searchButton = document.querySelector(".btn__search");
const searchInput = document.querySelector(".movie__bar"); // Corrected selector
const movieTitle = document.getElementById("movieTitle");
const movieDescription = document.getElementById("movieDescription");

searchButton.addEventListener("click", searchMovie);

const [movies, setMovies] = useState([]);

const [searchQuery, setSearchQuery] = useState("");

const [filteredMovies, setFilteredMovies] = useState([]);

const [searchTerm, setSearchTerm] = useState(""); // Added missing searchTerm state

const navigate = useNavigate(); // Changed from useHistory to useNavigate



useEffect(() => {

setTimeout(() => {

// Fixed syntax error - removed the extra closing brace

function searchMovie() {
    const searchTerm = searchInput.value.trim(); // Use searchTerm instead of query
    if (searchTerm) {
      fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=4f56ff1f`) // Corrected URL and template literal
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            // Clear previous search results
            movieWrapper.innerHTML = "/recommend"; // Clear the movie display area
  
            // Loop through the search results and display each movie
            data.Search.forEach((movie) => {
              displayMovieData(movie);
            });
          } else {
            alert(data.Error || "Movie not found!"); // Display error message from API or generic message
            movieWrapper.innerHTML = ""; // Clear previous search results in case of error
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          alert("An error occurred while searching. Please try again later."); // User-friendly error message
          movieWrapper.innerHTML = "/noMoviesFound"; // Clear previous search results in case of error
        });
    } else {
      alert("Please enter a movie name to search.");
    }
  }



fetchMovies();

 }, 1000);

 }, [searchTerm]);



useEffect(() => {

// Fixed trim() method call syntax

if (searchQuery.trim() !== "") {

const results = movies.filter((movie) =>

// Fixed toLowerCase() method call syntax and assuming title property might be Title instead

movie.Title?.toLowerCase().includes(searchQuery.toLowerCase())

 );

setFilteredMovies(results);

 } else {

setFilteredMovies(movies);

 }

 }, [searchQuery, movies]);



const handleSearchSubmit = (event) => {

event.preventDefault();

// Fixed variable name from filterMovies to filteredMovies

if (filteredMovies.length === 0) {

alert("No movies found for your search. Try something else!");

 } else {

// Fixed navigation method from history.pushState to navigate

navigate("/recommend");

 }

 };



return (

    <>

(<input

type="text"

className="movie__bar"

id="searchInput"

placeholder="Search for movies"

value={searchQuery}

onChange={(e) => setSearchQuery(e.target.value)}

/>

) : (

<div className="no-movies-container">

<div className="no-movies">

<h2>No Movies Found</h2>

<p>Sorry, we couldn't find any movies matching your criteria.</p>

<form onSubmit={handleSearchSubmit}>

<span className="material-symbols-rounded btn__search">

{/* Fixed Search component issue - using a simple icon or text instead */}

 🔍
 </span>

<button className="no__btn" type="submit">Search</button>

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

</div>)
</>

 );

};



export default NoMoviesFound;