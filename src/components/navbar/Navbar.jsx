import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ showMenu, setShowMenu }) => {
    return (
        <nav className="nav container">
            <Link to="/" className="nav__logo">
                <span className="nav__logo-circle">J</span>
                <span className="nav__logo-name">Jonathan Araldi.</span>
            </Link>

            <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                <span className="nav__title">Menu</span>

                <h3 className="nav__name">Jonathan</h3>

                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link active-link" aria-label="Accueil de mon portfolio">Accueil</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/about" className="nav__link" aria-label="À propos de moi">À propos</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="#projects" className="nav__link" aria-label="Voir mes projets">Projets</Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/contact" className="nav__link nav__link-button" aria-label="Contactez-moi">Contact</Link>
                    </li>
                </ul>

                <div className="nav__close" id="nav-close" onClick={() => setShowMenu(false)}>
                    <i className="ri-close-line"></i>
                </div>
            </div>

            <div className="nav__buttons">
                <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
                    <i className="ri-apps-2-line"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;