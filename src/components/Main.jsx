import Hero from "./Hero/Hero";
import Social from "./Social/SocialAccounts";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function Main({ user }) {
  return (
    <main>
      {user && (
        <>
          <Hero person={user.person} />
          <Social publicId={user.person.publicId} links={user.person.links} />
          <About person={user.person} strengths={user.strengths} />
          <Experience jobs={user.jobs} />
          <Projects data={user.projects} />
          <Contact />
        </>
      )}
    </main>
  );
}
