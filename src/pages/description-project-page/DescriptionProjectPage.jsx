import React  from 'react';
import Slider from '../../components/slider/Slider';
import Collapse from '../../components/collapse/Collapse';
import SkillsIcon from '../../components/skills-icon/SkillsIcon';
import Testimonial from '../../components/testimonial/Testimonial';
import ButtonService from '../../components/button-service/ButtonService';
import projectsCard from '../../data/projectsCard.json';

export default function DescriptionProjectPage() {

    return (
        <section className="project-page section">
            <h1 className="visually-hidden">Jonathan Araldi</h1>
            <h2 className="section__title-1">
                <span>{projectsCard.title2}</span>
            </h2>
            <Slider slides={projectsCard.slides} />
            <Collapse collapses={projectsCard.collapses} />
            <SkillsIcon skills={projectsCard.skills} />
            <Testimonial testimonial={projectsCard.testimonial} />
            <ButtonService buttons={projectsCard.buttons} />
        </section>
    );
};