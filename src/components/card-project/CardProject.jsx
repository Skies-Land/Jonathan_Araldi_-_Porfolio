import React from 'react'
import projectData from '../../data/projectsCard.json';
import { Link } from 'react-router-dom';

const CardProject = () => {

    const projectsCard = Array.isArray(projectData) ? projectData : [projectData];

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title-1">
            <span>Projets.</span>
            </h2>
            <div className="projects__container container grid">
            {projectsCard.map((project) => (
                <article key={project.id} className="projects__card">
                <div className="projects__image">
                    <img
                    src={project.image}
                    alt={`Image du projet ${project.title} d'OpenClassrooms`}
                    className="projects__img"
                    />
                    <Link to={`/project/${project.id}`} className="projects__button button">
                        <i className="ri-arrow-right-up-line"></i>Voir plus
                    </Link>
                </div>
                <div className="projects__content">
                    <h3 className="projects__subtitle">{project.subtitle}</h3>
                    <h2 className="projects__title">{project.title}</h2>
                    <p className="projects__description">{project.description}</p>
                </div>
                <div className="projects__buttons">
                    {project.githubLink && (
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__link"
                    >
                        <i className="ri-github-line"></i> Code Source
                    </a>
                    )}
                    {project.previewLink && (
                    <a
                        href={project.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__link"
                    >
                        <i className="ri-timeline-view"></i> Aperçu
                    </a>
                    )}
                </div>
                </article>
            ))}
            </div>
        </section>
    );
};

export default CardProject;