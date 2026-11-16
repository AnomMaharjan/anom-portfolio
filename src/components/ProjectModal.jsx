import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Smartphone,
  Globe,
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

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
          title="Close (Esc)"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-category-tag">
            <Sparkles size={13} />
            <span>{project.category}</span>
          </div>
          <h2 id="modal-project-title" className="modal-title">
            {project.title}
          </h2>
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
              <p className="modal-text secondary-text">
                {project.extendedDetails}
              </p>
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

          {/* Modal Bottom Actions */}
          <div className="modal-bottom-bar">
            <div className="modal-external-links">
              {project.links?.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn primary"
                >
                  <Smartphone size={15} />
                  <span>Google Play</span>
                </a>
              )}
              {project.links?.appStore && (
                <a
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn secondary"
                >
                  <ExternalLink size={15} />
                  <span>App Store</span>
                </a>
              )}
            </div>

            <button
              type="button"
              className="modal-close-action-btn"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
