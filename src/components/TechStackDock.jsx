import React from "react";
import { skillCategories } from "../data/portfolioData";
import {
  Smartphone,
  Sparkles,
  Database,
  CreditCard,
  Rocket,
  Layers,
} from "lucide-react";
import "./TechStackDock.css";

const iconMap = {
  Smartphone: Smartphone,
  Sparkles: Sparkles,
  Database: Database,
  CreditCard: CreditCard,
  Rocket: Rocket,
};

const TechStackDock = () => {
  return (
    <section id="tech-stack" className="tech-stack-section">
      <div className="section-eyebrow-row">
        <div className="eyebrow-badge">
          <Layers size={13} className="text-cyan" />
          <span>TOOLING & ECOSYSTEM</span>
        </div>
        <h2 className="section-main-heading">Skills & Architecture Matrix</h2>
        <p className="section-subtext">
          Zero bloat. Strictly battle-tested mobile, state management, backend, and AI integration technologies.
        </p>
      </div>

      <div className="tech-dock-grid">
        {skillCategories.map((cat, idx) => {
          const Icon = iconMap[cat.icon] || Smartphone;

          return (
            <div key={idx} className="tech-dock-card">
              <div className="dock-card-header">
                <div
                  className="dock-icon-box"
                  style={{ color: cat.color, background: `${cat.color}15` }}
                >
                  <Icon size={18} />
                </div>
                <h3 className="dock-card-title">{cat.title}</h3>
              </div>

              <div className="dock-skills-cloud">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="dock-skill-pill">
                    <span className="skill-dot"></span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStackDock;
