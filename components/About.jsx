import { useLang } from "./LangContext.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  const { t } = useLang();
  return (
    <div className="section-wrapper" id="about">
      <Reveal>
        <div className="section-eyebrow">{t.about.eyebrow}</div>
      </Reveal>
      <Reveal delay={100}>
        <div className="section-title">{t.about.title}</div>
      </Reveal>

      <div className="about-grid">
        <Reveal delay={200}>
          <div className="about-text">
            {t.about.text
              .split("\n")
              .filter(Boolean)
              .reduce((acc, line) => {
                if (line.startsWith("•")) {
                  const last = acc[acc.length - 1];
                  if (last?.type === "list") {
                    last.items.push(line.slice(1).trim());
                  } else {
                    acc.push({ type: "list", items: [line.slice(1).trim()] });
                  }
                } else {
                  acc.push({ type: "para", text: line });
                }
                return acc;
              }, [])
              .map((block, i) => {
                if (block.type === "list") {
                  return (
                    <ul key={i} className="about-list">
                      {block.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: block.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
                );
              })}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="stats-grid">
            {t.about.stats.map((s, i) => (
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
