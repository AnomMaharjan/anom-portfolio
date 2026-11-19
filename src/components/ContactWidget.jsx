import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { LinkedinIcon, WhatsAppIcon, GithubIcon } from "./Icons";
import "./ContactWidget.css";

const ContactWidget = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
    <section id="contact-widget" className="contact-widget-section">
      <div className="section-eyebrow-row text-center">
        <div className="eyebrow-badge center-badge">
          <Mail size={13} className="text-cyan" />
          <span>DIRECT CHANNELS</span>
        </div>
        <h2 className="section-main-heading">Let's Build Something Exceptional</h2>
        <p className="section-subtext center-text">
          Available for senior mobile roles, enterprise contracts, and bespoke cross-platform architecture consultations.
        </p>
      </div>

      <div className="contact-bento-grid">
        {/* Direct Channels Card */}
        <div className="contact-direct-card">
          <h3 className="direct-card-title">Quick Connect</h3>
          <p className="direct-card-sub">
            Preferred channels for async communications and quick inquiries.
          </p>

          <div className="direct-channels-list">
            <div className="direct-channel-item" onClick={handleCopyEmail}>
              <div className="channel-icon-box">
                <Mail size={18} />
              </div>
              <div className="channel-text-info">
                <span className="channel-label">Email Address</span>
                <span className="channel-val">{personalInfo.email}</span>
              </div>
              <button className="channel-copy-btn">
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <a
              href={`https://wa.me/977${personalInfo.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="direct-channel-item link-item"
            >
              <div className="channel-icon-box whatsapp">
                <WhatsAppIcon size={18} />
              </div>
              <div className="channel-text-info">
                <span className="channel-label">WhatsApp</span>
                <span className="channel-val">+977 {personalInfo.phoneRaw}</span>
              </div>
              <ArrowUpRight size={16} className="channel-arrow" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="direct-channel-item link-item"
            >
              <div className="channel-icon-box linkedin">
                <LinkedinIcon size={18} />
              </div>
              <div className="channel-text-info">
                <span className="channel-label">LinkedIn</span>
                <span className="channel-val">in/anom-maharjan</span>
              </div>
              <ArrowUpRight size={16} className="channel-arrow" />
            </a>
          </div>
        </div>

        {/* Quick Message Card */}
        <div className="contact-form-card">
          <h3 className="direct-card-title">Send a Quick Note</h3>
          <p className="direct-card-sub">
            Generates a prefilled draft in your default email client.
          </p>

          <form className="widget-form" onSubmit={handleSendMail}>
            <div className="form-two-col">
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
              rows={4}
              required
              placeholder="Tell me about your app, goals, or timeline..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button type="submit" className="widget-submit-btn">
              <Send size={14} />
              <span>Draft Message via Email</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactWidget;
