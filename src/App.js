import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="nav main_nav">
          <div className="logo fade-enter-done" tabIndex="-1">
            <a href="/" aria-label="home">
              <svg
                fill="#64ffda"
                width="59px"
                height="59px"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M128 209c-44.735 0-81-36.265-81-81s36.265-81 81-81 81 36.265 81 81-36.265 81-81 81zm22.53-141.14A64.379 64.379 0 0 0 128.5 64a64.352 64.352 0 0 0-22.917 4.19 1317.969 1317.969 0 0 0 21.079 22.104c.77.79 2.042.806 2.831.038 0 0 12.798-12.235 21.038-22.472zm0 121.635c-8.239-10.237-21.05-22.665-21.05-22.665a1.975 1.975 0 0 0-2.806.041s-10.22 10.605-21.09 22.294a64.352 64.352 0 0 0 22.916 4.19 64.379 64.379 0 0 0 22.03-3.86zM89.908 76.531s-26.02 17.694-26.02 51.538c0 33.845 26.02 53.465 26.02 53.465l38.09-39.787 38.376 38.29s27.389-21.385 27.389-52.066c0-30.682-27.739-51.678-27.739-51.678l-25.672 26.32 13.39 13.837 13.112-11.68s6.936 10.757 7.035 23.153c.098 12.396-6.653 24.904-6.653 24.904l-39.191-38.937-37.495 38.69s-7.684-11.61-7.65-25.002c.035-13.393 7.008-24.966 7.008-24.966l12.75 12.488 14.996-12.609-27.746-25.96z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="desktop_nav">
            <ol>
              <li className="fadedown-enter-done">
                <a className="text-light-slate" href="/#about">
                  About
                </a>
              </li>
              <li className="fadedown-enter-done">
                <a className="text-light-slate" href="/#jobs">
                  Experience
                </a>
              </li>
              <li className="fadedown-enter-done">
                <a className="text-light-slate" href="/#projects">
                  Work
                </a>
              </li>
              <li className="fadedown-enter-done">
                <a className="text-light-slate" href="/#contact">
                  Contact
                </a>
              </li>
            </ol>
            <div>
              <a
                className="resume"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="mobile_nav">
            <div>
              <button type="button" id="side_nav" className="menu_icon">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <g id="Menu / Menu_Alt_02">
                      <path
                        id="Vector"
                        d="M11 17H19M5 12H19M11 7H19"
                        stroke="#64ffda"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                </svg>
              </button>
              <aside id="mobile_sidebar">
                <button type="button" id="close" className="menu_icon">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#64ffda"
                      d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                    />
                  </svg>
                </button>
                <nav>
                  <ol className="mb-300">
                    <li>
                      <a className="text-light-slate" href="/#about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="text-light-slate" href="/#jobs">
                        Experience
                      </a>
                    </li>
                    <li>
                      <a className="text-light-slate" href="/#projects">
                        Work
                      </a>
                    </li>
                    <li>
                      <a className="text-light-slate" href="/#contact">
                        Contact
                      </a>
                    </li>
                  </ol>
                  <div className="align-center">
                    <a
                      className="resume wide"
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </a>
                  </div>
                </nav>
              </aside>
            </div>
          </div>
        </nav>
      </header>
      <div className="contact-container">
        <div className="contact-info left">
          <ul className="social-icon-menu">
            <li>
              <a
                href="https://github.com/bchiang7"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bchiang7"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <title>Instagram</title>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/bchiang7"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter"
                >
                  <title>Twitter</title>
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bchiang7"
                aria-label="Linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <title>LinkedIn</title>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/bchiang7"
                aria-label="Codepen"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-codepen"
                >
                  <title>CodePen</title>
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  <line x1="12" y1="22" x2="12" y2="15.5" />
                  <polyline points="22 8.5 12 15.5 2 8.5" />
                  <polyline points="2 15.5 12 8.5 22 15.5" />
                  <line x1="12" y1="2" x2="12" y2="8.5" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-info right">
          <div className="email">
            <a
              className="text-light-slate"
              href="mailto:mahdi.sohaily4030@gmail.com"
            >
              mahdi.sohaily4030@gmail.com
            </a>
          </div>
        </div>
      </div>
      <main>
        <section id="hero">
          <h1 className="text-green ff-mono">Hi, my name is</h1>
          <h2 className="primary-heading text-lightest-slate">Mahdi Rezaei.</h2>
          <h3 className="primary-heading text-slate">
            I build things for the web.
          </h3>
          <div className="info">
            <p className="text-slate fs-500 mb-300">
              I am a full-stack developer specializing in TypeScript, React,
              Redux, and Node.js. I enjoy coding and building apps that make
              life easy.
              <a
                className="text-green"
                href="https://upstatement.com/"
                target="_blank"
                rel="noreferrer"
              >
                Upstatement
              </a>
              .
            </p>
          </div>
        </section>
        <section id="about">
          <h2 className="number section-heading text-lightest-slate mb-200">
            About Me
          </h2>
          <div className="inner">
            <div className="bio">
              <div>
                <p className="text-slate fs-500">
                  Hi! My name is Mahdi Rezaei, and I&#x27;m a full-stack
                  software developer.\n\nI specialize in using TypeScript,
                  React, Redux, and Laravel to build software solutions for
                  small businesses.\n\nI have worked as a software developer for
                  one year in the Ministry of Energy and Water. There I have
                  been working with other groups of software developers in a
                  stressful, fast-paced environment, so I have already learned
                  how to manage stressful situations, remain calm, work
                  collaboratively and behave professionally in a group.\n\nI am
                  currently completing the Microverse Boot Camp, a remote
                  software development Bootcamp that allows programmers to plan
                  and build projects together.\n\n\nIn my free time, I love
                  spending time with my family and friends &amp; reading books.
                  I love running, and video games!\n\nFront-End: JavaScript,
                  TypeScript, React.js, Redux, Vue.js, Next.js.\nBack-End:
                  Laravel, Spring Boot.\nDatabases: MongoDB, MySQL.\nTools and
                  Methods: Git, GitHub, Netlify, Webpack, TDD, RSpec.\n\nLooking
                  for a developer? Let&#x27;s schedule a zoom call! You can send
                  me an e-mail at mahdi.sohaily4030@gmail.com, or check out my
                  profile at https://github.com/MahdiSohaily.
                </p>

                <p className="text-slate fs-500s">
                  Here are a few technologies I’ve been working with recently:
                </p>
              </div>
              <ul className="skills-list text-slate fs-500s">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Eleventy</li>
                <li>Node.js</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div className="profile">
              <img
                src="https://res.cloudinary.com/torre-technologies-co/image/upload/v1683013939/origin/starrgate/users/profile_432934781b38b796e1e3f21087f377752cdba2c0.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section id="jobs" className="mini-section">
          <h2 className="number section-heading text-lightest-slate mb-200">
            Where I’ve Worked
          </h2>
          <div className="inner">
            <div className="list">
              <ul className="option-container">
                <li className="active">
                  <a
                    href="#tab1"
                    className="text-slate ff-mono fs-xs pointer tab-option"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#tab2"
                    className="text-slate ff-mono fs-xs pointer tab-option"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#tab3"
                    className="text-slate ff-mono fs-xs pointer tab-option"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#tab4"
                    className="text-slate ff-mono fs-xs pointer tab-option"
                  >
                    What’s App
                  </a>
                </li>
              </ul>
            </div>
            <div className="content-container">
              <div
                id="panel-0"
                role="tabpanel"
                tabIndex="0"
                aria-labelledby="tab-0"
                aria-hidden="false"
                className="jobs__StyledTabPanel-sc-59sdss-5 QgHxr fade-enter-done"
              >
                <h3>
                  <span>Lead Engineer</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a
                      href="https://www.upstatement.com/"
                      className="inline-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Upstatement
                    </a>
                  </span>
                </h3>
                <p className="text-light-slate ff-mono fs-xs">
                  May 2018 - Present
                </p>
                <div>
                  <ul>
                    <li className="text-slate fs-xl">
                      Deliver high-quality, robust production code for a diverse
                      array of projects for clients including Harvard Business
                      School, Everytown for Gun Safety, Pratt Institute, Koala
                      Health, Vanderbilt University, The 19th News, and more
                    </li>
                    <li className="text-slate fs-xl">
                      Work alongside creative directors to lead the research,
                      development, and architecture of technical solutions to
                      fulfill business requirements
                    </li>
                    <li className="text-slate fs-xl">
                      Collaborate with designers, project managers, and other
                      engineers to transform creative concepts into production
                      realities for clients and stakeholders
                    </li>
                    <li className="text-slate fs-xl">
                      Provide leadership within engineering department through
                      close collaboration, knowledge shares, and mentorship
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <h2 className="number section-heading text-lightest-slate mb-200">
            Other Noteworthy Projects
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="card-heading mb-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="folder-icon feather feather-folder"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <div className="card-body">
                <h3 className="project-title">
                  Integrating Algolia Search with WordPress Multisite
                </h3>
                <div className="project-description">
                  <p className="text-light-slate fs-md">
                    Building a custom multisite compatible WordPress plugin to
                    build global search with Algolia
                  </p>
                </div>
              </div>
              <footer>
                <ul className="project-tech-list">
                  <li>Algolia</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                </ul>
              </footer>
            </div>
            <div className="project-card">
              <div className="card-heading mb-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="folder-icon"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <div className="card-body">
                <h3 className="project-title">
                  Integrating Algolia Search with WordPress Multisite
                </h3>
                <div className="project-description">
                  <p className="text-light-slate fs-md">
                    Building a custom multisite compatible WordPress plugin to
                    build global search with Algolia
                  </p>
                </div>
              </div>
              <footer>
                <ul className="project-tech-list">
                  <li>Algolia</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                </ul>
              </footer>
            </div>
            <div className="project-card">
              <div className="card-heading mb-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="folder-icon"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <div className="card-body">
                <h3 className="project-title">
                  Integrating Algolia Search with WordPress Multisite
                </h3>
                <div className="project-description">
                  <p className="text-light-slate fs-md">
                    Building a custom multisite compatible WordPress plugin to
                    build global search with Algolia
                  </p>
                </div>
              </div>
              <footer>
                <ul className="project-tech-list">
                  <li>Algolia</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                </ul>
              </footer>
            </div>
            <div className="project-card">
              <div className="card-heading mb-200">
                <svg
                  className="folder-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <div className="card-body">
                <h3 className="project-title">
                  Integrating Algolia Search with WordPress Multisite
                </h3>
                <div className="project-description">
                  <p className="text-light-slate fs-md">
                    Building a custom multisite compatible WordPress plugin to
                    build global search with Algolia
                  </p>
                </div>
              </div>
              <footer>
                <ul className="project-tech-list">
                  <li>Algolia</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                </ul>
              </footer>
            </div>
            <div className="project-card">
              <div className="card-heading mb-200">
                <svg
                  className="folder-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <div className="card-body">
                <h3 className="project-title">
                  Integrating Algolia Search with WordPress Multisite
                </h3>
                <div className="project-description">
                  <p className="text-light-slate fs-md">
                    Building a custom multisite compatible WordPress plugin to
                    build global search with Algolia
                  </p>
                </div>
              </div>
              <footer>
                <ul className="project-tech-list">
                  <li>Algolia</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                </ul>
              </footer>
            </div>
            <div className="project-card">
              <div className="card-heading mb-200">
                <svg
                  className="folder-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <div className="card-body">
                <h3 className="project-title">
                  Integrating Algolia Search with WordPress Multisite
                </h3>
                <div className="project-description">
                  <p className="text-light-slate fs-md">
                    Building a custom multisite compatible WordPress plugin to
                    build global search with Algolia
                  </p>
                </div>
              </div>
              <footer>
                <ul className="project-tech-list">
                  <li>Algolia</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                </ul>
              </footer>
            </div>
          </div>
        </section>
        <section id="contact" className="mini-section">
          <h2 className="number contact-heading text-green fs-500 ff-mono align text-center mb-200">
            Contact
          </h2>
          <h2 className="heading-secondary">Lets’s Get In Touch</h2>
          <p className="text-light-slate text-center mb-300">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <a
            className="resume"
            href="mailto:brittany.chiang@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Say Hello
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
