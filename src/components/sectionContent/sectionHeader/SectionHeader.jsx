import React, { useContext } from "react";
import { PageContext } from "../../../App";

import "./sectionHeader.css";

const SectionHeader = ({ section }) => {
  const [page, setPage] = useContext(PageContext);



  return (
    <div className="c-section-header">
      <h1 className="c-section-header__heading">{section}</h1>
    </div>
  );
};

export default SectionHeader;
