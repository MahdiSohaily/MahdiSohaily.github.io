/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Details from "./Details";
import Tab from "./Tab";
import "./experience.css";

export default function Experience({ jobs }) {
  const [active, setActive] = useState(null);

  const tabs = [];
  const selectedJobs = jobs.length >= 4 ? jobs.slice(0, 5) : jobs;

  const handleActive = (item) => {
    setActive(item);
  };

  for (const item of selectedJobs) {
    tabs[item.id] = (
      <Details
        key={item.id}
        name={item.name}
        content={item.responsibilities}
        fromYear={item.fromYear}
        toYear={item.toYear}
        fromMonth={item.fromMonth}
        toMonth={item.toMonth}
      />
    );
  }

  const display = selectedJobs.map((item) => {
    return (
      <Tab
        key={item.id}
        title={item.name}
        id={item.id}
        handleActive={handleActive}
        active={active}
      />
    );
  });
  return (
    <section id="jobs" className="mini-section">
      <h2 className="number section-heading text-lightest-slate mb-200">
        Where I’ve Worked
      </h2>
      <div className="inner">
        <div className="list">
          <ul className="option-container">{display}</ul>
        </div>
        <div className="content-container">{tabs[active]}</div>
      </div>
    </section>
  );
}
