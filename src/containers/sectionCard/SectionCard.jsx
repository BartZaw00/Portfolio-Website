import React from "react";
import { Feed, Sidebar } from "../../components";

import "./sectionCard.css";

const SectionCard = () => {
  return (
    <div className="section">
      <Sidebar />
      <Feed />
    </div>
  );
};

export default SectionCard;
