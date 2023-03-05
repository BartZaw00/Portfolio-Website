import React from "react";
import { MdCircle } from "react-icons/md";

import "./sectionCard.css";

const SectionCard = () => {
  return (
    <div className="section">
      <div className="section__left">
        <img src="/src/assets/cv-section-card.png" alt="profile-photo" />
        <div className="section__left_menu">
          <MdCircle />
          <a href="#" className="section__left_menu_tag">
            HOME
          </a>
          <a href="" className="section__left_menu_tag">
            ABOUT ME
          </a>
          <a href="" className="section__left_menu_tag">
            RESUME
          </a>
          <a href="" className="section__left_menu_tag">
            PORTFOLIO
          </a>
          <a href="" className="section__left_menu_tag">
            CONTACT
          </a>
          <MdCircle />
        </div>
      </div>
      <div className="section__right">
        <div className="section__right_content">
          <h1 className="section__right_content_heading">ABOUT ME</h1>
          <div className="section__right_content_description">
            <span className="section__right_content_description_subheading">
              I'm{" "}
              <span className="section__right_content_description_subheading_name-style">
                Bartosz Zawadka,
              </span>{" "}
              Frontend Developer
            </span>
            <p className="section__right_content_description_paragraph">
              I am a 4th year student of Applied Computer Science at the Lodz
              University of Technology. Mainly interested in web development. I
              am a person open to new challenges with sales and customer service
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
