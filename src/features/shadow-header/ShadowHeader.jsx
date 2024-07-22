import React, { useEffect, useState } from 'react';

const ShadowHeader = ({ children }) => {
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

    return (
        <header className={`header ${shadowHeader ? 'shadow-header' : ''}`} id="header">
        {children}
        </header>
    );
};

export default ShadowHeader;
