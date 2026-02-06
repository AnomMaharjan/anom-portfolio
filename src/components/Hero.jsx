import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-subtitle">Hi, my name is</h1>
        <h2 className="hero-title">Anom Maharjan.</h2>
        <h3 className="hero-title-secondary">
          I build things for mobile and web.
        </h3>
        <p className="hero-description">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products using{" "}
          <strong>Flutter</strong> and <strong>React</strong>.
        </p>
        <a href="#work" className="btn hero-btn">
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;
