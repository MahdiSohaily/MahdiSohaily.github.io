import Details from './Details';
import Tab from './Tab';
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
            <Tab />
            <Tab />
            <Tab />
            <Tab />
            <Tab />
          </ul>
        </div>
        <div className="content-container">
          <Details />
        </div>
      </div>
    </section>
  );
}
