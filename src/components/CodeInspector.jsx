import React, { useState } from "react";
import { codeSnippets } from "../data/codeSnippets";
import {
  Code2,
  Copy,
  Check,
  Terminal,
  FileCode,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import "./CodeInspector.css";

const CodeInspector = () => {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentSnippet = codeSnippets[activeSnippetIndex] || codeSnippets[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-inspector" className="code-inspector-section">
      <div className="section-eyebrow-row">
        <div className="eyebrow-badge">
          <Code2 size={13} className="text-cyan" />
          <span>SOURCE CODE & ARCHITECTURE</span>
        </div>
        <h2 className="section-main-heading">How I Architect Flutter Systems</h2>
        <p className="section-subtext">
          Direct snippets from production systems showing reactive state machines, offline-first SQLite sync, and multimodal AI pipelines.
        </p>
      </div>

      <div className="inspector-window-frame">
        {/* IDE Top Bar / File Tabs */}
        <div className="ide-top-bar">
          <div className="ide-controls">
            <span className="ide-dot red"></span>
            <span className="ide-dot yellow"></span>
            <span className="ide-dot green"></span>
          </div>

          <div className="ide-tabs-scroll">
            {codeSnippets.map((item, idx) => (
              <button
                key={item.id}
                className={`ide-tab ${activeSnippetIndex === idx ? "active" : ""}`}
                onClick={() => setActiveSnippetIndex(idx)}
              >
                <FileCode size={13} className="ide-tab-icon" />
                <span>{item.title}</span>
                <span className="ide-tab-badge">{item.label}</span>
              </button>
            ))}
          </div>

          <button
            className="ide-copy-btn"
            onClick={handleCopyCode}
            title="Copy Dart snippet"
          >
            {copied ? (
              <Check size={14} className="text-emerald" />
            ) : (
              <Copy size={14} />
            )}
            <span>{copied ? "Copied" : "Copy Code"}</span>
          </button>
        </div>

        {/* IDE Body: Split View (Code on Left, Architectural Note on Right) */}
        <div className="ide-split-body">
          {/* Code Viewer */}
          <div className="code-viewport">
            <pre className="code-pre">
              <code>{currentSnippet.code}</code>
            </pre>
          </div>

          {/* Architecture Insights Pane */}
          <div className="architecture-pane">
            <div className="arch-header">
              <span className="arch-label">Architectural Pattern</span>
              <h4 className="arch-title">{currentSnippet.tagline}</h4>
            </div>

            <p className="arch-desc">{currentSnippet.description}</p>

            <div className="arch-highlights-list">
              <span className="highlight-title">Key Engineering Principles:</span>
              <div className="highlight-item">
                <CheckCircle2 size={14} className="text-cyan" />
                <span>Zero UI-thread blocking with asynchronous Isolates & Streams</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={14} className="text-cyan" />
                <span>Type-safe domain entities with pure Dart immutability</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={14} className="text-cyan" />
                <span>Testable units decouple presentation from network & disk I/O</span>
              </div>
            </div>

            <div className="arch-runtime-info">
              <span className="runtime-label">Target Runtime:</span>
              <span className="runtime-val">Dart 3.x / Flutter 3.x (iOS & Android)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeInspector;
