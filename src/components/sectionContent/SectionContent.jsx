import React, { useContext, useRef, useEffect } from "react";

import SectionHeader from "./sectionHeader/SectionHeader";
import SectionDescription from "./sectionDescription/SectionDescription";

import "./sectionContent.css";

import { PageContext } from "../../App";
import { Element } from "react-scroll";


// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   }, [value]);
//   return ref.current;
// }

const SectionContent = ({ section }) => {
  const [page, setPage] = useContext(PageContext);
  // const prevPage = usePrevious(page);

  // const animationClass = page > prevPage ? "slide-right" : "slide-left";

  const sectionHeaders = ["", "About us", "Resume", "Portfolio", "Contact"];


  return (
    <Element name={section}>
      <div className="c-section-right">
        <div className="c-section-right__content">
          <SectionHeader section={section} />
          <SectionDescription section={section} />
        </div>
      </div>
    </Element>
  );
};

export default SectionContent;
