import React, { useContext } from "react";

import { BsFillPersonFill } from "react-icons/bs";
import { MdWork, MdDesignServices, MdContactPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { PageContext } from "../../App";

import "./navigationBar.css";

const NavigationBar = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <div className="c-navigation-bar">
      <a href="#home">
        <FaHome color={page === 0 ? "white" : "black"} cursor="pointer" />
      </a>
      <a href="#about">
        <BsFillPersonFill
          color={page === 1 ? "white" : "black"}
          cursor="pointer"
        />
      </a>
      <a href="#resume">
        <MdWork color={page === 2 ? "white" : "black"} cursor="pointer" />
      </a>
      <a href="#portfolio">
        <MdDesignServices
          color={page === 3 ? "white" : "black"}
          cursor="pointer"
        />
      </a>
      <a href="#contact">
        <MdContactPhone
          color={page === 4 ? "white" : "black"}
          cursor="pointer"
        />
      </a>
    </div>
  );
};

export default NavigationBar;
