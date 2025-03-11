import React from "react";
import Carousel from "./components/Carousel";
import MovieCard from "./components/MovieCard";
import About from "./components/About";

const Home = () => {
    return (
<div>
<Carousel />
<MovieCard />
<About />
</div>
    );
}

export default Home;