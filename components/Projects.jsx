import { CONFIG } from "../config.js";
import Reveal from "./Reveal.jsx";
import GithubIcon from "./GithubIcon.jsx";

export default function Projects() {
  return (
    <div className="section-wrapper dark" id="projects">
      <div className="inner">
        <Reveal>
          <div className="section-eyebrow">04 — Work</div>
        </Reveal>
        <Reveal delay={100}>
          <div className="section-title">Featured Projects</div>
        </Reveal>

        <div className="project-list">
          {CONFIG.projects.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="project-card">
                <div>
                  <div className="proj-num">Project {p.number}</div>
                  <div className="proj-name">{p.name}</div>
                  <div
                    className="proj-badge"
                    style={{
                      background: `${p.badgeColor}15`,
                      border: `1px solid ${p.badgeColor}40`,
                      color: p.badgeColor,
                    }}
                  >
                    ⬤ {p.badge}
                  </div>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-tags">
                    {p.tags.map((t, j) => (
                      <span key={j} className="proj-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="proj-links">
                  {p.links.map((l, j) => (
                    <a
                      key={j}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link"
                    >
                      <GithubIcon /> {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
