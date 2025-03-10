import React, { useState, useEffect } from "react";
import image1 from "../assets/sunset-3189813_1280.jpg";
import image2 from "../assets/videoframe_13177.png";
import image3 from "../assets/ticket.jpg";
import image4 from "../assets/boy.webp";
import image5 from "../assets/city.jpeg";
import image6 from "../assets/family.webp";
import image7 from "../assets/man.jpeg";
import { PlayCircle } from "@mui/icons-material";
import "../index.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      image: image1,
      title: "Sunset Movie",
      year: 2012,
    },
    {
      image: image2,
      title: "Nice Frame",
      year: 2012,
    },
    {
      image: image3,
      title: "Just a Ticket",
      year: 2012,
    },
    {
      image: image4,
      title: "Young Boy",
      year: 2012,
    },
    {
      image: image5,
      title: "Such a Beautiful City",
      year: 2012,
    },
    {
      image: image6,
      title: "Family",
      year: 2012,
    },
    {
      image: image7,
      title: "Gentleman",
      year: 2012,
    },
  ];

  const totalSlides = carouselItems.length;

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="dots">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${currentSlide === index ? "active" : ""}`}
          />
        ))}
      </div>

      <button className="carousel-btn prev click" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-btn next click" onClick={nextSlide}>
        &#10095;
      </button>

      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`carousel__img fade ${
            currentSlide === index ? "active" : ""
          }`}
          id="carouselImages"
        >
          <img src={item.image} className="slide active" alt={item.title} />
          <div className="texts">
            <div className="texts__title">
              <h1 className="texts__description">{item.title}</h1>
              <p className="texts__para">{item.year} Olamilekan Movie</p>
              <button className="watch">
                <span className="material-symbols-rounded font">
                  <PlayCircle style={{ fontSize: 25 }} />
                </span>{" "}
                Watch Now! <span className="free">{"FREE"}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
