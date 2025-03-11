import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import MovieCard from "./components/MovieCard";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";
import Recommend from "./recommended/Recommend";





function App() {

  return (
    <Router>
    <div>
      <Header />
   <Routes>
    <Route path="/"/>
    <Route path="/recommend" element={<Recommend/>} />
   </Routes>
      <Carousel />
      <MovieCard />
      <About />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
