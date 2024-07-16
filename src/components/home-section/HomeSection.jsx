import React from 'react';
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';
import profilImage from '../../assets/image/profil/home-profil.jpg';
import arrowImage from '../../assets/image/curved-arrow.svg';
import linesImage from '../../assets/image/random-lines.svg';

export default function HomeSection() {
  return (
    <section className="home section">
      <div className="home__container container grid">
        <h1 className="home__name">Jonathan Araldi</h1>

        <div className="home__profil">
          <div className="home__image">
            <img src={profilImage} alt="Image de Jonathan" className="home__img" />
            <div className="home__shadow"></div>

            <img src={arrowImage} alt="Image de flèche" className="home__arrow" />
            <img src={linesImage} alt="Image de lignes" className="home__line" />

          </div>

          <div className="home__social">
            <a href="https://www.linkedin.com/in/jonathan-araldi/" target="_blank" rel="noopener noreferrer" className="home__social-link" aria-label="Profil LinkedIn">
              <FaLinkedin />
            </a>

            <a href="https://github.com/Skies-Land" target="_blank" rel="noopener noreferrer" className="home__social-link" aria-label="Profil GitHub">
              <FaGithub />
            </a>

            <a href="https://codepen.io/Skies-Land" target="_blank" rel="noopener noreferrer" className="home__social-link" aria-label="Profil CodePen">
              <FaCodepen />
            </a>
          </div>
        </div>

        <div className="home__info">
          <p className="home__description">
            <b>Développeur Front-end</b>, <br /> junior passionné par les nouvelles technologies, 
            diplômé et prêt à innover, je cherche à apporter ma passion et mes compétences 
            à une entreprise dynamique.
          </p>

          <a href="#section" className="home__scroll">
            <div className="home__scroll-box">
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <span className="home__scroll-text">En savoir plus</span>
          </a>
        </div>
      </div>
    </section>
  );
}