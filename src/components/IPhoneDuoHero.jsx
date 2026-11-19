import React, { useState, useEffect } from "react";
import { personalInfo, education } from "../data/portfolioData";
import {
  MapPin,
  Clock,
  Sparkles,
  Download,
  Mail,
  Check,
  Copy,
  ShoppingBag,
  HeartPulse,
  CreditCard,
  CheckCircle2,
  RefreshCw,
  GraduationCap,
  Award,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  Wifi,
  Battery,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";
import "./IPhoneDuoHero.css";

const IPhoneDuoHero = ({ onOpenCommandPalette }) => {
  const [copied, setCopied] = useState(false);
  const [kathmanduTime, setKathmanduTime] = useState("");

  // Phone 1 State (Descriptions & Profile Phone)
  const [profileTab, setProfileTab] = useState("about");

  // Phone 2 State (Interactive Apps Phone)
  const [activeApp, setActiveApp] = useState("shoprize");
  const [cartCount, setCartCount] = useState(2);
  const [ordered, setOrdered] = useState(false);
  const [quizFlipped, setQuizFlipped] = useState(false);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const nptTime = new Date(
        now.getTime() + (now.getTimezoneOffset() + 345) * 60000
      );
      const hours = String(nptTime.getHours()).padStart(2, "0");
      const minutes = String(nptTime.getMinutes()).padStart(2, "0");
      setKathmanduTime(`${hours}:${minutes} NPT`);
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
    <section id="bento-overview" className="duo-hero-section">
      {/* Intro Header & Command Pill */}
      <div className="duo-hero-intro">
        <div className="duo-badge-row">
          <div className="status-live-pill">
            <span className="live-pulsing-dot"></span>
            <span>Available for Senior Mobile Roles & Enterprise Contracts</span>
          </div>

          <button
            className="duo-cmd-trigger-btn"
            onClick={onOpenCommandPalette}
            title="Launch Command Palette (⌘K)"
          >
            <span>⌘K Command Palette</span>
          </button>
        </div>

        <h1 className="duo-headline">
          Anom Maharjan
          <span className="duo-subhead"> • Flutter Developer & Software Engineer</span>
        </h1>

        <p className="duo-lead-statement">
          Senior-level engineer crafting high-framerate cross-platform mobile apps. Below is an interactive <strong>iPhone Duo</strong> running my bio, architectural foundations, and live Flutter production modules.
        </p>

        {/* Action Bar */}
        <div className="duo-action-bar">
          <a
            href="/Anom_Maharjan_Resume.pdf"
            download="Anom_Maharjan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="duo-btn primary"
          >
            <Download size={15} />
            <span>Download CV (PDF)</span>
          </a>

          <button onClick={handleCopyEmail} className="duo-btn secondary">
            {copied ? (
              <Check size={15} className="text-emerald" />
            ) : (
              <Copy size={15} />
            )}
            <span>{copied ? "Email Copied!" : "Copy Email"}</span>
          </button>

          <a
            href={`https://wa.me/977${personalInfo.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="duo-btn ghost"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="duo-btn ghost icon-only"
            title="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="duo-btn ghost icon-only"
            title="GitHub"
          >
            <GithubIcon size={16} />
          </a>
        </div>
      </div>

      {/* THE IPHONE DUO CONTAINER */}
      <div className="iphone-duo-stage">
        {/* ============================================================
            IPHONE 1: DESCRIPTIONS, BIO & CREDENTIALS
        ============================================================ */}
        <div className="iphone-mockup phone-left">
          {/* Hardware Frame Elements */}
          <div className="phone-screen-glare"></div>

          {/* Dynamic Island */}
          <div className="dynamic-island">
            <span className="camera-lens"></span>
            <span className="sensor-dot"></span>
          </div>

          {/* Status Bar */}
          <div className="phone-status-bar">
            <span className="phone-clock">{kathmanduTime || "09:41"}</span>
            <div className="phone-status-icons">
              <span className="carrier-tag">5G</span>
              <Wifi size={12} />
              <Battery size={13} />
            </div>
          </div>

          {/* Screen Body */}
          <div className="phone-inner-scroll">
            {/* Phone Profile Header */}
            <div className="phone-user-header">
              <div className="phone-avatar-box">
                <img src="/avatar.jpg" alt="Anom Maharjan" className="avatar-img" />
                <span className="online-beacon"></span>
              </div>
              <div className="phone-user-info">
                <h3 className="phone-user-name">Anom Maharjan</h3>
                <span className="phone-user-role">Flutter Developer | Engineer</span>
                <span className="phone-location">
                  <MapPin size={11} /> Kathmandu, Nepal
                </span>
              </div>
            </div>

            {/* Segmented Controller (Tabs) */}
            <div className="phone-segmented-control">
              <button
                className={`segmented-tab ${profileTab === "about" ? "active" : ""}`}
                onClick={() => setProfileTab("about")}
              >
                Overview
              </button>
              <button
                className={`segmented-tab ${profileTab === "architecture" ? "active" : ""}`}
                onClick={() => setProfileTab("architecture")}
              >
                Arch
              </button>
              <button
                className={`segmented-tab ${profileTab === "ai" ? "active" : ""}`}
                onClick={() => setProfileTab("ai")}
              >
                AI & MCP
              </button>
              <button
                className={`segmented-tab ${profileTab === "education" ? "active" : ""}`}
                onClick={() => setProfileTab("education")}
              >
                Degree
              </button>
            </div>

            {/* TAB 1: OVERVIEW DESCRIPTION */}
            {profileTab === "about" && (
              <div className="phone-tab-content">
                <div className="phone-desc-card highlight">
                  <span className="card-kicker">Professional Summary</span>
                  <p className="card-text">
                    Enthusiastic software developer with a <strong>Bachelor's in CSIT</strong>, passionate about producing cutting-edge yet practical designs for mobile and web applications.
                  </p>
                </div>

                <div className="phone-desc-card">
                  <span className="card-kicker">Cross-Platform Delivery</span>
                  <p className="card-text">
                    Experienced in delivering production cross-platform apps across <strong>healthcare, government, fintech, and e-commerce</strong>.
                  </p>
                  <div className="mini-domain-chips">
                    <span className="domain-pill">Fintech</span>
                    <span className="domain-pill">Healthcare</span>
                    <span className="domain-pill">Government</span>
                    <span className="domain-pill">E-Commerce</span>
                  </div>
                </div>

                <div className="phone-desc-card">
                  <span className="card-kicker">State & AI Integrations</span>
                  <p className="card-text">
                    Veteran of <strong>BLOC & Riverpod</strong> architectures, offline-first SQLite sync engines, and <strong>Claude MCP & Google Gemini AI</strong> pipelines.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: ARCHITECTURE & METRICS */}
            {profileTab === "architecture" && (
              <div className="phone-tab-content">
                <div className="phone-metric-grid">
                  <div className="metric-box">
                    <span className="metric-num">10+</span>
                    <span className="metric-lbl">Store Apps</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-num">60fps</span>
                    <span className="metric-lbl">Jank-Free</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-num">100%</span>
                    <span className="metric-lbl">Null Safety</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-num">4+ yrs</span>
                    <span className="metric-lbl">Experience</span>
                  </div>
                </div>

                <div className="phone-desc-card">
                  <span className="card-kicker">Core Principles</span>
                  <ul className="phone-spec-list">
                    <li>
                      <CheckCircle2 size={13} className="text-emerald" />
                      <span>Decoupled domain, data & UI presentation layers</span>
                    </li>
                    <li>
                      <CheckCircle2 size={13} className="text-emerald" />
                      <span>Zero UI-thread blocking with background schedulers</span>
                    </li>
                    <li>
                      <CheckCircle2 size={13} className="text-emerald" />
                      <span>Automated store signing & TestFlight pipelines</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 3: AI & MCP INTEGRATION */}
            {profileTab === "ai" && (
              <div className="phone-tab-content">
                <div className="phone-desc-card highlight">
                  <span className="card-kicker">Agentic AI & LLMs</span>
                  <h4 className="edu-phone-title">Claude MCP & Gemini 1.5</h4>
                  <p className="card-text" style={{ marginTop: "0.3rem" }}>
                    Leveraging Claude Model Context Protocol (MCP) and Google Antigravity prompt engineering to build in-app intelligent assistants, automated testing, and translation pipelines.
                  </p>
                </div>

                <div className="phone-desc-card">
                  <span className="card-kicker">Integrated AI Tooling</span>
                  <div className="mini-domain-chips">
                    <span className="domain-pill">Claude MCP</span>
                    <span className="domain-pill">Google Antigravity</span>
                    <span className="domain-pill">Gemini 1.5</span>
                    <span className="domain-pill">Prompt Engineering</span>
                    <span className="domain-pill">OpenAI ChatGPT</span>
                  </div>
                </div>

                <div className="phone-desc-card">
                  <span className="card-kicker">Production Workflows</span>
                  <ul className="phone-spec-list">
                    <li>
                      <CheckCircle2 size={13} className="text-emerald" />
                      <span>Autonomous tool-calling over local SQLite schema</span>
                    </li>
                    <li>
                      <CheckCircle2 size={13} className="text-emerald" />
                      <span>Context-aware Japanese-Nepali language bridges</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 4: EDUCATION */}
            {profileTab === "education" && (
              <div className="phone-tab-content">
                <div className="phone-desc-card highlight">
                  <div className="edu-card-top">
                    <GraduationCap size={18} className="text-cyan" />
                    <span className="edu-score-pill">Score: {education.score}</span>
                  </div>
                  <h4 className="edu-phone-title">{education.degree}</h4>
                  <span className="edu-phone-college">{education.institution}</span>
                  <span className="edu-phone-period">{education.period} • {education.location}</span>
                </div>

                <div className="phone-desc-card">
                  <span className="card-kicker">Key Academic Focus</span>
                  <p className="card-text">
                    Rigorous grounding in Data Structures, Algorithms, Object-Oriented Software Design, and Distributed Systems.
                  </p>
                </div>
              </div>
            )}

            {/* Quick in-phone footer action */}
            <div className="phone-inapp-action">
              <a
                href="/Anom_Maharjan_Resume.pdf"
                download="Anom_Maharjan_Resume.pdf"
                className="phone-cta-btn"
              >
                <Download size={13} />
                <span>Open Full Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Home Bar */}
          <div className="phone-home-bar"></div>
        </div>

        {/* ============================================================
            IPHONE 2: LIVE INTERACTIVE FLUTTER APPS
        ============================================================ */}
        <div className="iphone-mockup phone-right">
          <div className="phone-screen-glare"></div>

          {/* Dynamic Island */}
          <div className="dynamic-island">
            <span className="camera-lens"></span>
            <span className="sensor-dot"></span>
          </div>

          {/* Status Bar */}
          <div className="phone-status-bar">
            <span className="phone-clock">9:41</span>
            <div className="phone-status-icons">
              <span className="flutter-engine-tag">FLUTTER 3.24</span>
              <Battery size={13} />
            </div>
          </div>

          {/* Screen Body */}
          <div className="phone-inner-scroll">
            {/* App Switcher */}
            <div className="phone-segmented-control apps-control">
              <button
                className={`segmented-tab ${activeApp === "shoprize" ? "active" : ""}`}
                onClick={() => setActiveApp("shoprize")}
              >
                <ShoppingBag size={11} />
                <span>Shoprize</span>
              </button>
              <button
                className={`segmented-tab ${activeApp === "jlpt" ? "active" : ""}`}
                onClick={() => setActiveApp("jlpt")}
              >
                <Sparkles size={11} />
                <span>JLPT AI</span>
              </button>
              <button
                className={`segmented-tab ${activeApp === "cardiac" ? "active" : ""}`}
                onClick={() => setActiveApp("cardiac")}
              >
                <HeartPulse size={11} />
                <span>Telehealth</span>
              </button>
            </div>

            {/* APP 1: SHOPRIZE E-COMMERCE */}
            {activeApp === "shoprize" && (
              <div className="app-live-viewport">
                <div className="app-top-nav">
                  <span className="app-logo-text">Shoprize</span>
                  <div className="app-cart-badge">
                    <ShoppingBag size={14} />
                    <span className="badge-count">{cartCount}</span>
                  </div>
                </div>

                <div className="app-item-preview">
                  <div className="item-tag-row">
                    <span className="item-tag">Fashion Commerce Flow</span>
                    <span className="stock-status">In Stock</span>
                  </div>
                  <h4 className="item-name">Himalayan Woolen Cardigan</h4>
                  <div className="item-pricing">
                    <span className="price-num">NPR 4,850</span>
                    <span className="vat-text">Inc. VAT</span>
                  </div>
                  <div className="gateway-row">
                    <span className="gw-chip khalti">Khalti Gateway</span>
                    <span className="gw-chip esewa">eSewa Pay</span>
                  </div>
                </div>

                {ordered ? (
                  <div className="order-dispatched-box">
                    <CheckCircle2 size={18} className="text-emerald" />
                    <div>
                      <span className="dispatch-title">Payment Verified!</span>
                      <span className="dispatch-sub">Order created via BLoC stream</span>
                    </div>
                  </div>
                ) : (
                  <div className="interactive-btn-group">
                    <button
                      className="app-btn secondary"
                      onClick={() => setCartCount((c) => c + 1)}
                    >
                      + Add to Cart
                    </button>
                    <button
                      className="app-btn primary"
                      onClick={() => {
                        setOrdered(true);
                        setTimeout(() => setOrdered(false), 2800);
                      }}
                    >
                      <CreditCard size={13} />
                      <span>Checkout</span>
                    </button>
                  </div>
                )}

                <div className="app-arch-callout">
                  <span className="callout-label">Live Architecture:</span>
                  <span className="callout-text">BLoC State Machine + Real-Time Khalti/eSewa Order Tracking</span>
                </div>
              </div>
            )}

            {/* APP 2: JLPT AI MULTILINGUAL */}
            {activeApp === "jlpt" && (
              <div className="app-live-viewport">
                <div className="app-top-nav">
                  <span className="app-logo-text">JLPT Nepali • N3</span>
                  <span className="gemini-badge">
                    <Sparkles size={11} /> Gemini 1.5
                  </span>
                </div>

                <div
                  className={`quiz-interactive-card ${quizFlipped ? "flipped" : ""}`}
                  onClick={() => setQuizFlipped(!quizFlipped)}
                >
                  {!quizFlipped ? (
                    <div className="quiz-front">
                      <span className="kanji-glyph">開発者</span>
                      <span className="romaji-text">かいはつしゃ • Kaihatsusha</span>
                      <span className="tap-hint">Tap card for Gemini AI breakdown</span>
                    </div>
                  ) : (
                    <div className="quiz-back">
                      <span className="ai-meaning-title">Meaning: "Developer / Engineer"</span>
                      <p className="ai-grammatical-text">
                        開 (Kai: Open) + 発 (Hatsu: Launch) + 者 (Sha: Person). Used in mobile software engineering.
                      </p>
                      <span className="nepali-trans-pill">नेपाली: सफ्टवेयर विकासकर्ता</span>
                    </div>
                  )}
                </div>

                <button
                  className="app-btn outline-full"
                  onClick={() => setQuizFlipped(!quizFlipped)}
                >
                  <RefreshCw size={13} />
                  <span>{quizFlipped ? "Show Front Card" : "Flip Flashcard"}</span>
                </button>

                <div className="app-arch-callout">
                  <span className="callout-label">Live Architecture:</span>
                  <span className="callout-text">Streaming token parser + Spaced Repetition Engine</span>
                </div>
              </div>
            )}

            {/* APP 3: NATIONAL CARDIAC CENTER */}
            {activeApp === "cardiac" && (
              <div className="app-live-viewport">
                <div className="app-top-nav">
                  <span className="app-logo-text">National Cardiac</span>
                  <span className="secure-badge">Encrypted Lab</span>
                </div>

                <div className="doctor-profile-card">
                  <div className="doctor-avatar-circle"></div>
                  <div>
                    <h5 className="doctor-name">Dr. R. Shrestha, MD</h5>
                    <span className="doctor-specialty">Senior Cardiologist • Cath Lab</span>
                  </div>
                </div>

                <div className="slot-selection-section">
                  <span className="slot-heading">Select Outpatient Slot:</span>
                  <div className="slot-pill-row">
                    <span className="slot-pill active">Today 3:30 PM</span>
                    <span className="slot-pill">Tomorrow 10:00 AM</span>
                  </div>
                </div>

                {booked ? (
                  <div className="order-dispatched-box">
                    <CheckCircle2 size={18} className="text-emerald" />
                    <div>
                      <span className="dispatch-title">Consult Confirmed!</span>
                      <span className="dispatch-sub">SMS & encrypted receipt sent</span>
                    </div>
                  </div>
                ) : (
                  <button
                    className="app-btn primary full"
                    onClick={() => {
                      setBooked(true);
                      setTimeout(() => setBooked(false), 2800);
                    }}
                  >
                    Confirm Telehealth Slot
                  </button>
                )}

                <div className="app-arch-callout">
                  <span className="callout-label">Live Architecture:</span>
                  <span className="callout-text">Socket.IO WebRTC consultations + Encrypted PDF Viewer</span>
                </div>
              </div>
            )}
          </div>

          {/* Home Bar */}
          <div className="phone-home-bar"></div>
        </div>
      </div>
    </section>
  );
};

export default IPhoneDuoHero;
