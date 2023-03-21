import React, { useContext } from "react";

import { BsFillPersonFill } from "react-icons/bs";
import { MdWork, MdDesignServices, MdContactPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { PageContext } from "../../App";

import "./navigationBar.css";
import { Link } from "react-scroll";

const NavigationBar = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <div className="c-navigation-bar">
      <Link
        to="HOME"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        onClick={() => setPage(0)}
      >
        <FaHome color={page === 0 ? "white" : "black"} cursor="pointer" />
      </Link>
      <Link
        to="ABOUT ME"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        onClick={() => setPage(1)}
      >
        <BsFillPersonFill
          color={page === 1 ? "white" : "black"}
          cursor="pointer"
        />
      </Link>
      <Link
        to="RESUME"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        onClick={() => setPage(2)}
      >
        <MdWork color={page === 2 ? "white" : "black"} cursor="pointer" />
      </Link>
      <Link
        to="PORTFOLIO"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        onClick={() => setPage(3)}
      >
        <MdDesignServices
          color={page === 3 ? "white" : "black"}
          cursor="pointer"
        />
      </Link>
      <Link
        to="CONTACT"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        onClick={() => setPage(4)}
      >
        <MdContactPhone
          color={page === 4 ? "white" : "black"}
          cursor="pointer"
        />
      </Link>
    </div>
  );
};

export default NavigationBar;
