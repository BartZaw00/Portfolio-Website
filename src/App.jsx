import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork, MdDesignServices, MdContactPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { MainCard, SectionCard } from "./containers";

import "./App.css";

function App() {
  return (
    <>
      <SectionCard />
      <div className="main__right_navigation-bar">
        <FaHome color="white" />
        <BsFillPersonFill />
        <MdWork />
        <MdDesignServices />
        <MdContactPhone />
      </div>
    </>
  );
}

export default App;
