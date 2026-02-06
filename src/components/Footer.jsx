import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        {/* Placeholder social icons or text links */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
      <div className="credit">
        <a
          href="https://github.com/anommaharjan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Built by Anom Maharjan</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
