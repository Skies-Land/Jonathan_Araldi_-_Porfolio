import React from 'react';

const ButtonService = ({ buttons }) => {
    return (
        <div className="project-page__buttons">
        {buttons.map((button, index) => (
            <a key={index} href={button.href} target="_blank" rel="noopener noreferrer" className="button">
            <i className={button.icon}></i> {button.text}
            </a>
        ))}
        </div>
    );
};

export default ButtonService;