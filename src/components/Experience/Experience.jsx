/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Details from "./Details";
import Tab from "./Tab";
import "./experience.css";

export default function Experience({ jobs }) {
  const [active, setActive] = useState(null);
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
          </ul>
        </div>
        <div className="content-container">
          <Details />
        </div>
      </div>
    </section>
  );
}
