import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import FlutterSimulatorWidget from "./FlutterSimulatorWidget";
import {
  MapPin,
  Clock,
  Sparkles,
  Download,
  Mail,
  Check,
  Copy,
  Terminal,
  Cpu,
  Layers,
  GraduationCap,
  Award,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";
import "./BentoHero.css";

const BentoHero = ({ onOpenCommandPalette }) => {
  const [copied, setCopied] = useState(false);
  const [kathmanduTime, setKathmanduTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Kathmandu is UTC + 5:45
      const now = new Date();
      const nptTime = new Date(
        now.getTime() + (now.getTimezoneOffset() + 345) * 60000
      );
      const hours = String(nptTime.getHours()).padStart(2, "0");
      const minutes = String(nptTime.getMinutes()).padStart(2, "0");
      const seconds = String(nptTime.getSeconds()).padStart(2, "0");
      setKathmanduTime(`${hours}:${minutes}:${seconds} NPT`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="bento-overview" className="bento-hero-section">
      <div className="bento-grid-container">
        {/* TILE 1: Lead Engineer Profile Card (Span 2 col) */}
        <div className="bento-card bento-profile-card">
          <div className="profile-top-bar">
            <div className="profile-avatar-frame">
              <img
                src="/avatar.jpg"
                alt="Anom Maharjan"
                className="profile-real-avatar"
              />
              <span className="live-status-dot" title="Available for work"></span>
            </div>

            <div className="profile-identity">
              <div className="role-chip">
                <Zap size={12} className="text-cyan" />
                <span>Senior Flutter Engineer & Architect</span>
              </div>
              <h1 className="profile-full-name">{personalInfo.name}</h1>
              <div className="profile-geo-row">
                <span className="geo-tag">
                  <MapPin size={13} /> {personalInfo.location}
                </span>
                <span className="geo-dot">•</span>
                <span className="clock-tag">
                  <Clock size={13} /> {kathmanduTime || "UTC+5:45"}
                </span>
              </div>
            </div>
          </div>

          <p className="profile-statement">
            Passionate software developer specialized in delivering 60fps cross-platform mobile and web apps across <strong>healthcare, government, fintech, and e-commerce</strong>. Veteran of <strong>BLOC & Riverpod</strong> state machines, offline-first SQLite sync engines, and production <strong>Claude MCP & Gemini AI</strong> tooling.
          </p>

          <div className="profile-credentials-bar">
            <div className="cred-chip">
              <GraduationCap size={15} className="text-indigo" />
              <span>St. Xavier's College (B.Sc. CSIT)</span>
              <span className="cred-score">70%</span>
            </div>
            <div className="cred-chip">
              <ShieldCheck size={15} className="text-emerald" />
              <span>4+ Years Production Engineering</span>
            </div>
          </div>

          <div className="profile-action-dock">
            <a
              href="/Anom_Maharjan_Resume.pdf"
              download="Anom_Maharjan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="dock-action-btn primary"
              title="Download Anom Maharjan's CV"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="dock-action-btn secondary"
              title="Copy Email Address"
            >
              {copied ? (
                <Check size={15} className="text-emerald" />
              ) : (
                <Copy size={15} />
              )}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>

            <a
              href={`https://wa.me/977${personalInfo.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="dock-action-btn ghost"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon size={16} />
              <span className="hide-on-mobile">WhatsApp</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="dock-action-btn ghost"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="dock-action-btn ghost"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>

        {/* TILE 2: Interactive Mobile Simulator Widget */}
        <div className="bento-card bento-sim-card">
          <FlutterSimulatorWidget />
        </div>

        {/* TILE 3: Metrics & App Store Stats */}
        <div className="bento-card bento-stats-card">
          <div className="card-mini-label">
            <Cpu size={13} />
            <span>PRODUCTION METRICS</span>
          </div>

          <div className="bento-stat-items">
            <div className="bento-metric-row">
              <span className="metric-digit">10+</span>
              <span className="metric-desc">Cross-Platform Apps Published</span>
            </div>
            <div className="bento-metric-row">
              <span className="metric-digit">100%</span>
              <span className="metric-desc">Sound Null Safety & Clean Architecture</span>
            </div>
            <div className="bento-metric-row">
              <span className="metric-digit">&lt;12ms</span>
              <span className="metric-desc">Jank-Free 60 FPS Render Pipeline</span>
            </div>
          </div>

          <div className="store-platforms-row">
            <span className="store-tag">Apple App Store</span>
            <span className="store-tag">Google Play Console</span>
            <span className="store-tag">Apple TestFlight</span>
          </div>
        </div>

        {/* TILE 4: AI & Claude MCP Tooling Pipeline */}
        <div className="bento-card bento-ai-card">
          <div className="card-mini-label">
            <Sparkles size={13} className="text-purple" />
            <span>AI WORKFLOW INTEGRATION</span>
          </div>

          <h3 className="ai-widget-title">Claude MCP & Gemini 1.5 Multimodal</h3>
          <p className="ai-widget-desc">
            Leveraging Claude Model Context Protocol (MCP) and Google Antigravity prompt engineering to build in-app intelligent assistants, automated testing, and Japanese-Nepali translation pipelines.
          </p>

          <div className="ai-tool-chips">
            <span className="ai-chip">Claude MCP</span>
            <span className="ai-chip">Google Antigravity</span>
            <span className="ai-chip">Gemini APIs</span>
            <span className="ai-chip">OpenAI ChatGPT</span>
            <span className="ai-chip">Prompt Engineering</span>
          </div>
        </div>

        {/* TILE 5: Command Bar Quick Launch Widget */}
        <div
          className="bento-card bento-cmd-card"
          onClick={onOpenCommandPalette}
          role="button"
          tabIndex={0}
          title="Click to launch Command Palette"
        >
          <div className="cmd-banner-content">
            <div className="cmd-icon-box">
              <Terminal size={18} />
            </div>
            <div>
              <span className="cmd-banner-title">Developer Quick Launch</span>
              <p className="cmd-banner-sub">
                Press <kbd>⌘K</kbd> or click to search projects, inspect code, and execute actions.
              </p>
            </div>
          </div>
          <span className="cmd-pill-trigger">⌘K</span>
        </div>
      </div>
    </section>
  );
};

export default BentoHero;
