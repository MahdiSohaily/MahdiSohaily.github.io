import { useState, useEffect } from 'react';
import axios from 'axios';
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default function Main({ search }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://bio.torre.co/api/bios/${
          user === '' || !user ? 'oscarfmdev' : user
        }`,
      )
      .then((response) => {
        setBio(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [user]);
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

Main.propTypes = {
  search: PropTypes.string.isRequired,
};
