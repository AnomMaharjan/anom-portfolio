import React, { useState } from "react";
import Navbar from "./components/Navbar";
import IPhoneDuoHero from "./components/IPhoneDuoHero";
import CodeInspector from "./components/CodeInspector";
import ProjectsBento from "./components/ProjectsBento";
import CareerChangelog from "./components/CareerChangelog";
import TechStackDock from "./components/TechStackDock";
import ContactWidget from "./components/ContactWidget";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CommandPalette from "./components/CommandPalette";
import ProjectModal from "./components/ProjectModal";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  return (
    <div className="App">
      {/* ⌘K Command Palette */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Floating Glass Navbar */}
      <Navbar onOpenCommandPalette={() => setIsCmdOpen(true)} />

      {/* Main Container */}
      <main className="container">
        <IPhoneDuoHero onOpenCommandPalette={() => setIsCmdOpen(true)} />
        <CodeInspector />
        <ProjectsBento onSelectProject={(proj) => setSelectedProject(proj)} />
        <CareerChangelog />
        <TechStackDock />
        <ContactWidget />
      </main>

      {/* Footer & Scroll Tools */}
      <Footer />
      <ScrollToTop />

      {/* Deep Dive Project Specs Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
