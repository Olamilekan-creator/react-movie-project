// import React, { useState, useEffect } from "react";
import React from "react";
import image1 from "../assets/sunset-3189813_1280.jpg";
import image2 from "../assets/pop.webp";
import image3 from "../assets/ticket.jpg";
import image4 from "../assets/boy.webp";
import image5 from "../assets/city.jpeg";
import image6 from "../assets/family.webp";
import image7 from "../assets/man.jpeg";
import { PlayCircle } from "@mui/icons-material";
import "../index.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    return (
        <div className="carousel">
            <Slider {...settings}>

        <div className="carousel__img fade">
    <img src={image1} className="slide" alt="" />
    <div className="texts">
      <div className="texts__title">
        <h1 className="texts__description">Nice Frame</h1>
        <p className="texts__para">Released 2002</p>
        <button className="watch">
          <span className="material-symbols-rounded font"><PlayCircle /></span> Watch Now <span className="free">FREE</span>
        </button>
      </div>
    </div>
  </div>

  <div className="carousel__img fade">
    <img src={image2} alt="slide2" />
    <div className="texts">
      <div className="texts__title">
        <h1 className="texts__description">Cinemas</h1>
        <p className="texts__para">Released 2020</p>
        <button className="watch">
          <span className="material-symbols-rounded font"><PlayCircle /></span> Watch Now <span className="free">FREE</span>
        </button>
      </div>
    </div>
  </div>

  <div className="carousel__img fade">
    <img src={image3} className="slide" alt="" />
    <div className="texts">
      <div className="texts__title">
        <h1 className="texts__description">Ticket</h1>
        <p className="texts__para">Released 2021</p>
        <button className="watch">
          <span className="material-symbols-rounded font"><PlayCircle /></span> Watch Now <span className="free">FREE</span>
        </button>
      </div>
    </div>
  </div>

  <div className="carousel__img fade">
    <img src={image4} alt="slide2" />
    <div className="texts">
      <div className="texts__title">
        <h1 className="texts__description">Young Boy</h1>
        <p className="texts__para">Released 2000</p>
        <button className="watch">
          <span className="material-symbols-rounded font"><PlayCircle /></span> Watch Now <span className="free">FREE</span>
        </button>
      </div>
    </div>
  </div>

  <div className="carousel__img fade">
    <img src={image5} className="slide" alt="" />
    <div className="texts">
      <div className="texts__title">
        <h1 className="texts__description">Beautiful City</h1>
        <p className="texts__para">Released 2017</p>
        <button className="watch">
          <span className="material-symbols-rounded font"><PlayCircle /></span> Watch Now <span className="free">FREE</span>
        </button>
      </div>
    </div>
  </div>

  <div className="carousel__img fade">
    <img src={image6} alt="slide2" />
    <div className="texts">
      <div className="texts__title">
        <h1 className="texts__description">Family</h1>
        <p className="texts__para">Released 2010</p>
        <button className="watch">
          <span className="material-symbols-rounded font"><PlayCircle /></span> Watch Now <span className="free">FREE</span>
        </button>
      </div>
    </div>
  </div>

  <div className="carousel__img fade">
    <img src={image7} className="slide" alt="" />
    <div className="texts">
      <div className="texts__title">
        <h1 className="texts__description">Gentleman</h1>
        <p className="texts__para">Released 2003</p>
        <button className="watch">
          <span className="material-symbols-rounded font"><PlayCircle /></span> Watch Now <span className="free">FREE</span>
        </button>
      </div>
    </div>
  </div>

 
            </Slider>
            </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="carousel-btn next click" onClick={onClick}>
           &#10095;
            </div>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="carousel-btn prev click" onClick={onClick}>
           &#10094;
            </div>
    );
};

    export default Carousel;