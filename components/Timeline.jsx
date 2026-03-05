import { CONFIG } from "../config.js";
import { useLang } from "./LangContext.jsx";
import Reveal from "./Reveal.jsx";

export default function Timeline() {
  const { t } = useLang();
  return (
    <div className="section-wrapper dark" id="timeline">
      <div className="inner">
        <Reveal>
          <div className="section-eyebrow">{t.timeline.eyebrow}</div>
        </Reveal>
        <Reveal delay={100}>
          <div className="section-title">{t.timeline.title}</div>
        </Reveal>
        <Reveal delay={200}>
          <div className="timeline">
            {CONFIG.timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">
                  {item.year}
                  <span
                    className="timeline-type-badge"
                    style={{
                      background:
                        item.type === "work"
                          ? "rgba(108,99,255,0.1)"
                          : item.type === "cert"
                          ? "rgba(0,212,255,0.1)"
                          : "rgba(255,107,157,0.1)",
                      border: `1px solid ${
                        item.type === "work"
                          ? "rgba(108,99,255,0.3)"
                          : item.type === "cert"
                          ? "rgba(0,212,255,0.3)"
                          : "rgba(255,107,157,0.3)"
                      }`,
                      color:
                        item.type === "work"
                          ? "var(--accent)"
                          : item.type === "cert"
                          ? "var(--accent2)"
                          : "var(--accent3)",
                    }}
                  >
                    {t.timeline.types[item.type] || item.type}
                  </span>
                </div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-place">{item.place}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
