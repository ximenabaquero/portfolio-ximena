import { CONFIG } from "../config.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <div className="section-wrapper" id="about">
      <Reveal>
        <div className="section-eyebrow">01 — About</div>
      </Reveal>
      <Reveal delay={100}>
        <div className="section-title">Who I am</div>
      </Reveal>

      <div className="about-grid">
        <Reveal delay={200}>
          <div className="about-text">
            {CONFIG.about
              .split("\n")
              .filter(Boolean)
              .map((p, i) => (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: p.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                  }}
                />
              ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="stats-grid">
            {CONFIG.stats.map((s, i) => (
              <div key={i} className="stat-box">
                <div className="stat-num gradient-text">{s.num}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
