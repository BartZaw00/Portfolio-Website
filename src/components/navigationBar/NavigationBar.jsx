import React, { useContext } from "react";

import { BsFillPersonFill } from "react-icons/bs";
import { MdWork, MdDesignServices, MdContactPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { PageContext } from "../../App";

import "./navigationBar.css";

const NavigationBar = () => {
  const [page, setPage] = useContext(PageContext)

  return (
    <div className="main__right_navigation-bar">
      <FaHome
        color={page === 0 ? "white" : "black"}
        cursor="pointer"
        onClick={() => setPage(0)}
      />
      <BsFillPersonFill
        color={page === 1 ? "white" : "black"}
        cursor="pointer"
        onClick={() => setPage(1)}
      />
      <MdWork
        color={page === 2 ? "white" : "black"}
        cursor="pointer"
        onClick={() => setPage(2)}
      />
      <MdDesignServices
        color={page === 3 ? "white" : "black"}
        cursor="pointer"
        onClick={() => setPage(3)}
      />
      <MdContactPhone
        color={page === 4 ? "white" : "black"}
        cursor="pointer"
        onClick={() => setPage(4)}
      />
    </div>
  );
};

export default NavigationBar;
