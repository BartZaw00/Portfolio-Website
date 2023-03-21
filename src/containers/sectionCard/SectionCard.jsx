import React, { useEffect, useState } from "react";
import { SectionContent, Sidebar } from "../../components";

import "./sectionCard.css";

import { categories } from "../../utils/data";

const SectionCard = ({offset}) => {
  return (
    <div className="c-section-card">
      <Sidebar offset={offset}/>
      <div className="c-section-card__content">
        {categories.slice(1).map((category) => {
          return <SectionContent key={category.id} section={category.name} />;
        })}
      </div>
    </div>
  );
};

export default SectionCard;
