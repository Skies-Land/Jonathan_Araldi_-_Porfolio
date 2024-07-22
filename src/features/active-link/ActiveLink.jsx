import React, { useEffect, useState } from 'react';

const ActiveLink = ({ to, children, isHome = false, ...props }) => {
    const [isActive, setIsActive] = useState(false);

    const handleScroll = () => {
        const scrollDown = window.scrollY;
        if (isHome) {
            // Le lien "Accueil" est actif si la page est en haut
            setIsActive(scrollDown === 0);
        } else {
            const section = document.querySelector(to);
            if (section) {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 58;
                const sectionBottom = sectionTop + sectionHeight;

                setIsActive(scrollDown >= sectionTop && scrollDown < sectionBottom);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [to, isHome]);

    return (
        <a href={to} className={`nav__link ${isActive ? 'active-link' : ''}`} {...props}>
            {children}
        </a>
    );
};

export default ActiveLink;
