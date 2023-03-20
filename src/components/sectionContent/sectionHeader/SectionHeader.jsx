import React, { useContext } from "react";
import { PageContext } from "../../../App";

import { categories } from "../../../utils/data";
import "./sectionHeader.css";

const SectionHeader = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <div className="c-section-header">
      <h1 className="c-section-header__heading">
        {categories[page].name}
      </h1>
    </div>
  );
};

export default SectionHeader;
