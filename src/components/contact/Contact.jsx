import React from 'react';
import arrowImage from "../../assets/image/curved-arrow.svg";


const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h1 className="visually-hidden">Jonathan Araldi</h1>
            <div className="contact__container grid">
                <div className="contact__data">
                    <h2 className="section__title-2">
                        <span>Contactez-moi.</span>
                    </h2>

                    <p className="contact__description-1">
                        Je lirai tous les courriels. 
                        Envoyez-moi votre message ici et je vous répondrai.
                    </p>

                    <p className="contact__description-2">
                        J'ai besoin de votre <b>nom</b> et de votre <b>adresse mail</b>,
                        vous recevrez rien d'autre que votre réponse.
                    </p>

                    <div className="geometric-box"></div>
                </div>

                <div className="contact__mail">
                    <h2 className="contact__title">
                        Envoyez-moi un message
                    </h2>

                    <form className="contact__form" id="contact-form">
                        <div className="contact__group">
                            <div className="contact__box">
                                <input type="text" name="user_name" className="contact__input" id="name" required placeholder="Nom" />
                                <label htmlFor="name" className="contact__label">Nom</label>
                            </div>

                            <div className="contact__box">
                                <input type="email" name="user_email" className="contact__input" id="email" required placeholder="Votre E-mail" />
                                <label htmlFor="email" className="contact__label">E-mail</label>
                            </div>
                        </div>

                        <div className="contact__box">
                            <input type="text" name="user_subject" className="contact__input" id="subject" required placeholder="Sujet" />
                            <label htmlFor="subject" className="contact__label">Sujet</label>
                        </div>

                        <div className="contact__box contact__area">
                            <textarea name="user_message" id="message" className="contact__input" required placeholder="Message"></textarea>
                            <label htmlFor="message" className="contact__label">Message</label>
                        </div>

                        <p className="contact__message" id="contact-message"></p>

                        <button type="submit" className="contact__button button">
                            <i className="ri-send-plane-line"></i> Envoie du message
                        </button>
                    </form>
                </div>

                <div className="contact__social">
                    <img src={arrowImage} alt="Image de flèche" className="contact__social-arrow" />

                    <div className="contact__social-data">
                        <div>
                            <p className="contact__social-description-1">
                                Pas de message par email
                            </p>

                            <p className="contact__social-description-2">
                                Ok, retrouvez-moi sur LinkedIn
                            </p>
                        </div>

                        <div className="contact__social-links">
                            <a href="https://www.linkedin.com/in/jonathan-araldi/" target="_blank" className="contact__social-link" aria-label="Profil LinkedIn">
                                <i className="ri-linkedin-box-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;