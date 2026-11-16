import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check which section is in viewport
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
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
    { name: "About", url: "#about", id: "about" },
    { name: "Experience", url: "#experience", id: "experience" },
    { name: "Projects", url: "#projects", id: "projects" },
    { name: "Skills", url: "#skills", id: "skills" },
    { name: "Contact", url: "#contact", id: "contact" },
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
    <>
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="logo"
            aria-label="Home"
          >
            <div className="logo-badge">
              <span className="logo-symbol">&lt;</span>
              <span className="logo-initials">AM</span>
              <span className="logo-symbol">/&gt;</span>
            </div>
            <span className="logo-text">Anom.dev</span>
          </a>

          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <ol>
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <a
                    href={link.url}
                    onClick={(e) => handleNavClick(e, link.url)}
                    className={activeSection === link.id ? "active-link" : ""}
                  >
                    <span className="nav-number">0{index + 1}.</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ol>
            <div className="nav-actions">
              <a
                href="/Anom_Maharjan_Resume.pdf"
                download="Anom_Maharjan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
                title="Download Anom Maharjan's CV"
              >
                <Download size={15} />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <button
            className="hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
