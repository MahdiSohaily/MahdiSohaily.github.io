/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import "./style.css";

function App() {
  const [search, setSearch] = useState("mahdisohaily4030");

  const handleSearch = (result) => {
    setSearch(result);
  };

  useEffect(() => {});
  return (
    <>
      <Header search={handleSearch} />
      <Main search={search} />
    </>
  );
}

export default App;
