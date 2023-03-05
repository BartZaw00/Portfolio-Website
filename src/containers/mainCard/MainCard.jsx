import React from "react";


import "./mainCard.css";

const MainCard = () => {
  return (
    <div className="main">
      <div className="main__left">
        <div className="main__left_header">
          <h2 className="main__left_header_subheading">HI THERE!</h2>
          <h1 className="main__left_header_heading">
            I'M{" "}
            <span className="main__left_header_heading_name-style">BARTEK</span>
          </h1>
          <span className="main__left_header_position">FRONTEND DEVELOPER</span>
          <p className="main__left_header_paragraph">
            I am a 4th year student of Applied Computer Science at the Lodz
            University of Technology. Mainly interested in web development. I am
            a person open to new challenges with sales and customer service
            experience.
          </p>
          <button className="main__left_header_btn">MORE ABOUT ME</button>
        </div>
      </div>
      <div className="main__right"></div>
    </div>
  );
};

export default MainCard;
