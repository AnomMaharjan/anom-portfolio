import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title contact-title">What's Next?</h2>
      <h2 className="contact-heading">Get In Touch</h2>
      <p className="contact-description">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a href="mailto:hello@example.com" className="btn contact-btn">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
