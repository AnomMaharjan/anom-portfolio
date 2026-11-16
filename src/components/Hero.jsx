import React from "react";
import { personalInfo } from "../data/portfolioData";
import {
  MapPin,
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Profile Avatar & Status Pill */}
        <div className="hero-top-row">
          <div className="avatar-wrapper">
            <img
              src="/favicon.png"
              alt="Anom Maharjan"
              className="hero-avatar"
            />
          </div>
          <div className="status-pill">
            <span className="status-indicator"></span>
            <span>{personalInfo.statusText}</span>
          </div>
        </div>

        {/* Main Headings */}
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">{personalInfo.name}.</h1>
        <h2 className="hero-headline">
          I build fluid mobile & web applications.
        </h2>

        {/* Concise Description */}
        <p className="hero-bio">
          I'm a senior-level <strong>Flutter Developer & Software Engineer</strong> based in{" "}
          <span className="location-highlight">
            <MapPin size={15} /> Kathmandu, Nepal
          </span>
          . With 4+ years of production experience, I specialize in crafting cross-platform apps with{" "}
          <strong>BLOC & Clean Architecture</strong>, integrating{" "}
          <strong>AI workflows (Gemini & Claude MCP)</strong>, and shipping high-performance apps to the App Store and Google Play.
        </p>

        {/* Primary Actions */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span>Explore Projects</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="/Anom_Maharjan_Resume.pdf"
            download="Anom_Maharjan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            title="Download Anom Maharjan's CV (PDF)"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
          <a href="#contact" className="btn btn-outline">
            <Mail size={16} />
            <span>Contact</span>
          </a>
          <div className="social-links-minimal">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>
          </div>
        </div>

        {/* Minimal Stack Highlights */}
        <div className="hero-stack-row">
          <span className="stack-label">Core Focus:</span>
          <div className="stack-tags">
            <span className="stack-tag">Flutter & Dart</span>
            <span className="stack-tag">BLOC / Riverpod</span>
            <span className="stack-tag">AI & Gemini APIs</span>
            <span className="stack-tag">Offline-First SQLite</span>
            <span className="stack-tag">Play Store & App Store</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
