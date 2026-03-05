import { CONFIG } from "../config.js";
import Reveal from "./Reveal.jsx";

export default function Certifications() {
  return (
    <div className="section-wrapper" id="certs">
      <Reveal>
        <div className="section-eyebrow">05 — Credentials</div>
      </Reveal>
      <Reveal delay={100}>
        <div className="section-title">Certifications</div>
      </Reveal>

      <div className="certs-grid">
        {CONFIG.certifications.map((c, i) => (
          <Reveal key={i} delay={i * 80}>
            <div
              className="cert-card"
              style={{ borderTopColor: c.color, borderTopWidth: 2 }}
            >
              <div className="cert-issuer" style={{ color: c.color }}>{c.issuer}</div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-desc">{c.desc}</div>
              <div className="cert-actions">
                {c.credentialLink ? (
                  <a
                    href={c.credentialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-link"
                    style={{ color: c.color }}
                  >
                    View credential →
                  </a>
                ) : (
                  <span className="cert-pending">Link coming soon</span>
                )}
                {c.pdfLink ? (
                  <a href={c.pdfLink} target="_blank" rel="noreferrer" style={{ display: "block", textDecoration: "none" }}>
                    <div className="cert-pdf-thumb">
                      <iframe src={c.pdfLink} title={c.name} />
                      <div className="cert-pdf-thumb-overlay">Ver certificado →</div>
                    </div>
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
