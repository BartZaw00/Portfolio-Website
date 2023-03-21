import React from "react";

import { useContext } from "react";
import { PageContext } from "../../../App";
import { About, Resume, Portfolio, Contact } from "./index.js";

import "./sectionDescription.css";

const SectionDescription = ({ section }) => {
  const [page, setPage] = useContext(PageContext);

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

{
  /* {(() => {
        switch (page) {
          case 1:
            return <About />;
          case 2:
            return <Resume />;
          case 3:
            return <Portfolio />;
          case 4:
            return <Contact />;
        }
      })()} */
}
{
  /* The parentheses () around the function definition in the code are used to create an immediately-invoked function expression (IIFE). */
}
