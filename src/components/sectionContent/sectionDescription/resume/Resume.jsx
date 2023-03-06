import React from "react";

import "./resume.css";

const Resume = () => {
  return (
    <div className="section__right_content_description_resume">
      <div className="section__right_content_description_resume_details">
        <h6 className="section__right_content_description_resume_subheading">
          EDUCATION
        </h6>
        <div className="section__right_content_description_resume_details_detail">
          <span className="section__right_content_description_resume_details_detail_time">
            October 2019 - now
          </span>
          <span>Applied Computer Science | <br/>Lodz University of Technology</span>
        </div>
      </div>
      <div className="section__right_content_description_resume_divider"></div>
      <div className="section__right_content_description_resume_details">
        <h6 className="section__right_content_description_resume_subheading">
          EXPERIENCE
        </h6>
        <div className="section__right_content_description_resume_details_detail">
          <span className="section__right_content_description_resume_details_detail_time">
            August 2021 - October 2022
          </span>
          <span>Sales and Customer Service Consultant | <br/>Tutore</span>
          <ul>
            <li>High sales results</li>
            <li>Developing soft skills</li>
          </ul>
        </div>
        <div className="section__right_content_description_resume_details_detail">
          <span className="section__right_content_description_resume_details_detail_time">
            January 2019 - August 2021
          </span>
          <span>Wordpress Developer | freelancing</span>
          <ul>
            <li>Web design in WordPress and WooCommerce</li>
          </ul>
        </div>
      </div>
      <div className="section__right_content_description_resume_divider"></div>
      <div className="section__right_content_description_resume_details">
        <h6 className="section__right_content_description_resume_subheading">
          VOLUNTEERING
        </h6>
        <div className="section__right_content_description_resume_details_detail">
          <span className="section__right_content_description_resume_details_detail_time">
            September 2021 - June 2022
          </span>
          <span>Academy Scout | Widzew Lodz</span>
          <ul>
            <li>Working in a group</li>
            <li>Searching for football talents in my area</li>
            <li>Preparation of match reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
