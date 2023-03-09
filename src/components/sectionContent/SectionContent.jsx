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
    prevPage !== null && page > prevPage ? "slide-down" : "slide-up";

  const sectionHeaders = ["", "About us", "Resume", "Portfolio", "Contact"];

  return (
    <div className="section__right">
      <div className="section__right_content">
        <SectionHeader />
        <TransitionGroup>
          <CSSTransition
            key={sectionHeaders[page]}
            classNames={{
              enter: `slide-up-enter ${animationClass}-enter`,
              enterActive: `slide-up-enter-active ${animationClass}-enter-active`,
              exit: `slide-up-exit ${animationClass}-exit`,
              exitActive: `slide-up-exit-active ${animationClass}-exit-active`,
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
