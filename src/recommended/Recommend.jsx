import React from "react";

import Header from "../components/Header";

import Footer from "../components/Footer";

import "../index.css";

import { PlayCircle } from "@mui/icons-material";

import { Link } from "react-router-dom";

import NoMoviesFound from "../components/NoMoviesFound";

import { useSearch } from "../components/searchContent"; // Import the custom hook



const Recommend = () => {

const { movies, error, loading, searchQuery } = useSearch();



const toggleContrast = (event) => {

console.log("Toggling contrast");

 };



return (

<div>

<Header />

<section id="new__page">

<div className="dot hide"></div>

<div className="new__page--container">

<div className="new__row">

{loading ? (

<div className="loading">Loading...</div>

 ) : movies.length === 0 && error ? (

<NoMoviesFound />

 ) : (

<>

<div className="new__page--description">Recommended</div>

{searchQuery && (

<p className="new__para">Results for: "{searchQuery}"</p>

 )}

<p className="new__para">We sorted these out for you.</p>

<hr className="new__line" />

<div className="new__wrapper">

{movies.map((movie, index) => (

<div key={movie.imdbID || index} className="new__movie">

<div className="new__movie--one">

<img

src={

movie.Poster !== "N/A"

 ? movie.Poster

 : "https://via.placeholder.com/300x450?text=No+Poster"

}

className="new__movie1"

alt={`${movie.Title} Poster`}

onError={(e) => {

e.target.src =

"https://via.placeholder.com/300x450?text=No+Poster";

 }}

/>

<div className="new__movie__wrapper-bg">

<div className="new__movie--description">

<h3

id="movieTitle"

className="new__description--title"

>

{movie.Title}

</h3>

<span

className="material-symbols-rounded new__btn click"

onClick={toggleContrast}

>

<PlayCircle />

</span>

<Link

to={`/details/${movie.imdbID}`}

className="more"

>

 More{" "}

<span className="orange details">Details...</span>

</Link>

</div>

</div>

</div>

</div>

 ))}

</div>

</>

 )}

</div>

</div>

</section>

<Footer />

</div>

 );

};



export default Recommend;





// import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import '../index.css';
// import { PlayCircle } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import NoMoviesFound from "../components/NoMoviesFound";
// import axios from "axios";
// import image1 from '../assets/image1.jpg';
// import image2 from '../assets/image2.jpg';
// import image3 from '../assets/image3.jpg';
// import image4 from '../assets/image4.jpg';
// import image5 from '../assets/image5.jpg';
// import image6 from '../assets/image6.jpg';
// import image7 from '../assets/image7.jpg';
// import image8 from '../assets/image8.jpg';
// import image9 from '../assets/image9.jpg';
// import image10 from '../assets/image10.jpg';



// const Recommend = () => {
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState(false);
  
// const searchMovies = async (query) => {
//         try {
//             const response = await axios.get(
//                 `https://www.omdbapi.com/?s=${query}&apikey=4f56ff1f`
//             );
//             if(response.data && response.data.Search) { // Change to check response for 'Search'
//                 setMovies(response.data.Search); // Adjust to use the correct response data
//                 setError(false);
//             } else {
//                 setMovies([]);
//                 setError(true);
//             }
//         } catch(error) {
//             setMovies([]);
//             setError(true);
//         }
//     };

//     const toggleContrast = (event) => {
//         console.log("Toggling contrast");
//     };

//     const recommendedMovies = [
//         { image: image1, title: 'Fantastic 4' },
//         { image: image2, title: 'Love and Mosters' },
//         { image: image3, title: 'Fantastic Beasts' },
//         { image: image4, title: 'The Lion King' },
//         { image: image5, title: 'The Golden Compass' },
//         { image: image6, title: 'I Am Number Four' },
//         { image: image7, title: 'Pixels' },
//         { image: image8, title: 'Migration' },
//         { image: image9, title: 'Loki' },
//         { image: image10, title: 'X-Men' },
//     ];

//     // Main rendering logic remains as you have it, just be sure to call `searchMovies` correctly.

//     return (
//         <div>
//             <Header searchMovies={searchMovies} />
                            
//             <section id="new__page">
//                 <div className="dot hide"></div>
//                 <div className="new__page--container">
//                     <div className="new__row">
                        
//                     {movies.length === 0 && error ? (
//                             <NoMoviesFound />
//                         ) : (
//                             <>
//                         <div className="new__page--description">
//                             Recommended
//                         </div>
                      
//                         <p className="new__para">We sorted these out for you.</p>
//                         <hr className="new__line" />
                        
//                             <div className="new__wrapper">
//                                 {(movies.length > 0 ? movies : recommendedMovies).map((item, index) => (
//                                     <div key={index} className="new__movie">
//                                         <div className="new__movie--one">
//                                             <img src={item.Poster || item.image} className="new__movie1" alt="Movie Poster" />
//                                             <div className="new__movie__wrapper-bg">
//                                                 <div className="new__movie--description">
//                                                     <h3 id="movieTitle" className="new__description--title">
//                                                         {item.Title || item.title}
//                                                     </h3>
//                                                     <span className="material-symbols-rounded new__btn click" onClick={toggleContrast}><PlayCircle/></span>
//                                                     <Link to="/details" className="more">
//                                                         More <span className="orange details">Details...</span>
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     );
// }

// export default Recommend;