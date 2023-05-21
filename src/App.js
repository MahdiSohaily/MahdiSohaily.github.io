import Main from './components/Main';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import './style.css';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Main>
    </>
  );
}

export default App;
