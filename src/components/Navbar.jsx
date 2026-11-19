import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Download,
  Terminal,
  Search,
  Zap,
} from "lucide-react";
import "./Navbar.css";

const Navbar = ({ onOpenCommandPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("bento-overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "bento-overview",
        "code-inspector",
        "projects-bento",
        "career-changelog",
        "tech-stack",
        "contact-widget",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", url: "#bento-overview", id: "bento-overview" },
    { name: "Architecture", url: "#code-inspector", id: "code-inspector" },
    { name: "Projects", url: "#projects-bento", id: "projects-bento" },
    { name: "Changelog", url: "#career-changelog", id: "career-changelog" },
    { name: "Stack", url: "#tech-stack", id: "tech-stack" },
    { name: "Contact", url: "#contact-widget", id: "contact-widget" },
  ];

  const handleNavClick = (e, url) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = url.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav className={`navbar-capsule ${scrolled ? "scrolled" : ""}`}>
        <a
          href="#bento-overview"
          onClick={(e) => handleNavClick(e, "#bento-overview")}
          className="capsule-logo"
        >
          <img src="/favicon.png" alt="Anom" className="capsule-avatar" />
          <span className="capsule-brand-name">Anom.dev</span>
        </a>

        {/* Links */}
        <div className={`capsule-nav-menu ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              onClick={(e) => handleNavClick(e, link.url)}
              className={`capsule-nav-link ${
                activeSection === link.id ? "active" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="capsule-actions">
          <button
            id="cmd-k-trigger"
            className="capsule-cmd-btn"
            onClick={onOpenCommandPalette}
            title="Open Command Palette (⌘K)"
          >
            <Search size={14} />
            <span className="cmd-label">⌘K</span>
          </button>

          <a
            href="/Anom_Maharjan_Resume.pdf"
            download="Anom_Maharjan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="capsule-cv-btn"
            title="Download Resume (PDF)"
          >
            <Download size={13} />
            <span className="cv-btn-text">CV</span>
          </a>

          <button
            className="capsule-mobile-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
