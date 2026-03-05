import { useState, useEffect } from "react";
import { CONFIG } from "../config.js";
import Reveal from "./Reveal.jsx";

export default function Languages() {
  const [barWidths, setBarWidths] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const widths = {};
          CONFIG.languages.forEach((l) => { widths[l.lang] = l.percent; });
          setBarWidths(widths);
        }
      },
      { threshold: 0.3 }
    );
    const el = document.getElementById("languages-section");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="section-wrapper" id="languages-section">
      <Reveal>
        <div className="section-eyebrow">03 — Languages</div>
      </Reveal>
      <Reveal delay={100}>
        <div className="section-title">Idiomas</div>
      </Reveal>
      <Reveal delay={200}>
        <div className="lang-list">
          {CONFIG.languages.map((l, i) => (
            <div key={i} className="lang-item">
              <div className="lang-header">
                <div className="lang-name">{l.lang}</div>
                <div className="lang-level">{l.level}</div>
              </div>
              <div className="lang-bar-bg">
                <div
                  className="lang-bar-fill"
                  style={{
                    width: `${barWidths[l.lang] || 0}%`,
                    background: `linear-gradient(90deg, ${l.color}, ${l.color}aa)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
