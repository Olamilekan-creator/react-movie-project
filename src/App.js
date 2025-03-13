import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import Recommend from "./recommended/Recommend";

import Home from "./components/Home";

import Details from "./details/Details";

import { SearchProvider } from "./components/searchContent";



function App() {

return (

<SearchProvider>

<Router>

<div>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/recommend" element={<Recommend />} />

<Route path="/details/:movieId" element={<Details />} />

</Routes>

</div>

</Router>

</SearchProvider>

 );

}



export default App;




