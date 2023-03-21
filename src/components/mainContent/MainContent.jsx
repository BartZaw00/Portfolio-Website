import React from "react";
import { Element } from "react-scroll";

import "./mainContent.css";
import MainLeft from "./mainLeft/MainLeft";
import MainRight from "./mainRight/MainRight";

const MainContent = ({ offset }) => {
  return (
    // <Element name="HOME">
    <div id="home" className="c-main-content">
      <MainLeft offset={offset} />
      <MainRight />
    </div>
    // </Element>
  );
};

export default MainContent;
