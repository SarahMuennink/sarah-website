import React from "react";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className={`content ${inView ? "slide-in" : ""}`} ref={ref}>
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <img src="/images/javascript-logo.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src="/images/react-logo.png" alt="React" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <img src="/images/salesforce-logo.png" alt="Salesforce" />
          <p>Salesforce</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
