import React from "react";
import { stats } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Stats.css";

const Stats = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`stats-strip ${isVisible ? "reveal-active" : "reveal-hidden"}`}
    >
      <div className="stats-inner">
        {stats.map((item, index) => (
          <div key={index} className="stat-unit">
            <span className="stat-unit-value">{item.value}</span>
            <span className="stat-unit-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
