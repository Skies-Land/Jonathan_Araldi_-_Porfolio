import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [shadowHeader, setShadowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setShadowHeader(true);
            } else {
                setShadowHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <header className={`header ${shadowHeader ? 'shadow-header' : ''}`} id="header">
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} closeMenu={closeMenu} />
        </header>
    );
}