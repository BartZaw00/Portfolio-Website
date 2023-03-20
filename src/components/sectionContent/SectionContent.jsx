import React, { useContext, useRef, useEffect } from "react";

import SectionHeader from "./sectionHeader/SectionHeader";
import SectionDescription from "./sectionDescription/SectionDescription";

import "./sectionContent.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PageContext } from "../../App";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const SectionContent = () => {
  const [page, setPage] = useContext(PageContext);
  const prevPage = usePrevious(page);

  const animationClass =
     page > prevPage ? "slide-right" : "slide-left";

  const sectionHeaders = ["", "About us", "Resume", "Portfolio", "Contact"];

  return (
    <div className="c-section-right">
      <div className="c-section-right__content">
        <SectionHeader />
        <TransitionGroup>
          <CSSTransition
            key={sectionHeaders[page]}
            classNames={{
              enter: `slide-right-enter ${animationClass}-enter`,
              enterActive: `slide-right-enter-active ${animationClass}-enter-active`,
              exit: `slide-right-exit ${animationClass}-exit`,
              exitActive: `slide-right-exit-active ${animationClass}-exit-active`,
            }}
            timeout={{ enter: 500 }}
          >
            <SectionDescription />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default SectionContent;
