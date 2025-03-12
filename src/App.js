import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import Recommend from "./recommended/Recommend";
import Home from './components/Home';
import Details from "./details/Details";
import NoMoviesFound from "./components/NoMoviesFound";



function App() {

  return (
    <Router>
    <div>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/recommend" element={<Recommend/>} />
    <Route path="/details" element={<Details/>} />
      <Route path="/recommend" component={NoMoviesFound} />
      <Route path="*" element={<h2>Page not found!</h2>} />
   </Routes>
    </div>
    </Router>
  );
}

export default App;
