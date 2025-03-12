import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../index.css";

import { useNavigate } from "react-router-dom"; // Changed from useHistory to useNavigate for React Router v6
import Recommend from "../recommended/Recommend";
import NoMoviesFound from "./NoMoviesFound";


const Search = () => {

const [movies, setMovies] = useState([]);

const [searchQuery, setSearchQuery] = useState("");

const [filteredMovies, setFilteredMovies] = useState([]);

const [searchTerm, setSearchTerm] = useState("movie"); // Added missing searchTerm state

const navigate = useNavigate(); // Changed from useHistory to useNavigate



useEffect(() => {

setTimeout(() => {

// Fixed syntax error - removed the extra closing brace

const fetchMovies = async (query) => {

try {

const response = await fetch(

`https://www.omdbapi.com/?s=${searchTerm}&apikey=4f56ff1f`

 );

const data = await response.json();

if (data.Search) {

setMovies(data.Search);

 }

 } catch (error) {

console.error("Error fetching movies:", error);

 }

 };



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

navigate("/movies");

 }

 };



return (

<div className="no-movies-container">

<div className="no-movies">

<h2>No Movies Found</h2>

<p>Sorry, we couldn't find any movies matching your criteria.</p>

<form onSubmit={handleSearchSubmit}>

<span className="material-symbols-rounded btn__search">

{/* Fixed Search component issue - using a simple icon or text instead */}

 🔍

</span>

<input

type="text"

className="movie__bar"

id="searchInput"

placeholder="Search for movies"

value={searchQuery}

onChange={(e) => setSearchQuery(e.target.value)}

/>

<button type="submit">Search</button>

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

</div>

 );

};



export default Search;