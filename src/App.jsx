import { createContext, useCallback, useEffect, useState } from "react";
import { NavigationBar } from "./components";

import { MainCard, SectionCard } from "./containers";

import "./App.css";

export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(0);
  
  const handleKeyPress = useCallback(
    (event) => {
      if (event.keyCode === 40 || event.keyCode === 39) {
        if (page === 4) return;
        setPage(page + 1); // down or left arrow key
      }
      if (event.keyCode === 38 || event.keyCode === 37) {
        if (page === 0) return;
        setPage(page - 1); // up or right arrow key
      }
    },
    [page]
  );

  const handleWheel = useCallback(
    (event) => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      if (screenHeight >= 780 && screenWidth <= 2200) {
        if (event.deltaY > 0 && page < 4) setPage(page + 1); // mouse scroll down
        if (event.deltaY < 0 && page > 0) setPage(page - 1); // mouse scroll up
      }
    },
    [page]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleKeyPress, handleWheel]);

  return (
    <PageContext.Provider value={[page, setPage]}>
      {page ? <SectionCard /> : <MainCard />}
      <NavigationBar />
    </PageContext.Provider>
  );
}

export default App;
