import { createContext, useEffect, useState } from "react";
import { NavigationBar } from "./components";

import { MainCard, SectionCard } from "./containers";

import "./App.css";

export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const sidebar = document.querySelector(".c-sidebar");
      const height = sidebar.getBoundingClientRect().height;
      if (window.innerWidth < 768) setOffset(-height);
      else setOffset(0);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <PageContext.Provider value={[page, setPage]}>
      <MainCard offset={offset}/>
      <SectionCard offset={offset}/>
      <NavigationBar />
    </PageContext.Provider>
  );
}

export default App;
