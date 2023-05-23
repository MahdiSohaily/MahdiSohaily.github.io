import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import "./style.css";

function App() {
  const [search, setSearch] = useState("mahdisohaily4030");
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  const handleSearch = (result) => {
    setSearch(result);
  };

  useEffect(() => {
    setError(false);
    axios
      .get(`https://bio.torre.co/api/bios/${search}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, [search]);
  return (
    <>
      <Header search={handleSearch} />
      {error ? (
        <section id="hero">
          <h2 className="primary-heading text-lightest-slate text-center">
            The Selected user Not found !!!
          </h2>
        </section>
      ) : (
        <Main user={user} />
      )}
    </>
  );
}

export default App;
