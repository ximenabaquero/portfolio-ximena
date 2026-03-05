import { CONFIG } from "../config.js";
import Reveal from "./Reveal.jsx";

export default function Timeline() {
  return (
    <div className="section-wrapper dark" id="timeline">
      <div className="inner">
        <Reveal>
          <div className="section-eyebrow">06 — Journey</div>
        </Reveal>
        <Reveal delay={100}>
          <div className="section-title">Experience &amp; Education</div>
        </Reveal>
        <Reveal delay={200}>
          <div className="timeline">
            {CONFIG.timeline.map((t, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">
                  {t.year}
                  <span
                    className="timeline-type-badge"
                    style={{
                      background:
                        t.type === "work"
                          ? "rgba(108,99,255,0.1)"
                          : t.type === "cert"
                          ? "rgba(0,212,255,0.1)"
                          : "rgba(255,107,157,0.1)",
                      border: `1px solid ${
                        t.type === "work"
                          ? "rgba(108,99,255,0.3)"
                          : t.type === "cert"
                          ? "rgba(0,212,255,0.3)"
                          : "rgba(255,107,157,0.3)"
                      }`,
                      color:
                        t.type === "work"
                          ? "var(--accent)"
                          : t.type === "cert"
                          ? "var(--accent2)"
                          : "var(--accent3)",
                    }}
                  >
                    {t.type}
                  </span>
                </div>
                <div className="timeline-title">{t.title}</div>
                <div className="timeline-place">{t.place}</div>
                <div className="timeline-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
