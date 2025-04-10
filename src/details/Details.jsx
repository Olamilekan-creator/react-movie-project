import React, { useEffect, useState } from "react";
import { useSearch } from "../components/searchContent"; // Import context to get search movies
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../index.css';
import { useParams } from "react-router-dom";

// The Details component will be dynamically loaded
const Details = () => {
    const { searchQuery, movies } = useSearch();
    const params = useParams();
    const [detailItems, setDetailItems] = useState({
        image: '',
        title: 'Loading...',
        rated: '',
        released: '',
        year: '',
        description: 'Fetching movie details...',
    });

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (searchQuery && movies.length > 0) {
                // Find the movie with the ID based on the params
                const movie = movies.find(movie => movie.imdbID === params.movieId); // Change to match your movie structure
                
                if (movie) {
                    try {
                        const response = await fetch(`https://www.omdbapi.com/?t=${movie.Title}&apikey=4f56ff1f`); // Use the movie title
                        const movieDetails = await response.json();

                        if (movieDetails.Response === "True") {
                            setDetailItems({
                                image: movieDetails.Poster,
                                title: movieDetails.Title,
                                rated: movieDetails.Rated,
                                released: movieDetails.Released,
                                year: movieDetails.Year,
                                description: movieDetails.Plot || 'No description available.'
                            });
                        } else {
                            setDetailItems({
                                image: '',
                                title: 'Movie not found',
                                rated: '',
                                released: '',
                                year: '',
                                description: 'Could not fetch data. Please try again later.'
                            });
                        }
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
                } else {
                    setDetailItems({
                        image: '',
                        title: 'Movie not found',
                        rated: '',
                        released: '',
                        year: '',
                        description: 'No movie matches the provided ID.'
                    });
                }
            }
        };

        fetchMovieDetails();
    }, [searchQuery, movies, params.movieId]);

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