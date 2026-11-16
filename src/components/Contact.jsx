import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
} from "lucide-react";
import { LinkedinIcon, WhatsAppIcon } from "./Icons";
import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      `Inquiry from ${formData.name || "Portfolio Visitor"}`
    );
    const mailtoBody = encodeURIComponent(
      `Hello Anom,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`section contact-section ${isVisible ? "reveal-active" : "reveal-hidden"}`}
    >
      <div className="contact-container-clean">
        <p className="contact-pretitle">05. What's Next?</p>
        <h2 className="contact-main-title">Get In Touch</h2>
        <p className="contact-text-clean">
          I am currently open to new mobile engineering opportunities, enterprise Flutter contracts, and consulting roles. Whether you have a question or an exciting project in mind, my inbox is always open.
        </p>

        {/* Primary Action Buttons */}
        <div className="contact-primary-actions">
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn btn-primary contact-main-btn"
          >
            <Mail size={16} />
            <span>Say Hello Directly</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="btn btn-outline copy-email-btn"
            title="Copy email address"
          >
            {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
            <span>{copied ? "Email Copied!" : "Copy Email"}</span>
          </button>
        </div>

        {/* Minimal Direct Channels */}
        <div className="contact-channels-row">
          <a
            href={`https://wa.me/977${personalInfo.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-item"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp (+977 {personalInfo.phoneRaw})</span>
          </a>
          <span className="channel-divider">•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-item"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Quick Message Dropdown Toggle */}
        <div className="quick-message-wrap">
          <button
            type="button"
            className="toggle-form-btn"
            onClick={() => setShowForm(!showForm)}
          >
            <MessageSquare size={14} />
            <span>{showForm ? "Hide Quick Message" : "Or send a quick message from here"}</span>
          </button>

          {showForm && (
            <form className="minimal-contact-form" onSubmit={handleSendMail}>
              <div className="minimal-form-row">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <textarea
                rows={3}
                required
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <button type="submit" className="minimal-submit-btn">
                <Send size={14} />
                <span>Open in Email Client</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
