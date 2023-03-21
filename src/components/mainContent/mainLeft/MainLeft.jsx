import React, { useContext } from "react";
import { Link } from "react-scroll";
import { PageContext } from "../../../App";

import cvMainCard from "../../../assets/cv-main-card.png";

import "./mainLeft.css";

const MainLeft = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <div className="c-main-left">
      <div className="c-main-left__header">
        <h2 className="c-main-left__subheading">HI THERE!</h2>
        <img
          className="c-main-left__photo-mobile"
          src={cvMainCard}
          alt="profile-photo"
        />
        <h1 className="c-main-left__heading">
          I'M <span className="c-main-left__heading--name">BARTEK</span>
        </h1>
        <span className="c-main-left__position">FRONTEND DEVELOPER</span>
        <p className="c-main-left__paragraph">
          I am a 4th year student of Applied Computer Science at the Lodz
          University of Technology. Mainly interested in web development. I am a
          person open to new challenges with sales and customer service
          experience.
        </p>
        <Link
          to="ABOUT ME"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          <button className="c-main-left__btn" onClick={() => setPage(1)}>
            MORE ABOUT ME
          </button>
        </Link>
      </div>
      <img
        className="c-main-left__photo"
        src={cvMainCard}
        alt="profile-photo"
      />
    </div>
  );
};

export default MainLeft;
