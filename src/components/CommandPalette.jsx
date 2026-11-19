import React, { useState, useEffect } from "react";
import {
  Search,
  X,
  FileText,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Smartphone,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import { personalInfo, projects } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";
import "./CommandPalette.css";

const CommandPalette = ({ isOpen, onClose, onSelectProject }) => {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via parent
          const btn = document.getElementById("cmd-k-trigger");
          if (btn) btn.click();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="cmd-backdrop" onClick={onClose}>
      <div
        className="cmd-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="cmd-header">
          <Search size={18} className="cmd-search-icon" />
          <input
            type="text"
            className="cmd-input"
            placeholder="Type a command or search projects, tech stack..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <span className="cmd-esc-badge">ESC</span>
        </div>

        <div className="cmd-body">
          {/* Quick Actions */}
          {!query && (
            <div className="cmd-group">
              <span className="cmd-group-title">Quick Actions</span>
              <button
                className="cmd-item"
                onClick={() => {
                  window.open("/Anom_Maharjan_Resume.pdf", "_blank");
                  onClose();
                }}
              >
                <FileText size={16} className="cmd-item-icon" />
                <span>Download Resume (PDF)</span>
                <span className="cmd-shortcut">CV</span>
              </button>
              <button className="cmd-item" onClick={handleCopyEmail}>
                {copied ? (
                  <Check size={16} className="cmd-item-icon text-emerald" />
                ) : (
                  <Copy size={16} className="cmd-item-icon" />
                )}
                <span>{copied ? "Email Copied!" : "Copy Email to Clipboard"}</span>
                <span className="cmd-shortcut">{personalInfo.email}</span>
              </button>
              <button
                className="cmd-item"
                onClick={() => {
                  window.open(personalInfo.github, "_blank");
                  onClose();
                }}
              >
                <GithubIcon size={16} className="cmd-item-icon" />
                <span>Visit GitHub Profile</span>
                <ArrowRight size={14} className="cmd-arrow" />
              </button>
              <button
                className="cmd-item"
                onClick={() => {
                  window.open(personalInfo.linkedin, "_blank");
                  onClose();
                }}
              >
                <LinkedinIcon size={16} className="cmd-item-icon" />
                <span>Visit LinkedIn Profile</span>
                <ArrowRight size={14} className="cmd-arrow" />
              </button>
            </div>
          )}

          {/* Navigation */}
          {!query && (
            <div className="cmd-group">
              <span className="cmd-group-title">Jump to Section</span>
              <button className="cmd-item" onClick={() => scrollTo("bento-overview")}>
                <Layers size={16} className="cmd-item-icon" />
                <span>Overview & Bio</span>
              </button>
              <button className="cmd-item" onClick={() => scrollTo("code-inspector")}>
                <Code2 size={16} className="cmd-item-icon" />
                <span>Architecture & Code Snippets</span>
              </button>
              <button className="cmd-item" onClick={() => scrollTo("projects-bento")}>
                <Smartphone size={16} className="cmd-item-icon" />
                <span>Shipped Projects (10+)</span>
              </button>
              <button className="cmd-item" onClick={() => scrollTo("career-changelog")}>
                <Sparkles size={16} className="cmd-item-icon" />
                <span>Career Changelog & Experience</span>
              </button>
              <button className="cmd-item" onClick={() => scrollTo("contact-widget")}>
                <Mail size={16} className="cmd-item-icon" />
                <span>Contact & Inquiries</span>
              </button>
            </div>
          )}

          {/* Search Results */}
          {query && (
            <div className="cmd-group">
              <span className="cmd-group-title">
                Matching Projects ({filteredProjects.length})
              </span>
              {filteredProjects.length === 0 ? (
                <div className="cmd-empty">No matching projects or tech found.</div>
              ) : (
                filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    className="cmd-item"
                    onClick={() => {
                      onClose();
                      onSelectProject(proj);
                    }}
                  >
                    <Smartphone size={16} className="cmd-item-icon" />
                    <div className="cmd-project-info">
                      <span className="cmd-proj-title">{proj.title}</span>
                      <span className="cmd-proj-sub">{proj.subtitle}</span>
                    </div>
                    <span className="cmd-proj-cat">{proj.category}</span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        <div className="cmd-footer">
          <span>Navigate with mouse or keyboard</span>
          <span>Anom Maharjan • Flutter Architect</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
