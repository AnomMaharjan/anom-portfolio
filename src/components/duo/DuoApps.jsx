import React, { useState } from "react";
import {
  personalInfo,
  education,
  experiences,
  projects,
  projectCategories,
  skillCategories,
} from "../../data/portfolioData";
import { codeSnippets } from "../../data/codeSnippets";
import {
  Download,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  HeartPulse,
  CreditCard,
  RefreshCw,
  MapPin,
  Mail,
  GitCommit,
  FileCode,
  Database,
  Rocket,
} from "lucide-react";
import { LinkedinIcon, WhatsAppIcon } from "../Icons";

const skillIcons = { Smartphone, Sparkles, Database, CreditCard, Rocket };

/* ============================== ABOUT ============================== */
export const AboutApp = () => {
  const [tab, setTab] = useState("about");
  const tabs = [
    ["about", "Overview"],
    ["architecture", "Arch"],
    ["ai", "AI & MCP"],
    ["education", "Degree"],
  ];

  return (
    <div className="app-stack">
      <div className="profile-card">
        <div className="avatar-wrap">
          <img src="/avatar.jpg" alt="Anom Maharjan" className="avatar-img" />
          <span className="online-beacon"></span>
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{personalInfo.name}</h2>
          <span className="profile-role">{personalInfo.title}</span>
          <span className="profile-loc">
            <MapPin size={11} /> {personalInfo.location}
          </span>
        </div>
      </div>

      <div className="seg-control">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            className={`seg-tab ${tab === id ? "active" : ""}`}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "about" && (
        <>
          <div className="duo-card highlight">
            <span className="kicker">Professional Summary</span>
            <p className="card-text">
              Enthusiastic software developer with a <strong>Bachelor's in CSIT</strong>,
              passionate about producing cutting-edge yet practical designs for mobile and
              web applications.
            </p>
          </div>
          <div className="duo-card">
            <span className="kicker">Cross-Platform Delivery</span>
            <p className="card-text">
              Production cross-platform apps across{" "}
              <strong>healthcare, government, fintech, and e-commerce</strong>.
            </p>
            <div className="chip-row">
              {["Fintech", "Healthcare", "Government", "E-Commerce"].map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </div>
          <div className="duo-card">
            <span className="kicker">State & AI Integrations</span>
            <p className="card-text">
              <strong>BLoC & Riverpod</strong> architectures, offline-first SQLite sync
              engines, and <strong>Claude MCP & Google Gemini AI</strong> pipelines.
            </p>
          </div>
        </>
      )}

      {tab === "architecture" && (
        <>
          <div className="metric-grid">
            {[
              ["10+", "Store Apps"],
              ["60fps", "Jank-Free"],
              ["100%", "Null Safety"],
              ["4+ yrs", "Experience"],
            ].map(([n, l]) => (
              <div key={l} className="metric-box">
                <span className="metric-num">{n}</span>
                <span className="metric-lbl">{l}</span>
              </div>
            ))}
          </div>
          <div className="duo-card">
            <span className="kicker">Core Principles</span>
            <ul className="spec-list">
              {[
                "Decoupled domain, data & UI presentation layers",
                "Zero UI-thread blocking with background schedulers",
                "Automated store signing & TestFlight pipelines",
              ].map((t) => (
                <li key={t}>
                  <CheckCircle2 size={13} className="text-emerald" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {tab === "ai" && (
        <>
          <div className="duo-card highlight">
            <span className="kicker">Agentic AI & LLMs</span>
            <h4 className="card-title">Claude MCP & Gemini 1.5</h4>
            <p className="card-text">
              Claude Model Context Protocol (MCP) and Google Antigravity prompt engineering
              for in-app assistants, automated testing, and translation pipelines.
            </p>
          </div>
          <div className="duo-card">
            <span className="kicker">Integrated AI Tooling</span>
            <div className="chip-row">
              {["Claude MCP", "Google Antigravity", "Gemini 1.5", "Prompt Engineering", "OpenAI ChatGPT"].map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </div>
          <div className="duo-card">
            <span className="kicker">Production Workflows</span>
            <ul className="spec-list">
              {[
                "Autonomous tool-calling over local SQLite schema",
                "Context-aware Japanese-Nepali language bridges",
              ].map((t) => (
                <li key={t}>
                  <CheckCircle2 size={13} className="text-emerald" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {tab === "education" && (
        <>
          <div className="duo-card highlight">
            <div className="edu-top">
              <GraduationCap size={18} className="text-cyan" />
              <span className="score-pill">Score: {education.score}</span>
            </div>
            <h4 className="card-title">{education.degree}</h4>
            <span className="edu-college">{education.institution}</span>
            <span className="edu-period">
              {education.period} • {education.location}
            </span>
          </div>
          <div className="duo-card">
            <span className="kicker">Key Academic Focus</span>
            <p className="card-text">
              Data Structures, Algorithms, Object-Oriented Software Design, and Distributed
              Systems.
            </p>
          </div>
        </>
      )}

      <a
        href="/Anom_Maharjan_Resume.pdf"
        download="Anom_Maharjan_Resume.pdf"
        className="cta-btn"
      >
        <Download size={14} />
        <span>Open Full Resume (PDF)</span>
      </a>
    </div>
  );
};

/* ============================ PLAYGROUND =========================== */
export const PlaygroundApp = () => {
  const [app, setApp] = useState("shoprize");
  const [cart, setCart] = useState(2);
  const [ordered, setOrdered] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [booked, setBooked] = useState(false);

  return (
    <div className="app-stack">
      <div className="seg-control">
        <button className={`seg-tab ${app === "shoprize" ? "active" : ""}`} onClick={() => setApp("shoprize")}>
          <ShoppingBag size={11} /> Shoprize
        </button>
        <button className={`seg-tab ${app === "jlpt" ? "active" : ""}`} onClick={() => setApp("jlpt")}>
          <Sparkles size={11} /> JLPT AI
        </button>
        <button className={`seg-tab ${app === "cardiac" ? "active" : ""}`} onClick={() => setApp("cardiac")}>
          <HeartPulse size={11} /> Telehealth
        </button>
      </div>

      {app === "shoprize" && (
        <>
          <div className="mini-nav">
            <span className="mini-logo">Shoprize</span>
            <span className="cart-badge">
              <ShoppingBag size={14} />
              <span className="badge-count">{cart}</span>
            </span>
          </div>
          <div className="duo-card">
            <div className="between">
              <span className="kicker pink">Fashion Commerce Flow</span>
              <span className="stock">In Stock</span>
            </div>
            <h4 className="card-title">Himalayan Woolen Cardigan</h4>
            <div className="price-row">
              <span className="price">NPR 4,850</span>
              <span className="muted-xs">Inc. VAT</span>
            </div>
            <div className="chip-row">
              <span className="chip purple">Khalti Gateway</span>
              <span className="chip green">eSewa Pay</span>
            </div>
          </div>
          {ordered ? (
            <div className="success-box">
              <CheckCircle2 size={18} />
              <div>
                <strong>Payment Verified!</strong>
                <span>Order created via BLoC stream</span>
              </div>
            </div>
          ) : (
            <div className="btn-row">
              <button className="app-btn" onClick={() => setCart((c) => c + 1)}>+ Add to Cart</button>
              <button
                className="app-btn primary"
                onClick={() => {
                  setOrdered(true);
                  setTimeout(() => setOrdered(false), 2800);
                }}
              >
                <CreditCard size={13} /> Checkout
              </button>
            </div>
          )}
          <div className="callout">
            <span>Live Architecture</span>
            BLoC State Machine + Real-Time Khalti/eSewa Order Tracking
          </div>
        </>
      )}

      {app === "jlpt" && (
        <>
          <div className="mini-nav">
            <span className="mini-logo">JLPT Nepali • N3</span>
            <span className="chip purple"><Sparkles size={10} /> Gemini 1.5</span>
          </div>
          <div className="quiz-card" onClick={() => setFlipped(!flipped)}>
            {!flipped ? (
              <>
                <span className="kanji">開発者</span>
                <span className="romaji">かいはつしゃ • Kaihatsusha</span>
                <span className="muted-xs">Tap card for Gemini AI breakdown</span>
              </>
            ) : (
              <div className="quiz-back">
                <strong>Meaning: "Developer / Engineer"</strong>
                <p>
                  開 (Kai: Open) + 発 (Hatsu: Launch) + 者 (Sha: Person). Used in mobile
                  software engineering.
                </p>
                <span className="nepali">नेपाली: सफ्टवेयर विकासकर्ता</span>
              </div>
            )}
          </div>
          <button className="app-btn outline" onClick={() => setFlipped(!flipped)}>
            <RefreshCw size={13} /> {flipped ? "Show Front Card" : "Flip Flashcard"}
          </button>
          <div className="callout">
            <span>Live Architecture</span>
            Streaming token parser + Spaced Repetition Engine
          </div>
        </>
      )}

      {app === "cardiac" && (
        <>
          <div className="mini-nav">
            <span className="mini-logo">National Cardiac</span>
            <span className="chip red">Encrypted Lab</span>
          </div>
          <div className="duo-card doctor">
            <span className="doctor-avatar"></span>
            <div>
              <h5 className="card-title">Dr. R. Shrestha, MD</h5>
              <span className="muted-xs">Senior Cardiologist • Cath Lab</span>
            </div>
          </div>
          <div>
            <span className="kicker">Select Outpatient Slot</span>
            <div className="chip-row">
              <span className="chip red active">Today 3:30 PM</span>
              <span className="chip">Tomorrow 10:00 AM</span>
            </div>
          </div>
          {booked ? (
            <div className="success-box">
              <CheckCircle2 size={18} />
              <div>
                <strong>Consult Confirmed!</strong>
                <span>SMS & encrypted receipt sent</span>
              </div>
            </div>
          ) : (
            <button
              className="app-btn primary"
              onClick={() => {
                setBooked(true);
                setTimeout(() => setBooked(false), 2800);
              }}
            >
              Confirm Telehealth Slot
            </button>
          )}
          <div className="callout">
            <span>Live Architecture</span>
            Socket.IO WebRTC consultations + Encrypted PDF Viewer
          </div>
        </>
      )}
    </div>
  );
};

/* =============================== CODE ============================== */
export const CodeApp = () => {
  const [idx, setIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const snip = codeSnippets[idx] || codeSnippets[0];

  const copy = () => {
    navigator.clipboard.writeText(snip.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="app-stack">
      <div className="tab-scroll">
        {codeSnippets.map((s, i) => (
          <button
            key={s.id}
            className={`file-tab ${i === idx ? "active" : ""}`}
            onClick={() => setIdx(i)}
          >
            <FileCode size={12} />
            <span>{s.title}</span>
          </button>
        ))}
      </div>

      <div className="code-window">
        <div className="code-bar">
          <span className="chip">{snip.label}</span>
          <button className="copy-btn" onClick={copy}>
            {copied ? <Check size={13} className="text-emerald" /> : <Copy size={13} />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
        <pre className="code-pre">
          <code>{snip.code}</code>
        </pre>
      </div>

      <div className="duo-card highlight">
        <span className="kicker">Architectural Pattern</span>
        <h4 className="card-title">{snip.tagline}</h4>
        <p className="card-text">{snip.description}</p>
      </div>
    </div>
  );
};

/* ============================= PROJECTS ============================ */
export const ProjectsApp = ({ project, setProject }) => {
  const [category, setCategory] = useState("All");

  if (project) {
    return (
      <div className="app-stack" style={{ "--accent-color": "#C5A982" }}>
        <button className="back-link" onClick={() => setProject(null)}>
          <ChevronLeft size={15} /> Projects
        </button>

        <div className="duo-card highlight accent">
          <span className="kicker">{project.category}</span>
          <h3 className="detail-title">{project.title}</h3>
          <p className="card-text">{project.subtitle}</p>
          <div className="chip-row">
            {project.platforms?.map((p) => (
              <span key={p} className="chip">
                {p === "Web" ? <Globe size={10} /> : <Smartphone size={10} />} {p}
              </span>
            ))}
          </div>
        </div>

        <div className="duo-card">
          <span className="kicker">Overview & Problem Solved</span>
          <p className="card-text">{project.description}</p>
          {project.extendedDetails && <p className="card-text dim">{project.extendedDetails}</p>}
        </div>

        {project.features && (
          <div className="duo-card">
            <span className="kicker">Key Technical Features</span>
            <ul className="spec-list">
              {project.features.map((f) => (
                <li key={f}>
                  <CheckCircle2 size={13} className="text-emerald" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="duo-card">
          <span className="kicker">Architecture & Technologies</span>
          <div className="chip-row">
            {project.tech?.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        {(project.links?.playStore || project.links?.appStore) && (
          <div className="btn-row">
            {project.links.playStore && (
              <a href={project.links.playStore} target="_blank" rel="noopener noreferrer" className="app-btn primary">
                <Smartphone size={13} /> Google Play
              </a>
            )}
            {project.links.appStore && (
              <a href={project.links.appStore} target="_blank" rel="noopener noreferrer" className="app-btn">
                <ExternalLink size={13} /> App Store
              </a>
            )}
          </div>
        )}
      </div>
    );
  }

  const list = category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <div className="app-stack">
      <div className="tab-scroll">
        {projectCategories.map((c) => (
          <button
            key={c}
            className={`filter-chip ${category === c ? "active" : ""}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {list.map((p) => (
        <button
          key={p.id}
          className="project-row"
          style={{ "--accent-color": "#C5A982" }}
          onClick={() => setProject(p)}
        >
          <span className="project-dot"></span>
          <span className="project-main">
            <strong>{p.title}</strong>
            <span className="muted-xs">{p.subtitle}</span>
            <span className="chip-row">
              {p.tech.slice(0, 3).map((t) => (
                <span key={t} className="chip tiny">{t}</span>
              ))}
              {p.tech.length > 3 && <span className="chip tiny">+{p.tech.length - 3}</span>}
            </span>
          </span>
          <ChevronRight size={16} className="muted-icon" />
        </button>
      ))}
    </div>
  );
};

/* ============================== CAREER ============================= */
export const CareerApp = () => {
  const [open, setOpen] = useState(experiences[0]?.id);

  return (
    <div className="app-stack">
      <div className="timeline">
        {experiences.map((job) => {
          const isOpen = open === job.id;
          return (
            <div key={job.id} className={`tl-item ${isOpen ? "open" : ""}`}>
              <span className="tl-node">
                <GitCommit size={12} />
              </span>
              <button className="tl-card" onClick={() => setOpen(isOpen ? null : job.id)}>
                <span className="tl-meta">
                  <span className="chip tiny">{job.period}</span>
                  <span className="muted-xs">
                    <MapPin size={10} /> {job.location}
                  </span>
                </span>
                <strong className="tl-role">{job.role}</strong>
                {job.company && <span className="tl-company">@ {job.company}</span>}
                <span className="muted-xs">{job.tagline}</span>

                {isOpen && (
                  <span className="tl-body">
                    <ul className="spec-list">
                      {job.duties.map((d) => (
                        <li key={d}>
                          <span className="plus">+</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="chip-row">
                      {job.tech.map((t) => (
                        <span key={t} className="chip tiny">{t}</span>
                      ))}
                    </span>
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ============================== STACK ============================== */
export const StackApp = () => (
  <div className="app-stack">
    {skillCategories.map((cat) => {
      const Icon = skillIcons[cat.icon] || Smartphone;
      return (
        <div key={cat.title} className="duo-card">
          <div className="stack-head">
            <span className="stack-icon" style={{ color: "#C5A982", background: "rgba(197,169,130,0.14)" }}>
              <Icon size={16} />
            </span>
            <h4 className="card-title">{cat.title}</h4>
          </div>
          <div className="chip-row">
            {cat.skills.map((s) => (
              <span key={s.name} className="skill-pill">
                {s.name}
                <em>{s.level}</em>
              </span>
            ))}
          </div>
        </div>
      );
    })}
  </div>
);

/* ============================= CONTACT ============================= */
export const ContactApp = () => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const send = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Hello Anom,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="app-stack">
      <p className="card-text dim">
        Available for senior mobile roles, enterprise contracts, and cross-platform
        architecture consultations.
      </p>

      <button className="channel" onClick={copy}>
        <span className="channel-icon"><Mail size={17} /></span>
        <span className="channel-text">
          <span className="muted-xs">Email</span>
          <strong>{personalInfo.email}</strong>
        </span>
        {copied ? <Check size={15} className="text-emerald" /> : <Copy size={15} className="muted-icon" />}
      </button>

      <a className="channel" href={`https://wa.me/977${personalInfo.phoneRaw}`} target="_blank" rel="noopener noreferrer">
        <span className="channel-icon green"><WhatsAppIcon size={17} /></span>
        <span className="channel-text">
          <span className="muted-xs">WhatsApp</span>
          <strong>+977 {personalInfo.phoneRaw}</strong>
        </span>
        <ArrowUpRight size={15} className="muted-icon" />
      </a>

      <a className="channel" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
        <span className="channel-icon blue"><LinkedinIcon size={17} /></span>
        <span className="channel-text">
          <span className="muted-xs">LinkedIn</span>
          <strong>in/anom-maharjan</strong>
        </span>
        <ArrowUpRight size={15} className="muted-icon" />
      </a>

      <form className="duo-card contact-form" onSubmit={send}>
        <span className="kicker">Send a quick note</span>
        <input
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          required
          rows={3}
          placeholder="Tell me about your app, goals, or timeline..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit" className="cta-btn">
          <Send size={13} />
          <span>Draft Message via Email</span>
        </button>
      </form>
    </div>
  );
};
