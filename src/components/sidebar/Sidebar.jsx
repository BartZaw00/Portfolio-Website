import React, { useState } from "react";
import { MdCircle } from "react-icons/md";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import cvSectionCard from "../../assets/cv-section-card.png";

import { useContext } from "react";
import { PageContext } from "../../App";

import { categories } from "../../utils/data";
import "./sidebar.css";

const Menu = ({ category }) => {
  const [page, setPage] = useContext(PageContext);
  return (
    <a
      style={{ color: page === category?.id ? "white" : "black" }}
      className="section__left_menu_tag"
      onClick={() => setPage(category?.id)}
    >
      {category?.name}
    </a>
  );
};

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="section__left">
      <img src={cvSectionCard} alt="profile-photo" />
      <div className="section__left_menu">
        <MdCircle className="section__left_menu_icon" />
        {categories.map((category) => {
          return <Menu key={category.id} category={category} />;
        })}
        <MdCircle className="section__left_menu_icon" />
      </div>
      <div className="section__left_menu-mobile">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={40}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={40}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="section__left_menu-mobile_container scale-up-center">
            {categories.map((category) => {
              return <Menu key={category.id} category={category} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
