import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div className="testimonial__container container grid">
            <h2 className="testimonial__title">Mon retour</h2>
            <div className="testimonial__content">
                <article className="testimonial__card">

                    <div className="testimonial__border">
                        <img 
                            src={testimonial.image} 
                            alt={`Image de profil de ${testimonial.name}`} 
                            className="testimonial__img" />
                    </div>
                    <h2 className="testimonial__name">{testimonial.name}</h2>

                    <div className="testimonial__description">
                        <p>{testimonial.description}</p>
                        {testimonial.additional_info && testimonial.additional_info.link && (
                            <a href={testimonial.additional_info.link} target="_blank" rel="noopener noreferrer" className="testimonial__link">
                                {testimonial.additional_info.link_text}
                            </a>
                        )}
                    </div>

                </article>
            </div>
        </div>
    );
};

export default Testimonial;