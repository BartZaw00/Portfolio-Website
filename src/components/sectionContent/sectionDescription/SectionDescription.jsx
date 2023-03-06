import React from "react";

import { useContext } from "react";
import { PageContext } from "../../../App";
import { About, Resume, Portfolio, Contact } from "./index.js";

import "./sectionDescription.css";

const SectionDescription = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <div className="section__right_content_description">
      {(() => {
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
      })()}
      {/* The parentheses () around the function definition in the code are used to create an immediately-invoked function expression (IIFE). */}
    </div>
  );
};

export default SectionDescription;
