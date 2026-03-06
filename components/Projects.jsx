import { useRef } from "react";
import { CONFIG } from "../config.js";
import { useLang } from "./LangContext.jsx";
import Reveal from "./Reveal.jsx";
import GithubIcon from "./GithubIcon.jsx";

export default function Projects() {
  const { t } = useLang();
  const videoRefs = useRef({});

  const handleMouseEnter = (i) => {
    const v = videoRefs.current[i];
    if (v) { v.currentTime = 0; v.play(); }
  };
  const handleMouseLeave = (i) => {
    const v = videoRefs.current[i];
    if (v) { v.pause(); v.currentTime = 0; }
  };

  return (
    <div className="section-wrapper dark" id="projects">
      <div className="inner">
        <Reveal>
          <div className="section-eyebrow">{t.projects.eyebrow}</div>
        </Reveal>
        <Reveal delay={100}>
          <div className="section-title">{t.projects.title}</div>
        </Reveal>

        <div className="project-list">
          {CONFIG.projects.map((p, i) => {
            const tp = t.projects.items[i];
            return (
            <Reveal key={i} delay={i * 100}>
              <div
                className="project-card"
                onMouseEnter={() => p.videoLink && handleMouseEnter(i)}
                onMouseLeave={() => p.videoLink && handleMouseLeave(i)}
              >
                <div>
                  <div className="proj-num">{t.projects.projectLabel} {p.number}</div>
                  <div className="proj-name">{p.name}</div>
                  <div
                    className="proj-badge"
                    style={{
                      background: `${p.badgeColor}15`,
                      border: `1px solid ${p.badgeColor}40`,
                      color: p.badgeColor,
                    }}
                  >
                    ⬤ {tp ? tp.badge : p.badge}
                  </div>
                  <p className="proj-desc">{tp ? tp.desc : p.desc}</p>
                  <div className="proj-tags">
                    {p.tags.map((tag, j) => (
                      <span key={j} className="proj-tag">{tag}</span>
                    ))}
                  </div>
                  {p.videoLink && (
                    <div className="proj-video-wrap">
                      <video
                        ref={el => videoRefs.current[i] = el}
                        src={p.videoLink}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="proj-video"
                      />
                      <div className="proj-video-hint">▶ Demo</div>
                    </div>
                  )}
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
                      <GithubIcon /> {tp && tp.links[j] ? tp.links[j].label : l.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
