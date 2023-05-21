import './experience.css';

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
          
        </div>
      </div>
    </section>
  );
}
