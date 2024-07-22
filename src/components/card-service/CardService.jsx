import React, { useState, useEffect } from 'react';
import { servicesCard } from '../../../public/servicesCard.json';
import ModalService from '../../features/modal-service/ModalService';

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
    <section className="services section" id="services">
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
                onClick={() => openModal(index)}
              >
                En savoir plus
              </button>

              {activeModal === index && (
                <ModalService
                  service={service}
                  onClose={closeModal}
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
