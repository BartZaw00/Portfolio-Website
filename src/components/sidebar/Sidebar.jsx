import React from "react";
import { MdCircle } from "react-icons/md";

import cvSectionCard from "../../assets/cv-section-card.png";

import { useContext } from "react";
import { PageContext } from "../../App";

import { categories } from "../../utils/data";
import "./sidebar.css";

const Sidebar = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <div className="section__left">
      <img src={cvSectionCard} alt="profile-photo" />
      <div className="section__left_menu">
        <MdCircle className="section__left_menu_icon"/>
        {categories.map((category) => {
          return (
            <a
              key={category.id}
              style={{ color: page === category.id ? "white" : "black" }}
              className="section__left_menu_tag"
              onClick={() => setPage(category.id)}
            >
              {category.name}
            </a>
          );
        })}
        <MdCircle className="section__left_menu_icon"/>
      </div>
    </div>
  );
};

export default Sidebar;
