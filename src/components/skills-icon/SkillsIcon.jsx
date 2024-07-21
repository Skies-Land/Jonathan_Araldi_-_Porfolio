import React from 'react';

const SkillsIcon = ({ skills }) => {
    return (
        <div className="skills">
        <h3 className="skills__title">Technologies utilisées</h3>
        <div className="skills__content grid">
            {skills.map((skill, index) => (
            <div key={index} className="skills-img">
                <img src={skill.src} alt={skill.alt} className="skills-img" />
                <p className="skills-hover-text">{skill.text}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default SkillsIcon;