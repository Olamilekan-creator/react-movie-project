import React, { createContext, useState, useContext } from "react";

import axios from "axios";



// Create Context

const SearchContext = createContext();



// Create Provider Component

export const SearchProvider = ({ children }) => {

const [movies, setMovies] = useState([]);

const [error, setError] = useState(false);

const [loading, setLoading] = useState(false);

const [searchQuery, setSearchQuery] = useState("");



const searchMovies = async (query) => {

if (!query || query.trim() === "") {

setError(true);

setMovies([]);

return;

 }



setLoading(true);

setSearchQuery(query);



try {

const response = await axios.get(

`https://www.omdbapi.com/?s=${query}&apikey=4f56ff1f`

 );



if (response.data && response.data.Search) {

setMovies(response.data.Search);

setError(false);

 } else {

setMovies([]);

setError(true);

 }

 } catch (error) {

console.error("Error searching movies:", error);

setMovies([]);

setError(true);

 } finally {

setLoading(false);

 }

 };



// Values to be provided to consumers

const value = {

movies,

error,

loading,

searchQuery,

searchMovies,

 };



return (

<SearchContext.Provider value={value}>{children}</SearchContext.Provider>

 );

};



// Custom hook for using the search context

export const useSearch = () => {

const context = useContext(SearchContext);

if (context === undefined) {

throw new Error("useSearch must be used within a SearchProvider");

 }

return context;

};



export default SearchContext;