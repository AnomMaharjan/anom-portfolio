import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: "Tech Solutions Inc.",
      title: "Senior Flutter Developer",
      range: "Jan 2023 - Present",
      duties: [
        "Lead the mobile development team in building a cross-platform fintech application using Flutter, serving over 100k users.",
        "Implemented complex animations and custom UI components to ensure a premium user experience.",
        "Integrated native modules for iOS and Android to handle biometric authentication and secure storage.",
      ],
    },
    {
      company: "Creative Agency",
      title: "Mobile App Developer",
      range: "Mar 2021 - Dec 2022",
      duties: [
        "Developed multiple client applications using Flutter and React Native, delivering projects ahead of schedule.",
        "Collaborated with designers to translate high-fidelity mocks into pixel-perfect code.",
        "Optimized app performance, reducing startup time by 40%.",
      ],
    },
    {
      company: "App Start",
      title: "Junior Developer",
      range: "Jul 2019 - Feb 2021",
      duties: [
        "Assisted in the development of a social media app using React and Redux.",
        "Maintained and updated legacy codebases, fixing critical bugs and improving stability.",
        "Participated in code reviews and learned best practices in software architecture.",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">Where I've Worked</h2>
      <div className="jobs-container">
        <div className="tab-list">
          {jobs.map((job, index) => (
            <button
              key={index}
              className={`tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </button>
          ))}
          <div
            className="tab-highlight"
            style={{ transform: `translateY(${activeTab * 42}px)` }}
          />
        </div>
        <div className="job-content">
          <h3>
            <span>{jobs[activeTab].title}</span>
            <span className="company"> @ {jobs[activeTab].company}</span>
          </h3>
          <p className="range">{jobs[activeTab].range}</p>
          <ul>
            {jobs[activeTab].duties.map((duty, i) => (
              <li key={i}>{duty}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
