import React from "react";
import { GiConfirmed } from "react-icons/gi";

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
          <span className="section__right_content_description_resume_details_detail_title">
            Applied Computer Science | <br />
            <span className="section__right_content_description_resume_details_detail_title section__right_content_description_resume_details_detail_title--weightLow">
              {" "}
              Lodz University of Technology
            </span>
          </span>
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
          <span className="section__right_content_description_resume_details_detail_title">
            Sales and Customer Service Consultant | <br />
            <span className="section__right_content_description_resume_details_detail_title section__right_content_description_resume_details_detail_title--weightLow">
              {" "}
              Tutore
            </span>
          </span>
          <ul className="section__right_content_description_resume_details_detail_list">
            <li className="section__right_content_description_resume_details_detail_list_element">
              High sales results
            </li>
            <li className="section__right_content_description_resume_details_detail_list_element">
              Developing soft skills
            </li>
          </ul>
        </div>
        <div className="section__right_content_description_resume_details_detail">
          <span className="section__right_content_description_resume_details_detail_time">
            January 2019 - August 2021
          </span>
          <span className="section__right_content_description_resume_details_detail_title">
            Wordpress Developer |
            <span className="section__right_content_description_resume_details_detail_title section__right_content_description_resume_details_detail_title--weightLow">
              {" "}
              freelancing
            </span>
          </span>
          <ul className="section__right_content_description_resume_details_detail_list">
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
          <span className="section__right_content_description_resume_details_detail_title">
            Academy Scout |
            <span className="section__right_content_description_resume_details_detail_title section__right_content_description_resume_details_detail_title--weightLow">
              {" "}
              Widzew Lodz
            </span>
          </span>
          <ul className="section__right_content_description_resume_details_detail_list">
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
