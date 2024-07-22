import React from 'react';

const ModalService = ({ service, onClose }) => {
    return (
        <div className="services__modal active-modal">
            <div className="services__modal-content">
                <i
                className="ri-close-line services__modal-close"
                onClick={onClose}
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
    );
};

export default ModalService;
