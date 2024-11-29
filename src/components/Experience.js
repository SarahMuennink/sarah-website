import React from "react";
import "../components/css/experience.css"

const experiences = [
  {
    title: "Assistant Auditor - Accounts Payable",
    company: "Medina County Auditor's Office",
    location: "Hondo, TX",
    dates: "May 2020 – Present",
    description: [
      "Spearhead the review and auditing of claims against the county, ensuring compliance with statutory requirements and fostering trust through financial accuracy.",
      "Build and sustain collaborative relationships with cross-departmental teams to resolve discrepancies and streamline processes.",
      "Monitor budgets to ensure proper allocation of resources, improving the financial health of county operations.",
      "Designed and implemented systems to track expenses and generate reports, increasing transparency and accountability."
    ],
  },
  {
    title: "Social Media/Digital Coordinator",
    company: "Jack Ingram",
    location: "Austin, TX",
    dates: "October 2019 – Present",
    description: [
      "Develop and execute targeted social media campaigns to enhance artist recognition and audience growth, increasing online engagement by over 30%.",
      "Conduct competitive analysis and leverage data insights to optimize campaigns, achieving measurable success in followership and brand awareness.",
      "Manage website content updates and monitor analytics to evaluate campaign performance and inform strategic decisions."
    ],
  },
  {
    title: "Social Media Coordinator",
    company: "Valdina Ranch & Lodge",
    location: "D'Hanis, TX",
    dates: "February 2022 – January 2024",
    description: [
      "Orchestrated a redesign of the website and digital strategy, increasing traffic and user engagement through compelling storytelling and visuals.",
      "Directed weekly content schedules across platforms, tracking performance metrics to refine audience targeting and maximize reach."
    ],
  },
  {
    title: "Social Media/Promotions Manager",
    company: "The Next Waltz",
    location: "Austin, TX",
    dates: "January 2018 – October 2019",
    description: [
      "Established media relationships, resulting in national coverage in Billboard and Rolling Stone, elevating the brand's profile within the music industry.",
      "Implemented an organizational system for client campaigns, ensuring consistent delivery of marketing initiatives aligned with business goals.",
      "Led promotional strategies for multiple projects, balancing budget constraints with creative execution to meet client expectations."
    ],
  },
];

const Experience = () => {
  return (
    <div className="container">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="section experience-item">
          <h3 className="experience-title">{exp.title}</h3>
          <p className="experience-location">
            {exp.company}, {exp.location}
          </p>
          <p className="experience-dates">{exp.dates}</p>
          <div className="experience-description">
            {exp.description.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
