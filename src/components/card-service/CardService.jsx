import React, { useState, useEffect } from 'react';
import { servicesCard } from '../../data/servicesCard.json';

export default function CardService() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []); 

  return (
    <section className="services section" id="section">
      <h2 className="section__title-2">
        <span>Services.</span>
      </h2>

      <div className="services__container container grid">
        {servicesCard.map((service, index) => (

          <article className="services__card" key={index}>
            <div className="services__border"></div>

            <div className="services__content">
              <div className="services__icon">
                <div className="services__box"></div>
                <i className={service.icon}></i>
              </div>

              <h2 className="services__title">{service.title}</h2>

              <p className="services__description">
                {service.description}
              </p>

              <button
                className="services__button button__service"
                onClick={() => openModal(index)}>
                En savoir plus
              </button>

              {activeModal === index && (
                <div className="services__modal active-modal">
                  <div className="services__modal-content">
                    <i
                      className="ri-close-line services__modal-close"
                      onClick={closeModal}
                    ></i>

                    <h2 className="services__modal-title">{service.title}</h2>

                    <ul className="services__modal-list grid">
                      {service.modalContent.map((item, idx) => (
                        <li className="services__modal-item" key={idx}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </article>

        ))}
      </div>
    </section>
  );
};