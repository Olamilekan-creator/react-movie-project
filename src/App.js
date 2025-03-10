import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import MovieCard from "./components/MovieCard";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";




function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <a href="/recommend" className="recommend">
      <div id="recommended">
      Recommended Movies <span className="right">&#10095;</span>
      </div>
      </a>
      <MovieCard />
      <About />
      <Footer />
    </div>
  );
}

export default App;
