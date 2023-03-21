import React from "react";

import { About, Resume, Portfolio, Contact } from "./index.js";

import "./sectionDescription.css";

const SectionDescription = ({ section }) => {
  const renderSection = () => {
    switch (section) {
      case "ABOUT ME":
        return <About />;
      case "RESUME":
        return <Resume />;
      case "PORTFOLIO":
        return <Portfolio />;
      case "CONTACT":
        return <Contact />;
      default:
        return null;
    }
  };

  return <div className="c-section-description">{renderSection()}</div>;
};

export default SectionDescription;
