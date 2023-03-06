import React, { useState } from "react";

import SectionHeader from "./sectionHeader/SectionHeader";
import SectionDescription from "./sectionDescription/SectionDescription";

import "./sectionContent.css";


const SectionContent = () => {

  return (
    <div className="section__right">
      <div className="section__right_content">
        <SectionHeader />
        <SectionDescription />
      </div>
    </div>
  );
};

export default SectionContent;
