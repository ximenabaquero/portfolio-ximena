import { CONFIG } from "../config.js";
import { useLang } from "./LangContext.jsx";
import Reveal from "./Reveal.jsx";

export default function Certifications() {
  const { t } = useLang();
  return (
    <div className="section-wrapper" id="certs">
      <Reveal>
        <div className="section-eyebrow">{t.certs.eyebrow}</div>
      </Reveal>
      <Reveal delay={100}>
        <div className="section-title">{t.certs.title}</div>
      </Reveal>

      <div className="certs-grid">
        {CONFIG.certifications.map((c, i) => {
          const tc = t.certs.items[i];
          return (
          <Reveal key={i} delay={i * 80}>
            <div
              className="cert-card"
              style={{ borderTopColor: c.color, borderTopWidth: 2 }}
            >
              <div className="cert-issuer" style={{ color: c.color }}>{c.issuer}</div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-desc">{tc ? tc.desc : c.desc}</div>
              <div className="cert-actions">
                {c.credentialLink ? (
                  <a
                    href={c.credentialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-link"
                    style={{ color: c.color }}
                  >
                    {t.certs.viewCredential}
                  </a>
                ) : (
                  <span className="cert-pending">{t.certs.comingSoon}</span>
                )}
                {c.pdfLink ? (
                  <a href={c.pdfLink} target="_blank" rel="noreferrer" style={{ display: "block", textDecoration: "none" }}>
                    <div className="cert-pdf-preview" style={{ borderColor: `${c.color}40` }}>
                      <div className="cert-pdf-icon" style={{ color: c.color }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                      <div className="cert-pdf-label">PDF</div>
                      <div className="cert-pdf-preview-overlay" style={{ background: `${c.color}18` }}>
                        <span style={{ color: c.color }}>{t.certs.viewCert}</span>
                      </div>
                    </div>
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
          );
        })}
      </div>
    </div>
  );
}
