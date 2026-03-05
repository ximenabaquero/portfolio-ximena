import { CONFIG } from "../config.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <div className="section-wrapper dark" id="skills">
      <div className="inner">
        <Reveal>
          <div className="section-eyebrow">02 — Stack</div>
        </Reveal>
        <Reveal delay={100}>
          <div className="section-title">Technologies</div>
        </Reveal>
        <Reveal delay={200}>
          <div className="skills-categories">
            {CONFIG.skills.map((cat, i) => (
              <div key={i}>
                <div className="skill-cat-label">{cat.category}</div>
                <div className="skill-chips">
                  {cat.items.map((item, j) => (
                    <div key={j} className="skill-chip">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
