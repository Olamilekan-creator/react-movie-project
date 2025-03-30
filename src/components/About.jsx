import React from 'react';
import AboutImg from '../assets/9.jpg'
import { PlayCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const About = () => {
    return (
<section id="about">
      <div className="about__row">
        <div className="about__container">
          <div className="about__description">Films | TV Shows | Creative Development</div>
          <h2 className="about__decription--title">About Hypernova Films</h2>
          <p className="about__para">
            Hypernova Films is a creative film production company focused on crafting visually stunning and engaging
            stories. We bring unique, innovative projects to life, offering cinematic experiences that captivate and
            inspire audiences. <span className="orange">+ More Info</span>
          </p>
          <div className="about__box">
            <img src={AboutImg} className="about__img" alt="About Img" />
            <div className="about__text">
              <h2 className="about__h2">Releases Coming Soon</h2>
              <Link to="#">
                <span className="material-symbols-rounded about__play"><PlayCircle style={{ fontSize: 25, color: '' }} /></span>
              </Link>
              <h4 className="about__h4">Play Video</h4>
              <h4 className="video__text">All Videos +</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;