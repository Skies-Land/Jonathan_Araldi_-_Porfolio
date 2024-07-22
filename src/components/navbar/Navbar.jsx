import React from 'react';
import { NavLink } from 'react-router-dom';
import ActiveLink from '../../features/active-link/ActiveLink';

const Navbar = ({ showMenu, setShowMenu, closeMenu }) => {
    return (
        <nav className="nav container">
            <NavLink to="/" className="nav__logo">
                <span className="nav__logo-circle">J</span>
                <span className="nav__logo-name">Jonathan Araldi.</span>
            </NavLink>

            <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                <span className="nav__title">Menu</span>

                <h3 className="nav__name">Jonathan</h3>

                <ul className="nav__list">
                    <li className="nav__item">
                        <ActiveLink to="/" isHome onClick={closeMenu} aria-label="Accueil de mon portfolio">Accueil</ActiveLink>
                    </li>

                    <li className="nav__item">
                        <ActiveLink to="#about" onClick={closeMenu} aria-label="À propos de moi">À propos</ActiveLink>
                    </li>

                    <li className="nav__item">
                        <ActiveLink to="#services" onClick={closeMenu} aria-label="Mes services">Services</ActiveLink>
                    </li>

                    <li className="nav__item">
                        <ActiveLink to="#projects" onClick={closeMenu} aria-label="Voir mes projets">Projets</ActiveLink>
                    </li>

                    <li className="nav__item">
                        <ActiveLink to="#contact" onClick={closeMenu} className="nav__link nav__link-button" aria-label="Contactez-moi">Contact</ActiveLink>
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
