import React, { useContext, useRef, useEffect } from "react";

import SectionHeader from "./sectionHeader/SectionHeader";
import SectionDescription from "./sectionDescription/SectionDescription";

import "./sectionContent.css";

import { PageContext } from "../../App";

const SectionContent = ({ section }) => {
  const [page, setPage] = useContext(PageContext);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          switch (section) {
            case "ABOUT ME":
              setPage(1);
              break;
            case "RESUME":
              setPage(2);
              break;
            case "PORTFOLIO":
              setPage(3);
              break;
            case "CONTACT":
              setPage(4);
              break;
            default:
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, page]);

  return (
    <div ref={ref} id={section} className="c-section-right">
      <div className="c-section-right__content">
        <SectionHeader section={section} />
        <SectionDescription section={section} />
      </div>
    </div>
  );
};

export default SectionContent;
