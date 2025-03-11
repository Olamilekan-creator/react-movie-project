import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import Recommend from "./recommended/Recommend";
import Carousel from "./home/Carousel";
import About from "./home/About";
import MovieCard from "./home/MovieCard";
import Details from "./details/Details";


function App() {

  return (
    <Router>
    <div>
   <Routes>
    <Route path="/"/>
    <Route path="/recommend" element={<Recommend/>} />
    <Route path="/details" element={<Details/>} />
   </Routes>
   <Header />
   <Carousel />
   <MovieCard />
   <About />
   
  
      <Footer />
    </div>
    </Router>
  );
}

export default App;
