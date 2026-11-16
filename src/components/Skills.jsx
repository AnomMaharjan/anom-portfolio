import React from "react";
import { skillCategories } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Skills.css";

const Skills = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="skills"
      ref={ref}
      className={`section skills-section ${isVisible ? "reveal-active" : "reveal-hidden"}`}
    >
      <h2 className="section-title">Technical Skills</h2>
      <p className="skills-subtext-clean">
        A structured breakdown of core languages, frameworks, AI integrations, and tools.
      </p>

      <div className="skills-clean-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-group-clean">
            <h3 className="skill-group-title">{category.title}</h3>
            <div className="skill-tags-cloud">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-pill-clean">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
