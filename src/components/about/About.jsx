import React, { useEffect, useState } from "react";
import aboutData from "../../../public/about.json";
import TiltEffect from "../../features/tilt-effect/TiltEffect";


const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(aboutData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="about section" id="about">
      <h1 className="visually-hidden">{data.profile.name}</h1>
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span>{data.profile.title}</span>
        </h2>

        <div className="about__perfil">
          <div className="about__image">
            <TiltEffect
              options={{
                max: 15,
                perspective: 1000,
                scale: 1,
                speed: 300,
                easing: "cubic-bezier(.03,.98,.52,.99)",
              }}
            >
              <img
                src={data.profile.image}
                alt={data.profile.alt}
                className="about__img"
              />
              <div className="about__shadow"></div>
              <div className="geometric-box"></div>
              <div className="about__box"></div>
            </TiltEffect>
          </div>
        </div>

        <div className="about__content grid">
          <div className="about__data grid">
            <div className="about__info grid">
              <p className="about__description">
                Recement diplôme d'un Bac+2 <b>d'Intégrateur Web</b> chez
                <a
                  href="https://openclassrooms.com/fr/"
                  target="_blank"
                  className="about__description-link"
                  aria-label="Site d'OppenClassRooms"
                >
                  OpenClassrooms
                </a>
                . Passionné par les nouvelles technologies, j'aspire à trouver
                une carrière dans le domaine du <b>développement web</b> qui
                correspondrais à mes rêves en agissant avec inventivité,
                imagination et conviction.
              </p>
            </div>

            <div className="about__buttons">
              <a href="#contact" className="button">
                <i className="ri-send-plane-line"></i> Contactez-moi
              </a>
              <a href="https://drive.google.com/file/d/14aSYRb1EWh0QjBZBA6bm0OdGTFS4Kpa9/view?usp=drive_link" target="_blank" className="button" rel="noopener noreferrer">
                <i className="ri-download-line"></i> Mon CV
              </a>
              <a
                href={data.profile.linkedin}
                target="_blank"
                className="button__ghost"
                aria-label="Profil LinkedIn"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
            </div>
          </div>

          <div className="about__skills">
            <h3 className="about__skills-title">Mes compétences</h3>
            <div className="about__skills-content grid">
              {data.skills.map((skill, index) => (
                <div className="about__skills-img" key={index}>
                  <img
                    src={skill.image}
                    alt={skill.alt}
                    className="about__skills-img"
                  />
                  <p className="about__skills-hover-text">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
