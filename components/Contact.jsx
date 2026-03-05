import { CONFIG } from "../config.js";
import { useLang } from "./LangContext.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const { t } = useLang();
  return (
    <div className="contact-section" id="contact">
      <div className="contact-inner">
        <Reveal>
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>
            {t.contact.eyebrow}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="contact-title">
            {t.contact.title1}<br />
            <span className="gradient-text">{t.contact.title2}</span>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="contact-sub">{t.contact.sub}</p>
        </Reveal>
        <Reveal delay={300}>
          <div className="contact-links">
            <a href={`mailto:${CONFIG.email}`} className="btn-primary">{t.contact.emailBtn}</a>
            <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
            <a href={CONFIG.github} target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
