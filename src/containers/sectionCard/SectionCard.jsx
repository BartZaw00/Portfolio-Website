import React from "react";
import { SectionContent, Sidebar } from "../../components";

import "./sectionCard.css";

const SectionCard = () => {
  return (
    <div className="c-section-card">
      <Sidebar />
      <SectionContent />
    </div>
  );
};

export default SectionCard;
