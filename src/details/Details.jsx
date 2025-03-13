import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../index.css';

const Details = ({ movies }) => {
    const [detailItems, setDetailItems] = useState({
        image: '',
        title: 'Loading...',
        rated: '',
        released: '',
        year: '',
        description: 'Fetching movie details...'
    });

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch("https://www.omdbapi.com/?i=tt1877830&apikey=4f56ff1f");
                const movie = await response.json();
                setDetailItems({
                    image: movie.Poster,
                    title: movie.Title,
                    rated: movie.Rated,
                    released: movie.Released,
                    year: movie.Year,
                    description: movie.Description || 'No description available.'
                });
            } catch (error) {
                console.error("Error fetching movie details:", error);
                setDetailItems({
                    image: '',
                    title: 'Error fetching movie details',
                    rated: '',
                    released: '',
                    year: '',
                    description: 'Could not fetch data. Please try again later.'
                });
            }
        };

        fetchMovieDetails();
    }, [movies]);

    return (
        <div>
            <Header />
            <section id="more__details">
                <div className="more__details--row">
                    <h2 className="more__details--text">More Details</h2>
                    <hr className="hr__line" />
                    
                    <div className="more__details--container">
                        <figure>
                            <img src={detailItems.image} alt={detailItems.title} className="more__details--img" />
                        </figure>
                        <div className="more__details--description">
                            <h3 className="more__text">{detailItems.title}</h3>
                            <p className="more__details--para">Rated: {detailItems.rated}</p>
                            <p className="more__details--para">Released: {detailItems.released}</p>
                            <p className="more__details--para">Year: {detailItems.year}</p>
                            <p className="more__details--para">{detailItems.description}</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Details;