import React from "react";
import "../App.css";

const whatIDo = [
  {
    icon: "💻",
    title: "Accounts Payable and Financial Operations",
    points: [
      "Efficient Claims Auditing: Review and process county claims to ensure compliance with governmental statutes, facilitating accurate and timely payments.",
      "Budget Management: Monitor departmental budgets to verify fund availability for accounts payable transactions, preventing overspending.",
      "Cross-Functional Collaboration: Partner with internal teams to clarify and resolve discrepancies, improving overall accuracy and transparency in financial operations.",
    ],
  },
  {
    title: "Social Media and Digital Marketing",
    points: [
      "Strategic Social Media Management: Develop and execute impactful social media campaigns to enhance brand recognition and audience engagement across platforms.",
      "Analytics-Driven Insights: Leverage data from website and social media performance metrics to refine marketing strategies and boost ROI.",
      "Creative Content Creation: Design cohesive and visually appealing websites and promotional materials that align with brand identity, driving increased user interaction.",
    ],
  },
  {
    title: "Project and Promotions Management",
    points: [
      "High-Impact Media Outreach: Built relationships with major media outlets, securing coverage in prominent publications such as Billboard and Rolling Stone to amplify brand visibility.",
      "Campaign Planning and Execution: Led the planning, prioritization, and execution of promotional campaigns, ensuring deadlines and budgets were consistently met.",
      "Systematized Workflow Optimization: Designed and implemented streamlined systems for managing client data and scheduling campaigns, increasing efficiency.",
    ],
  },
  {
    title: "Skills and Tools",
    points: [
      "Digital Marketing Platforms: Google Ads, Facebook Ad Manager, Squarespace",
      "Financial Software: QuickBooks, Incode Financials, Microsoft Suite",
      "Social Media Platforms: Facebook, Instagram, Twitter, Snapchat",
      "Web Design & Analytics: Website hosting and performance tracking, Canva",
    ],
  },
];

const WhatIDo = () => {
  return (
    <div className="container">
      <h2>What I Do</h2>
      {whatIDo.map((section, index) => (
        <div key={index} className="section what-i-do-item">
          <h3 className="what-i-do-title">{section.title}</h3>
          <ul className="what-i-do-list">
            {section.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WhatIDo;
