import React from "react";

import { resumeData } from "../../../../utils/data";
import "./resume.css";

const Resume = () => {
  return (
    <div className="section__right_content_description_resume">
      {resumeData.map((item, index) => (
        <React.Fragment key={item.id}>
          <div
            className="section__right_content_description_resume_details"
          >
            <h6 className="section__right_content_description_resume_subheading">
              {item.title}
            </h6>
            {item.details.map((detail) => (
              <div
                key={detail.id}
                className="section__right_content_description_resume_details_detail"
              >
                <span className="section__right_content_description_resume_details_detail_time">
                  {detail.time}
                </span>
                <span className="section__right_content_description_resume_details_detail_title">
                  {detail.position} | <br />
                  <span className="section__right_content_description_resume_details_detail_title section__right_content_description_resume_details_detail_title--weightLow">
                    {detail.organization}
                  </span>
                </span>
                {detail.skills && (
                  <ul className="section__right_content_description_resume_details_detail_list">
                    {detail.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="section__right_content_description_resume_details_detail_list_element"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {index !== resumeData.length - 1 && (
            <div className="section__right_content_description_resume_divider"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
  
  
  

  {
    /* <div className="section__right_content_description_resume_divider"></div>
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
      </div> */
  }
};

export default Resume;
