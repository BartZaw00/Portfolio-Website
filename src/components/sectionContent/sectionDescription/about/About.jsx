import React from "react";
import { FaFileDownload } from "react-icons/fa";

import myCV from "../../../../assets/bzawadka-CV.pdf";

import { skillsData } from "../../../../utils/data";
import SectionHeader from "../../sectionHeader/SectionHeader";
import SectionDescription from "../SectionDescription";

import "./about.css";

const About = () => {
  return (
    <>
      <div className="c-about">
        <span className="c-about__heading">
          I'm{" "}
          <span className="c-about__heading c-about__heading--bold">
            Bartosz Zawadka,
          </span>{" "}
          Frontend Developer
        </span>
        <p className="c-about__paragraph">
          I am a 22-year-old 4th year student of Applied Computer Science at the
          Lodz University of Technology, with a strong interest in web
          development. In addition to my academic pursuits, I am also
          experienced in sales and customer service, and thrive on new
          challenges. In my free time, I enjoy playing and watching football,
          going to the gym and playing chess.
        </p>
        <a className="c-about__download-cv-button" href={myCV} download>
          <FaFileDownload className="c-about__download-cv-icon" />
          Download my CV
        </a>{" "}
        <div className="c-about__skills-section">
          {skillsData.map((skill) => (
            <div key={skill.id} className="c-about__skills">
              <div className="c-about__skills-title">{skill.category}</div>
              <div className="c-about__skills-box">
                {skill.details.map((item) => {
                  return (
                    <div key={item.id} className="c-about__skill-box">
                      <div className="c-about__skill">
                        <img src={item.img} alt="skill" />
                      </div>
                      <span>{item.skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
