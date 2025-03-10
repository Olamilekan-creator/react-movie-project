import React, { useState } from "react";
import image1 from '../assets/sunset-3189813_1280.jpg';
import image2 from '../assets/videoframe_13177.png'
import image3 from '../assets/ticket.jpg'
import image4 from '../assets/boy.webp'
import image5 from '../assets/city.jpeg'
import image6 from '../assets/family.webp'
import image7 from '../assets/man.jpeg'
import { PlayCircle } from '@mui/icons-material';


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 7;
    const goToSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    const movieSlides = (direction) => {
        setCurrentSlide((prevSlide) => {
            const newSlide = prevSlide + direction;
            if (newSlide > totalSlides) return 1;
            if (newSlide < 1) return totalSlides;
            return newSlide;
        });
    };
    
    const carouselItems = [
        {
            image: image1,
            title: 'Sunset Movie',
            year: 2012
        },
        {
            image: image2,
            title: 'Nice Frame',
            year: 2012
        },
        {
            image: image3,
            title: 'Just a Ticket',
            year: 2012
        },
        {
            image: image4,
            title: 'Young Boy',
            year: 2012
        },
        {
            image: image5,
            title: 'Such a Beautiful City',
            year: 2012
        },
        {
            image: image6,
            title: 'Family',
            year: 2012
        },
        {
            image: image7,
            title: 'Gentleman',
            year: 2012
        }
    ]
    return (
<div className="carousel">
    <div className="dots">
        {[...Array(totalSlides)].map((_, index) => (
            <span
            key={index}
            className={`dot ${currentSlide === index + 1 ? 'active' : ''}`}
            onClick={() => goToSlide(index + 1)}
            ></span>
        ))}
    </div>

        <button className="carousel-btn prev click" onClick={() => movieSlides(-1)}>&#10094;</button>
        <button className="carousel-btn next click" onClick={() => movieSlides(1)}>&#10095;</button>

    {carouselItems.map((item) => (
        <div key={item.id} className="carousel__img fade" id="carouselImages">
        <img src={item.image} className="slide active" alt="carousel-img" />
        <div className="texts">
          <div className="texts__title">
            <h1 className="texts__description">{item.title}</h1>
            <p className="texts__para">{item.year} Olamilekan Movie</p>
            <button className="watch">
              <span className="material-symbols-rounded font"><PlayCircle style={{ fontSize: 25, color: '' }} /></span> Watch Now! <span className="free">{'FREE'}</span>
            </button>
          </div>
        </div>
      </div>
    ))}
    </div>
    
    );
}

export default Carousel;