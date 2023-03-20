import React from "react";

import { resumeData } from "../../../../utils/data";
import "./resume.css";

const Resume = () => {
  return (
    <div className="c-resume">
      {resumeData.map((item, index) => (
        <React.Fragment key={item.id}>
          <div className="c-resume__details">
            <h6 className="c-resume__heading">{item.title}</h6>
            {item.details.map((detail) => (
              <div
                key={detail.id}
                className="c-resume__detail"
              >
                <span className="c-resume__time">
                  {detail.time}
                </span>
                <span className="c-resume__title">
                  {detail.position} | <br />
                  <span className="c-resume__title c-resume__title--weightLow">
                    {detail.organization}
                  </span>
                </span>
                {detail.skills && (
                  <ul className="c-resume__list">
                    {detail.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="c-resume__list-element"
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
            <div className="c-resume__divider"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Resume;
