/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';

export default function About({ person, strengths }) {
  const level = ['master'];
  const skills = strengths.map((item) => {
    if (level.includes(item.proficiency)) {
      return item.name;
    }
    return false;
  });

  const display = skills && skills.map((skill, index) => <li key={index}>{skill}</li>);

  return (
    <section id="about">
      <h2 className="number section-heading text-lightest-slate mb-200">
        About Me
      </h2>
      <div className="inner">
        <div className="bio">
          <div>
            <p className="text-slate fs-500">{person.summaryOfBio}</p>

            <p className="text-slate fs-500s">
              Here are a few technologies I’ve been working with recently:
            </p>
          </div>
          <ul className="skills-list text-slate fs-500s">{display}</ul>
        </div>
        <div className="profile">
          <img src={person.picture} alt={person.name} />
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  person: PropTypes.objectOf(Object).isRequired,
  strengths: PropTypes.objectOf(Object).isRequired,
};
