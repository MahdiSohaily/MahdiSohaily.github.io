export default function Experience() {
  return (
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
            <p className="text-light-slate ff-mono fs-xs">May 2018 - Present</p>
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
                  Provide leadership within engineering department through close
                  collaboration, knowledge shares, and mentorship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}