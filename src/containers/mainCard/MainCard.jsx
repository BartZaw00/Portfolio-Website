import React, { useContext, useEffect, useRef } from "react";
import MainContent from "../../components/mainContent/MainContent";

import "./mainCard.css";

import { PageContext } from "../../App";

const MainCard = ({offset}) => {
  const [page, setPage] = useContext(PageContext);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage(0);
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
    <div ref={ref} className="c-main-card">
      <MainContent offset={offset}/>
    </div>
  );
};

export default MainCard;
