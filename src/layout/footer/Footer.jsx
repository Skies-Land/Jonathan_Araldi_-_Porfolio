import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <NavLink to="/" className="footer__logo" aria-label="Retour à l'accueil de mon portfolio">Jonathan Araldi.</NavLink>

          <ul className="footer__links">
            <li>
              <a href="/#about" className="footer__link" aria-label="À propos de moi">À propos</a>
            </li>
            <li>
              <a href="/#services" className="footer__link" aria-label="Mes services">Services</a>
            </li>
            <li>
              <a href="/#projects" className="footer__link" aria-label="Mes projets">Projets</a>
            </li>
            <li>
              <a href="/#contact" className="footer__link" aria-label="Contactez-moi">Contact</a>
            </li>
          </ul>

          <div className="footer__social">
            <a href="https://www.linkedin.com/in/jonathan-araldi/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Profil LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Skies-Land" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Profil GitHub">
              <FaGithub />
            </a>
            <a href="https://codepen.io/Skies-Land" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Profil CodePen">
              <FaCodepen />
            </a>
          </div>
        </div>

        <span className="footer__copy">
          &#169; Tous droits réservés par                    
          <NavLink to="/" aria-label="Accueil de mon portfolio"> Jonathan Araldi.</NavLink>
        </span>
      </div>
    </footer>
  );
}
