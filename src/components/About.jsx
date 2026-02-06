import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    "Flutter",
    "Dart",
    "React",
    "JavaScript (ES6+)",
    "Firebase",
    "Node.js",
    "TypeScript",
    "GraphQL",
  ];

  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! My name is Anom and I enjoy creating things that live on the
            internet and mobile devices. My interest in mobile development
            started back in 2018 when I decided to try creating a custom theme
            for my phone — turns out hacking together a custom app taught me a
            lot about <strong>Flutter & Dart</strong>.
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an{" "}
            <a href="#">advertising agency</a>, a <a href="#">start-up</a>, and
            a <a href="#">student-led design studio</a>. My main focus these
            days is building accessible, inclusive products and digital
            experiences for a variety of clients.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="about-img sticky-wrapper">
          <div className="img-container">
            <div className="img-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
