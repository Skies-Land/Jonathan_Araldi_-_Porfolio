import React from 'react';

const Collapse = ({ collapses }) => {
    return (
        <div className="collapse container grid">
        <ul className="collapse__container">
            {collapses.map(collapse => (
            <li key={collapse.id} className="collapse__card">
                <div className="collapse__content">
                    <input type="radio" name="collapse" id={collapse.id} defaultChecked={collapse.id === "first"} />
                    <label className="collapse__title" htmlFor={collapse.id}>{collapse.title}</label>
                    <div className="collapse__description">
                        <p>{collapse.description}</p>
                    </div>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Collapse;