import Main from './components/Main';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './templates/root.css';
import './templates/reset.css';
import './templates/utility.css';
import './style.css';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <About />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Main>
    </>
  );
}

export default App;
