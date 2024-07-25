import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_qy5pxzk', 'template_54xdgbp', form.current, '0typqi83F2jiufOlg')
        .then(
            () => {
                setMessage('Message envoyé avec succès ✅');
                setTimeout(() => {
                    setMessage('');
                }, 5000);
                form.current.reset();
            },
            () => {
                setMessage('Message non envoyé (erreur de service) ❌');
            }
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact__form" id="contact-form">
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

            <p className="contact__message" id="contact-message">{message}</p>

            <button type="submit" className="contact__button button">
                <i className="ri-send-plane-line"></i> Envoie du message
            </button>
        </form>
    );
};

export default ContactForm;
