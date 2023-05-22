/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import "./style.css";

function App() {
  // eslint-disable-next-line quotes
  const [search, setSearch] = useState("mahdisohaily4030");
  const [user, setUser] = useState(null);

  const handleSearch = (result) => {
    setSearch(result);
  };

  useEffect(() => {
    axios
      .get(`https://bio.torre.co/api/bios/${search}`,{
        headers: {"Access-Control-Allow-Origin": "*"}
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => { console.log(error); });
  }, [search]);
  return (
    <>
      <Header search={handleSearch} />
      {user? <Main user={user} /> : <p>Loading</p>}
    </>
  );
}

export default App;
