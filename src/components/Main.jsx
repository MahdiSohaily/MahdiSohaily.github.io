import Hero from "./Hero/Hero";
import Social from "./Social/SocialAccounts";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function Main({ user }) {
  const { person, strengths, jobs, projects } = user;
  const { publicId, links } = person;
  return (
    <main>
      <Hero person={person} />
      <Social publicId={publicId} links={links} />
      <About person={person} strengths={strengths} />
      <Experience jobs={jobs} />
      <Projects data={projects} />
      <Contact />
    </main>
  );
}
