import React, { useState } from "react";

import { useContext } from "react";
import { PageContext } from "../../App";

import "./feed.css";

const Feed = () => {
  const [page, setPage] = useContext(PageContext);

  return (
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
            University of Technology. Mainly interested in web development. I am
            a person open to new challenges with sales and customer service
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
