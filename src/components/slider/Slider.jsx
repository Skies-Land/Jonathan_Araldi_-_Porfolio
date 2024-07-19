import React from 'react';

const Slider = ({ slides }) => {
    return (
        <div className="slides__container container grid">
        <div className="slides">
            {slides.map((slide, index) => (
            <div key={index} className={`slide slide-${index + 1}`}>
                <img src={slide.src} alt={slide.alt} />
            </div>
            ))}
        </div>
        </div>
    );
};

export default Slider;