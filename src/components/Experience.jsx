import React, { useState } from "react";
import { experiences } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  Calendar,
  MapPin,
  ChevronRight,
} from "lucide-react";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  const currentJob = experiences[activeTab] || experiences[0];

  return (
    <section
      id="experience"
      ref={ref}
      className={`section experience-section ${isVisible ? "reveal-active" : "reveal-hidden"}`}
    >
      <h2 className="section-title">Where I've Worked</h2>

      <div className="jobs-container-clean">
        {/* Clean Pill/Tab Selector */}
        <div className="tab-pills-row" role="tablist">
          {experiences.map((job, index) => (
            <button
              key={job.id}
              role="tab"
              aria-selected={activeTab === index}
              className={`tab-clean-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Selected Experience Card */}
        <div className="job-card-clean" key={currentJob.id}>
          <div className="job-card-top">
            <div className="job-title-group">
              <h3 className="job-role-clean">
                {currentJob.role}{" "}
                <span className="job-company-clean">@ {currentJob.company}</span>
              </h3>
              <div className="job-meta-clean">
                <span className="meta-clean-item">
                  <Calendar size={13} />
                  {currentJob.period}
                </span>
                <span className="meta-dot">•</span>
                <span className="meta-clean-item">
                  <MapPin size={13} />
                  {currentJob.location}
                </span>
              </div>
            </div>

            {currentJob.tagline && (
              <span className="job-tagline-clean">{currentJob.tagline}</span>
            )}
          </div>

          <ul className="job-duties-clean">
            {currentJob.duties.map((duty, idx) => (
              <li key={idx} className="duty-clean-item">
                <ChevronRight size={15} className="duty-clean-icon" />
                <span>{duty}</span>
              </li>
            ))}
          </ul>

          <div className="job-tech-row">
            <span className="tech-row-label">Stack:</span>
            <div className="tech-tags-clean">
              {currentJob.tech.map((t, i) => (
                <span key={i} className="tech-tag-clean">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
