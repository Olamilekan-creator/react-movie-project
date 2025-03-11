import React from "react";
import Carousel from "./Carousel";
import MovieCard from "./MovieCard";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
<div>
<Header />
<Carousel />
<MovieCard />
<About />
<Footer />
</div>
    );
}

export default Home;