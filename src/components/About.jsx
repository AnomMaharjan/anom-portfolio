import React from "react";
import { education } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  GraduationCap,
  Layers,
  Cpu,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import "./About.css";

const About = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  const corePillars = [
    {
      title: "Clean Architecture & BLOC",
      description: "Strict separation of data, domain, and presentation layers for scale.",
      icon: Layers,
    },
    {
      title: "AI Workflows & MCP",
      description: "Integrating Gemini APIs, ChatGPT, and Claude MCP to power intelligent features.",
      icon: Cpu,
    },
    {
      title: "Offline-First & Native Services",
      description: "Resilient SQLite storage with Android WorkManager & iOS BGTaskScheduler.",
      icon: ShieldCheck,
    },
    {
      title: "App Store & Play Store Delivery",
      description: "End-to-end releases from TestFlight betas to production store distribution.",
      icon: Smartphone,
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`section about-section ${isVisible ? "reveal-active" : "reveal-hidden"}`}
    >
      <h2 className="section-title">About Me</h2>

      <div className="about-content-clean">
        <div className="about-bio-block">
          <p className="about-lead">
            I am a mobile-focused software engineer passionate about creating dependable, beautifully designed applications. Over the past 4+ years, I have architected and deployed cross-platform solutions across <strong>healthcare, government, and e-commerce</strong>.
          </p>
          <p className="about-sub">
            My experience ranges from converting complex enterprise web platforms into smooth Flutter apps, building dynamic JSON-driven form engines, and implementing background data sync to integrating generative AI with <strong>Google Gemini APIs and Claude MCP</strong>.
          </p>
        </div>

        {/* 4 Pillars Grid (Compact & Minimal) */}
        <div className="pillars-row">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-tile">
                <div className="pillar-tile-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="pillar-tile-title">{pillar.title}</h4>
                  <p className="pillar-tile-desc">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Education Strip */}
        <div className="education-strip">
          <div className="edu-strip-icon">
            <GraduationCap size={20} />
          </div>
          <div className="edu-strip-content">
            <div className="edu-strip-header">
              <span className="edu-degree-clean">{education.degree}</span>
              <span className="edu-badge">{education.score} Score</span>
            </div>
            <div className="edu-strip-meta">
              <span>{education.institution}</span>
              <span>•</span>
              <span>{education.period}</span>
              <span>•</span>
              <span>{education.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
