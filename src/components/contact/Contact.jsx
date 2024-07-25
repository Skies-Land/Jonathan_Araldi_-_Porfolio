import React from 'react';
import arrowImage from "../../assets/image/curved-arrow.svg";
import ContactForm from '../../features/contact-form/ContactForm';

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

                    <ContactForm />
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
