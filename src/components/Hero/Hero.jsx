/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import './hero.css';

export default function Hero({ person }) {
  return (
    <section id="hero">
      <h1 className="text-green ff-mono">Hi, my name is</h1>
      <h2 className="primary-heading text-lightest-slate">
        {person && person.name}
        .
      </h2>
      <h3 className="primary-heading text-slate">
        I build things for the web.
      </h3>
      <div className="info">
        <p className="text-slate fs-500 mb-300">
          I am a full-stack developer specializing in TypeScript, React, Redux,
          and Node.js. I enjoy coding and building apps that make life easy.
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
  );
}

// Hero.propTypes = {
//   person: PropTypes.string.isRequired,
// };
