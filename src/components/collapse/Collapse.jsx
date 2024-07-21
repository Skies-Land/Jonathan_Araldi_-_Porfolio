import React from 'react';

const Collapse = ({ collapses }) => {
    // Fonction pour convertir les sauts de ligne \n d'un fichier JSON en éléments <br />
    const renderDescriptionWithLineBreaks = (description) => {
        return description.split('\n').map((line, index, array) => (
            <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <div className="collapse container grid">
        <ul className="collapse__container">
            {collapses.map(collapse => (
            <li key={collapse.id} className="collapse__card">
                <div className="collapse__content">
                    <input type="radio" name="collapse" id={collapse.id} defaultChecked={collapse.id === "first"} />
                    <label className="collapse__title" htmlFor={collapse.id}>{collapse.title}</label>
                    <div className="collapse__description">
                    <p>{renderDescriptionWithLineBreaks(collapse.description)}</p>
                    </div>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Collapse;