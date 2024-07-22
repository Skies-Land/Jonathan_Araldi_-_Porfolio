import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectGetById } from '../../service/getData';
import Slider from '../../components/slider/Slider';
import Collapse from '../../components/collapse/Collapse';
import SkillsIcon from '../../components/skills-icon/SkillsIcon';
import Testimonial from '../../components/testimonial/Testimonial';
import ButtonService from '../../components/buttons/ButtonService';

export default function DescriptionProjectPage() {
    const { projetId } = useParams();
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (projetId) {
            const fetchProject = async () => {
                try {
                    const data = await projectGetById(projetId);
                    if (data) {
                        setProject(data);
                    } else {
                        throw new Error("Project not found");
                    }
                } catch (error) {
                    console.error("Error fetching project by ID:", error);
                    setError(error);
                }
            };
            fetchProject();
        } else {
            setError(new Error("Invalid project ID"));
        }
    }, [projetId]);

    const ErrorComponent = ({ message }) => <div>Error loading project: {message}</div>;
    if (error) {
        return <ErrorComponent message={error.message} />;
    }
    
    const Loading = () => <div>Loading...</div>;
    if (!project) {
        return <Loading />;
    }

    return (
        <section className="project-page section">
            <h1 className="visually-hidden">Jonathan Araldi</h1>
            <h2 className="section__title-1">
                <span>{project.title2}</span>
            </h2>
            <Slider slides={project.slides} />
            <Collapse collapses={project.collapses} />
            <SkillsIcon skills={project.skills} />
            <Testimonial testimonial={project.testimonial} />
            <ButtonService buttons={project.buttons} />
        </section>
    );
};
