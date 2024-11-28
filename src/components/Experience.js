import React from "react";

function Experience() {
  return (
    <section id="experience" className="section slide-in-right">
      <div className="container">
        <h3 className="section-title">Experience</h3>
        <div className="experience-item">
          <h4>Medina County Auditor's Office - Assistant Auditor</h4>
          <p>May 2020 - Present</p>
          <ul>
            <li>Review and audit claims against the county to ensure compliance with governmental statute.</li>
            <li>Collaborate with departments to ensure accuracy on invoices and payments.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h4>Jack Ingram - Social Media/Digital Coordinator</h4>
          <p>October 2019 - Present</p>
          <ul>
            <li>Plan and implement weekly social media posts to bolster artist recognition.</li>
            <li>Conduct industry research to advise future campaigns.</li>
          </ul>
        </div>
        {/* Add other roles here in a similar format */}
      </div>
    </section>
  );
}

export default Experience;
