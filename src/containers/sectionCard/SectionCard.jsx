import React from "react";
import { SectionContent, Sidebar } from "../../components";
import {
  About,
  Contact,
  Portfolio,
  Resume,
} from "../../components/sectionContent/sectionDescription";

import "./sectionCard.css";

import { categories } from "../../utils/data";

const SectionCard = () => {
  return (
    <div className="c-section-card">
      <Sidebar />
      <div className="c-section-card__content">
        {categories.slice(1).map((category) => {
          console.log(category.name);
          return <SectionContent key={category.id} section={category.name} />;
        })}
      </div>
    </div>
  );
};

export default SectionCard;
