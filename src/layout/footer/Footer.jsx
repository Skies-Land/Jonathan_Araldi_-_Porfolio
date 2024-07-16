import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
          <div className="footer__content grid">
              <Link to="/" className="footer__logo" aria-label="Retour à l'accueil de mon portfolio">Jonathan Araldi.</Link>

              <ul className="footer__links">
                  <li>
                      <Link to="/about" className="footer__link" aria-label="À propos de moi">À propos</Link>
                  </li>

                  <li>
                      <Link to="#projects" className="footer__link" aria-label="À propos de moi">Projets</Link>
                  </li>

                  <li>
                      <Link to="/contact" className="footer__link" aria-label="Contactez-moi">Contact</Link>
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
              <Link to="/" aria-label="Accueil de mon portfolio"> Jonathan Araldi.</Link>
          </span>
      </div>
    </footer>
  );
};
