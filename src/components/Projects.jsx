import React, { useState } from "react";
import { projects, projectCategories } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ProjectModal from "./ProjectModal";
import {
  Smartphone,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={ref}
      className={`section projects-section ${isVisible ? "reveal-active" : "reveal-hidden"}`}
    >
      <div className="projects-top-clean">
        <div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="projects-subtext-clean">
            Enterprise mobile platforms, AI-powered applications, and offline-first tools.
          </p>
        </div>

        {/* Minimalist Filter Pills */}
        <div className="filter-row-clean" role="tablist">
          {projectCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-pill-clean ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Card Grid */}
      <div className="projects-grid-clean">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-tile-clean"
            onClick={() => setSelectedProject(project)}
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="tile-header">
              <div className="tile-category-row">
                <span className="tile-category">{project.category}</span>
                <div className="tile-platforms">
                  {project.platforms?.map((plat, pIdx) => (
                    <span key={pIdx} className="tile-plat-tag">
                      {plat === "Web" ? <Globe size={11} /> : <Smartphone size={11} />}
                      {plat}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="tile-title">{project.title}</h3>
              <p className="tile-subtitle">{project.subtitle}</p>
            </div>

            <p className="tile-description">{project.description}</p>

            <div className="tile-footer">
              <div className="tile-tech-tags">
                {project.tech.slice(0, 3).map((t, tIdx) => (
                  <span key={tIdx} className="tile-tech">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="tile-tech more">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <span className="tile-view-link">
                <span>Details</span>
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
