import React, { useContext } from "react";
import { PageContext } from "../../../App";

import "./sectionHeader.css";

const SectionHeader = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <div className="section__right_content_heading">
      {(() => {
        switch (page) {
          case 0:
            return <h1 className="section__right_content_heading_header">HOME</h1>
          case 1:
            return <h1 className="section__right_content_heading_header">ABOUT ME</h1>
          case 2:
            return <h1 className="section__right_content_heading_header">RESUME</h1>
          case 3:
            return <h1 className="section__right_content_heading_header">PORTFOLIO</h1>
          case 4:
            return <h1 className="section__right_content_heading_header">CONTACT</h1>
          default:
            return "ERROR 404";
        }
      })()}
      {/* The parentheses () around the function definition in the code are used to create an immediately-invoked function expression (IIFE). */}
    </div>
  );
};

export default SectionHeader;
