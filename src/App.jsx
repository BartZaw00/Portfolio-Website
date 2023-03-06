import { createContext, useEffect, useState } from "react";
import { NavigationBar } from "./components";

import { MainCard, SectionCard } from "./containers";

import "./App.css";

export const PageContext = createContext();

function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <PageContext.Provider value={[page, setPage]}>
      {page ? <SectionCard /> : <MainCard />}
      <NavigationBar />
    </PageContext.Provider>
  );
}

export default App;
