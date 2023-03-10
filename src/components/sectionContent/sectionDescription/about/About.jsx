import React from "react";
import { FaFileDownload } from "react-icons/fa";

import myCV from "../../../../assets/bzawadka-CV.pdf";

import { skillsData } from "../../../../utils/data";

import "./about.css";

const About = () => {
  return (
    <>
      <span className="section__right_content_description_about_subheading">
        I'm{" "}
        <span className="section__right_content_description_about_subheading_name-style">
          Bartosz Zawadka,
        </span>{" "}
        Frontend Developer
      </span>
      <p className="section__right_content_description_about_paragraph">
        I am a 22-year-old 4th year student of Applied Computer Science at the
        Lodz University of Technology, with a strong interest in web
        development. In addition to my academic pursuits, I am also experienced
        in sales and customer service, and thrive on new challenges. In my free
        time, I enjoy playing and watching football, going to the gym and
        playing chess.
      </p>
      <a className="download-cv-button" href={myCV} download>
        <FaFileDownload className="download-cv-icon" />
        Download my CV
      </a>{" "}
      <div className="skills-section">
        {skillsData.map((skill) => (
          <div className="skills">
            <div className="skills-title">{skill.category}</div>
            <div className="skills-box">
              {skill.details.map((item) => {
                return (
                  <div key={item.id} className="skill-box">
                    <div className="skill">
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
    </>
  );
};

export default About;
