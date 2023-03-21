import React, { useEffect, useState } from "react";
import { MdCircle } from "react-icons/md";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import cvSectionCard from "../../assets/cv-section-card.png";

import { useContext } from "react";
import { PageContext } from "../../App";

import { categories } from "../../utils/data";
import "./sidebar.css";
import { Link } from "react-scroll";

const Menu = ({ category, offset, setToggleMenu }) => {
  const [page, setPage] = useContext(PageContext);

  const handleClick = () => {
    setToggleMenu(false);
    setPage(category?.id);
  };

  return (
    <>
      {window.innerWidth <= 768 ? (
        <Link
          style={{ color: page === category?.id ? "white" : "black" }}
          className="c-sidebar__menu-tag"
          to={category.name}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          offset={offset}
          onClick={handleClick}
        >
          {category?.name}
        </Link>
      ) : (
        <a
          href={`#${category.name}`}
          style={{ color: page === category?.id ? "white" : "black" }}
          className="c-sidebar__menu-tag"
        >
          {category?.name}
        </a>
      )}
    </>
  );
};

const Sidebar = ({ offset }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="c-sidebar">
      <img
        className="c-sidebar__profile-photo"
        src={cvSectionCard}
        alt="profile-photo"
      />
      <div className="c-sidebar__menu">
        <MdCircle className="c-sidebar__icon" />
        {categories.map((category) => {
          return <Menu key={category.id} category={category} />;
        })}
        <MdCircle className="c-sidebar__icon" />
      </div>
      <div className="c-sidebar__menu-mobile">
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
          <div className="c-sidebar__mobile-container scale-up-center">
            {categories.map((category) => {
              return (
                <Menu
                  key={category.id}
                  category={category}
                  offset={offset}
                  setToggleMenu={setToggleMenu}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
