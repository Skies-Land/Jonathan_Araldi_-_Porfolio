import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div className="testimonial__container container grid">
        <h2 className="testimonial__title">Mon retour</h2>
        <div className="testimonial__content">
            <article className="testimonial__card">
            <div className="testimonial__border">
                <img src={testimonial.image} alt={`Image de profil de ${testimonial.name}`} className="testimonial__img" />
            </div>
            <h2 className="testimonial__name">{testimonial.name}</h2>
            <p className="testimonial__description">{testimonial.description}</p>
            </article>
        </div>
        </div>
    );
};

export default Testimonial;
