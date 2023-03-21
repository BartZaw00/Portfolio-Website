import { createContext, useCallback, useEffect, useState } from "react";
import { NavigationBar } from "./components";

import { MainCard, SectionCard } from "./containers";



import "./App.css";

import { categories } from "./utils/data";

export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(0);

  return (
    <PageContext.Provider value={[page, setPage]}>
      <MainCard />
      <SectionCard />
      <NavigationBar />
    </PageContext.Provider>
  );
}

export default App;

// const handleKeyPress = useCallback(
//   (event) => {
//     const screenHeight = window.innerHeight;
//     if (screenHeight >= 780) {
//       if (event.keyCode === 40) {
//         if (page === 4) return;
//         setPage(page + 1); // down arrow key
//       }

//       if (event.keyCode === 38) {
//         if (page === 0) return;
//         setPage(page - 1); // up arrow key
//       }
//     }

//     if (event.keyCode === 39) {
//       if (page === 4) return;
//       setPage(page + 1); // left arrow key
//     }
//     if (event.keyCode === 37) {
//       if (page === 0) return;
//       setPage(page - 1); // right arrow key
//     }
//   },
//   [page]
// );

// const handleWheel = useCallback(
//   (event) => {
//     const screenHeight = window.innerHeight;
//     const screenWidth = window.innerWidth;
//     if (screenHeight >= 780 && screenWidth <= 2200 && screenWidth >= 768) {
//       if (event.deltaY > 0 && page < 4) setPage(page + 1); // mouse scroll down
//       if (event.deltaY < 0 && page > 0) setPage(page - 1); // mouse scroll up
//     }
//   },
//   [page]
// );

// useEffect(() => {
//   window.addEventListener("keydown", handleKeyPress);
//   // window.addEventListener("wheel", handleWheel);
//   return () => {
//     window.removeEventListener("keydown", handleKeyPress);
//     // window.removeEventListener("wheel", handleWheel);
//   };
// }, [handleKeyPress, handleWheel]);
