import { CONFIG } from "../config.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-inner">
        <Reveal>
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>
            07 — Contact
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="contact-title">
            Let's build<br />
            <span className="gradient-text">something.</span>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="contact-sub">
            I'm currently looking for internship opportunities in Bogotá or remote. If you have a
            project or a role that matches my profile, I'd love to hear from you.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="contact-links">
            <a href={`mailto:${CONFIG.email}`} className="btn-primary">Send email</a>
            <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
            <a href={CONFIG.github} target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
