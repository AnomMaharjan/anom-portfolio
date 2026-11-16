import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Smartphone, Sparkles, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">&lt;AM /&gt;</span>
            <p className="footer-tagline">
              Architecting fluid, high-performance mobile & web solutions.
            </p>
          </div>

          <div className="footer-social-links">
            <a
              href="/Anom_Maharjan_Resume.pdf"
              download="Anom_Maharjan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Download CV"
              title="Download CV (PDF)"
            >
              <Download size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon-btn"
              aria-label="Direct Email"
              title="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${personalInfo.phoneRaw}`}
              className="social-icon-btn"
              aria-label="Phone"
              title="Call"
            >
              <Smartphone size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="tech-badge">
            <Sparkles size={13} className="sparkle-icon" />
            <span>Built with React 19, Vite, and Clean CSS Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
