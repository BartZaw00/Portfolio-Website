import React, { useContext } from "react";
import { PageContext } from "../../../App";

import { categories } from "../../../utils/data";
import "./sectionHeader.css";

const SectionHeader = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <div className="section__right_content_heading">
      <h1 className="section__right_content_heading_header">
        {categories[page].name}
      </h1>
    </div>
  );
};

export default SectionHeader;
