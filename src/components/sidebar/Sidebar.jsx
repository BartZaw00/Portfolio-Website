import React from "react";
import { MdCircle } from "react-icons/md";

import { useContext } from "react";
import { PageContext } from "../../App";

import "./sidebar.css";


const Sidebar = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <div className="section__left">
      <img src="/src/assets/cv-section-card.png" alt="profile-photo" />
      <div className="section__left_menu">
        <MdCircle />
        <a
          style={{ color: page === 0 ? "white" : "black" }}
          className="section__left_menu_tag"
          onClick={() => setPage(0)}
        >
          HOME
        </a>
        <a
          style={{ color: page === 1 ? "white" : "black" }}
          className="section__left_menu_tag"
          onClick={() => setPage(1)}
        >
          ABOUT ME
        </a>
        <a
          style={{ color: page === 2 ? "white" : "black" }}
          className="section__left_menu_tag"
          onClick={() => setPage(2)}
        >
          RESUME
        </a>
        <a
          style={{ color: page === 3 ? "white" : "black" }}
          className="section__left_menu_tag"
          onClick={() => setPage(3)}
        >
          PORTFOLIO
        </a>
        <a
          style={{ color: page === 4 ? "white" : "black" }}
          className="section__left_menu_tag"
          onClick={() => setPage(4)}
        >
          CONTACT
        </a>
        <MdCircle />
      </div>
    </div>
  );
};

export default Sidebar;
