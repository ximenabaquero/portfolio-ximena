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
                    <div className="cert-pdf-thumb">
                      <iframe
                        src={`${c.pdfLink}#toolbar=0&navpanes=0&scrollbar=0&zoom=60`}
                        title={c.name}
                      />
                      <div className="cert-pdf-thumb-overlay" style={{ color: c.color }}>{t.certs.viewCert}</div>
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
