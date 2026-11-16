import React, { useEffect, useState } from "react";

const SpotlightEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
        background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.05), transparent 80%)`,
        transition: "background 0.15s ease-out",
      }}
    />
  );
};

export default SpotlightEffect;
