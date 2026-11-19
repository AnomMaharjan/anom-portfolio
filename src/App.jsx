import React, { useState, useRef } from "react";
import DuoSite from "./components/duo/DuoSite";
import CommandPalette from "./components/CommandPalette";
import "./App.css";

function App() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const navigateRef = useRef(null);

  const navigate = (id, project) => navigateRef.current?.(id, project);

  return (
    <div className="App">
      <h1 className="sr-only">
        Anom Maharjan, Flutter Developer & Software Engineer
      </h1>

      {/* ⌘K Command Palette */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onSelectProject={(proj) => navigate("projects", proj)}
        onNavigate={(id) => navigate(id)}
      />

      {/* The whole site lives inside the iPhone Duo */}
      <DuoSite
        navigateRef={navigateRef}
        onOpenPalette={() => setIsCmdOpen(true)}
      />
    </div>
  );
}

export default App;
