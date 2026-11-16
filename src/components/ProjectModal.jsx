import React, { useEffect } from "react";
import {
  X,
  Smartphone,
  Globe,
  Layers,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-category-tag">
            <Sparkles size={13} />
            <span>{project.category}</span>
          </div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>

          <div className="modal-platforms">
            {project.platforms?.map((p, i) => (
              <span key={i} className="platform-badge">
                {p === "Web" ? <Globe size={13} /> : <Smartphone size={13} />}
                <span>{p}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4 className="modal-section-heading">Overview & Problem Solved</h4>
            <p className="modal-text">{project.description}</p>
            {project.extendedDetails && (
              <p className="modal-text secondary-text">{project.extendedDetails}</p>
            )}
          </div>

          {project.features && (
            <div className="modal-section">
              <h4 className="modal-section-heading">Key Technical Features</h4>
              <ul className="modal-feature-list">
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx} className="modal-feature-item">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-section">
            <h4 className="modal-section-heading">Architecture & Technologies</h4>
            <div className="modal-tech-pills">
              {project.tech?.map((t, idx) => (
                <span key={idx} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.links && (
            <div className="modal-actions">
              {project.links.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn primary"
                >
                  <Smartphone size={16} />
                  <span>Google Play Store</span>
                </a>
              )}
              {project.links.appStore && (
                <a
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn secondary"
                >
                  <ExternalLink size={16} />
                  <span>Apple App Store</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
