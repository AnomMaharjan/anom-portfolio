import React, { useState } from "react";
import { projects, projectCategories } from "../data/portfolioData";
import {
  Smartphone,
  Globe,
  ArrowUpRight,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import "./ProjectsBento.css";

const ProjectsBento = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects-bento" className="projects-bento-section">
      <div className="section-eyebrow-row">
        <div className="eyebrow-badge">
          <Smartphone size={13} className="text-cyan" />
          <span>PRODUCTION APPLICATIONS</span>
        </div>
        <h2 className="section-main-heading">Shipped Systems & Apps</h2>
        <p className="section-subtext">
          Engineered for scale: fashion commerce with local payments, AI translation tools, and offline-first government solutions.
        </p>

        {/* Category Filters */}
        <div className="bento-filter-row">
          {projectCategories.map((cat, idx) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={idx}
                className={`bento-filter-chip ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{cat}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bento-apps-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="app-module-card"
            onClick={() => onSelectProject(project)}
            style={{
              "--accent-color": project.accentColor || "#38bdf8",
            }}
          >
            <div className="app-module-top">
              <div className="app-cat-badge">{project.category}</div>

              <div className="app-platforms-list">
                {project.platforms?.map((plat, pIdx) => (
                  <span key={pIdx} className="app-plat-pill">
                    {plat === "Web" ? <Globe size={11} /> : <Smartphone size={11} />}
                    {plat}
                  </span>
                ))}
              </div>
            </div>

            <div className="app-identity-group">
              <h3 className="app-title">{project.title}</h3>
              <span className="app-subtitle">{project.subtitle}</span>
            </div>

            <p className="app-description">{project.description}</p>

            <div className="app-module-footer">
              <div className="app-tech-tags">
                {project.tech.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="app-tech-pill">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="app-tech-pill more">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <span className="app-inspect-btn">
                <span>Inspect</span>
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsBento;
