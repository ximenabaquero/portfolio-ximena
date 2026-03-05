import { CONFIG } from "../config.js";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-tag">// Available for internships · {CONFIG.location}</div>
          <h1 className="hero-name">
            {CONFIG.name.split(" ")[0]}<br />
            <span className="gradient-text">{CONFIG.name.split(" ")[1]}</span>
          </h1>
          <div className="hero-role">
            {CONFIG.role}
            <span className="sep">×</span>Full-Stack
            <span className="sep">×</span>Health Tech
          </div>
          <p className="hero-desc">
            Building production SaaS applications for the health sector. Specialized in Next.js, React &amp; TypeScript — with real clients, real systems, real impact.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View my work</a>
            <a href={`mailto:${CONFIG.email}`} className="btn-outline">Get in touch</a>
          </div>
        </div>

        <div className="photo-container">
          <div className="photo-frame">
            {CONFIG.photo ? (
              <>
                <img src={CONFIG.photo} alt={CONFIG.name} />
                <div className="photo-overlay" />
              </>
            ) : (
              <div className="photo-placeholder">
                {/* 📸 Replace CONFIG.photo with your image URL */}
                <span style={{ fontSize: 32 }}>📸</span>
                <span>Add your photo</span>
                <span style={{ fontSize: 9, opacity: 0.5 }}>CONFIG.photo</span>
              </div>
            )}
          </div>
          <div className="photo-corner tl" />
          <div className="photo-corner tr" />
          <div className="photo-corner bl" />
          <div className="photo-corner br" />
        </div>
      </div>
    </div>
  );
}
