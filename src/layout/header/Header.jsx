import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import ShadowHeader from '../../features/shadow-header/ShadowHeader';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <ShadowHeader>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} closeMenu={closeMenu} />
        </ShadowHeader>
    );
}