import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import "./style.css";

function App() {
  const [search, setSearch] = useState("mahdisohaily4030");
  const [user, setUser] = useState(null);

  const handleSearch = (result) => {
    setSearch(result);
  };

  useEffect(() => {
    axios
      .get(`https://bio.torre.co/api/bios/${search}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);
  return (
    <>
      <Header search={handleSearch} />
      {user ? <Main user={user} /> : <p>Loading</p>}
    </>
  );
}

export default App;
