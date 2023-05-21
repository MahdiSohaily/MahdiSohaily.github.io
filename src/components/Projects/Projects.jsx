import PropTypes from 'prop-types';
import Card from './Card';
import './projects.css';

export default function Projects({ data }) {
  const projects = data.length >= 6 ? data.slice(0, 7) : data;
  const display = projects.map((item) => (
    <Card
      key={item.id}
      name={item.name}
      content={item.additionalInfo}
      toYear={item.toYear}
      toMonth={item.toMonth}
    />
  ));
  return (
    <section id="projects">
      <h2 className="number section-heading text-lightest-slate mb-200">
        My recent Projects
      </h2>
      <div className="projects-grid">{display}</div>
    </section>
  );
}

Projects.propTypes = {
  data: PropTypes.objectOf(Object).isRequired,
};
