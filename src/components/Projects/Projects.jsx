import Card from './Card';
import './projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="number section-heading text-lightest-slate mb-200">
        My recent Projects
      </h2>
      <div className="projects-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
