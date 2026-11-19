import React, { useState } from "react";
import { experiences } from "../data/portfolioData";
import {
  GitCommit,
  GitBranch,
  Calendar,
  MapPin,
  Sparkles,
  ChevronRight,
  Terminal,
} from "lucide-react";
import "./CareerChangelog.css";

const CareerChangelog = () => {
  const [expandedId, setExpandedId] = useState(experiences[0]?.id || "xelwel");

  return (
    <section id="career-changelog" className="career-changelog-section">
      <div className="section-eyebrow-row">
        <div className="eyebrow-badge">
          <GitBranch size={13} className="text-cyan" />
          <span>PRODUCTION CHANGELOG</span>
        </div>
        <h2 className="section-main-heading">Engineering Career History</h2>
        <p className="section-subtext">
          Changelog of roles, milestones, and architectural migrations across enterprise, fintech, and AI systems.
        </p>
      </div>

      <div className="changelog-timeline">
        {experiences.map((job) => {
          const isExpanded = expandedId === job.id;
          const fakeHash = job.id.split("").reduce((acc, char) => (acc + char.charCodeAt(0)).toString(16), "c8a").slice(0, 7);

          return (
            <div
              key={job.id}
              className={`changelog-item ${isExpanded ? "expanded" : ""}`}
            >
              <div className="changelog-line-node">
                <div className="commit-dot">
                  <GitCommit size={14} />
                </div>
              </div>

              <div
                className="changelog-card"
                onClick={() => setExpandedId(job.id)}
              >
                <div className="changelog-header">
                  <div className="changelog-version-row">
                    <span className="release-tag">
                      release-{job.period.split("–")[0].trim().replace(/\s+/g, ".").toLowerCase()}
                    </span>
                    <span className="commit-hash">commit {fakeHash}</span>
                    <span className="job-location-badge">
                      <MapPin size={11} /> {job.location}
                    </span>
                  </div>

                  <h3 className="job-title-line">
                    <span className="role-title">{job.role}</span>
                    <span className="company-at"> @ {job.company}</span>
                  </h3>

                  <div className="job-tagline-text">{job.tagline}</div>
                </div>

                <div className="changelog-body">
                  <ul className="changelog-bullets">
                    {job.duties.map((duty, dIdx) => (
                      <li key={dIdx} className="changelog-bullet-item">
                        <span className="bullet-plus">+</span>
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="changelog-stack-footer">
                    <span className="stack-footer-label">Deployed Stack:</span>
                    <div className="changelog-pills">
                      {job.tech.map((t, tIdx) => (
                        <span key={tIdx} className="changelog-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CareerChangelog;
