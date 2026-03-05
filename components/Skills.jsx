import { CONFIG } from "../config.js";
import { useLang } from "./LangContext.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  const { t } = useLang();
  return (
    <div className="section-wrapper dark" id="skills">
      <div className="inner">
        <Reveal>
          <div className="section-eyebrow">{t.skills.eyebrow}</div>
        </Reveal>
        <Reveal delay={100}>
          <div className="section-title">{t.skills.title}</div>
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
