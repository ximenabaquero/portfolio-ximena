export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');

  :root {
    --bg: #080810;
    --bg2: #0d0d18;
    --surface: #111120;
    --border: #1c1c30;
    --accent: #6c63ff;
    --accent2: #00d4ff;
    --accent3: #ff6b9d;
    --text: #e8e8f2;
    --muted: #5a5a7a;
    --mono: 'Space Mono', monospace;
    --sans: 'Syne', sans-serif;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--sans);
    overflow-x: hidden;
    cursor: none;
  }

  .cursor {
    width: 10px; height: 10px;
    background: var(--accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s;
    mix-blend-mode: difference;
  }

  .cursor-ring {
    width: 32px; height: 32px;
    border: 1.5px solid rgba(108,99,255,0.6);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    mix-blend-mode: difference;
  }

  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 18px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(20px);
    background: rgba(8,8,16,0.85);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--accent);
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .nav-links { display: flex; gap: 28px; }
  .nav-links a {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 3px;
    text-transform: uppercase;
    transition: color 0.3s;
    cursor: none;
  }
  .nav-links a:hover { color: var(--accent2); }
  .lang-toggle {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--accent);
    background: none;
    border: 1px solid rgba(108,99,255,0.4);
    padding: 4px 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    cursor: none;
    transition: all 0.3s;
    margin-left: 8px;
  }
  .lang-toggle:hover {
    background: rgba(108,99,255,0.15);
    border-color: var(--accent);
  }
  .nav-mobile { display: none; align-items: center; gap: 10px; }
  .hamburger {
    display: flex; flex-direction: column; justify-content: center; gap: 5px;
    width: 36px; height: 36px;
    background: none; border: 1px solid var(--border);
    padding: 8px; cursor: none;
  }
  .ham-line {
    display: block; width: 100%; height: 1.5px;
    background: var(--text); transition: all 0.3s;
  }
  .nav-drawer {
    position: fixed; top: 57px; left: 0; right: 0;
    background: rgba(8,8,16,0.97);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    display: flex; flex-direction: column;
    z-index: 99;
  }
  .nav-drawer a {
    padding: 18px 24px;
    font-family: var(--mono); font-size: 11px;
    color: var(--muted); text-decoration: none;
    letter-spacing: 3px; text-transform: uppercase;
    border-bottom: 1px solid var(--border);
    transition: color 0.2s;
    cursor: none;
  }
  .nav-drawer a:hover { color: var(--accent2); }

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 80px 80px;
    position: relative;
    overflow: hidden;
  }

  .hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px);
    background-size: 64px 64px;
    animation: gridMove 25s linear infinite;
  }
  @keyframes gridMove {
    from { transform: translateY(0); }
    to { transform: translateY(64px); }
  }

  .hero-glow {
    position: absolute;
    width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%);
    top: -150px; right: -150px;
    animation: glowPulse 5s ease-in-out infinite;
  }
  .hero-glow2 {
    position: absolute;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%);
    bottom: -100px; left: 50px;
    animation: glowPulse 7s ease-in-out infinite reverse;
  }
  @keyframes glowPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.08); opacity: 0.7; }
  }

  .hero-content {
    position: relative; z-index: 2;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 80px;
    align-items: center;
    width: 100%;
    max-width: 1200px;
  }

  .hero-text {}

  .hero-tag {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 24px;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.2s forwards;
  }

  .hero-name {
    font-size: clamp(48px, 7vw, 88px);
    font-weight: 800;
    line-height: 0.92;
    letter-spacing: -4px;
    margin-bottom: 20px;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.4s forwards;
  }

  .gradient-text {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-role {
    font-family: var(--mono);
    font-size: 14px;
    color: var(--muted);
    margin-bottom: 32px;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.6s forwards;
  }
  .hero-role .sep { color: var(--accent3); margin: 0 10px; }

  .hero-desc {
    font-size: 15px;
    line-height: 1.9;
    color: var(--muted);
    max-width: 520px;
    margin-bottom: 44px;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.8s forwards;
  }

  .hero-ctas {
    display: flex; gap: 14px; flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.8s ease 1s forwards;
  }

  .photo-container {
    opacity: 0;
    animation: fadeUp 0.8s ease 0.5s forwards;
    position: relative;
  }
  .photo-frame {
    width: 320px; height: 380px;
    border: 1px solid var(--border);
    position: relative;
    overflow: hidden;
  }
  .photo-frame::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(108,99,255,0.2), transparent);
    z-index: 1;
  }
  .photo-frame img {
    width: 100%; height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
    transition: filter 0.4s;
  }
  .photo-frame:hover img { filter: grayscale(0%); }
  .photo-overlay {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: rgba(108,99,255,0.15);
    transition: background 0.35s, box-shadow 0.35s;
    pointer-events: none;
  }
  .photo-frame:hover .photo-overlay {
    background: rgba(108,99,255,0.35);
    box-shadow: inset 0 0 60px rgba(108,99,255,0.55), 0 0 40px rgba(108,99,255,0.3);
  }
  .photo-placeholder {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 12px;
    background: var(--surface);
    color: var(--muted);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 2px;
  }
  .photo-corner {
    position: absolute;
    width: 20px; height: 20px;
    border-color: var(--accent);
    border-style: solid;
  }
  .photo-corner.tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
  .photo-corner.tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
  .photo-corner.bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
  .photo-corner.br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

  .btn-primary {
    padding: 13px 28px;
    background: var(--accent);
    color: white;
    text-decoration: none;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: 1px solid var(--accent);
    cursor: none;
    transition: all 0.3s;
    display: inline-block;
  }
  .btn-primary:hover { background: transparent; color: var(--accent); transform: translateY(-2px); }

  .btn-outline {
    padding: 13px 28px;
    background: transparent;
    color: var(--text);
    text-decoration: none;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: 1px solid var(--border);
    cursor: none;
    transition: all 0.3s;
    display: inline-block;
  }
  .btn-outline:hover { border-color: var(--accent2); color: var(--accent2); transform: translateY(-2px); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .section-wrapper { padding: 100px 80px; max-width: 1360px; margin: 0 auto; }
  .section-wrapper.dark { background: var(--bg2); max-width: 100%; padding: 100px; }
  .section-wrapper.dark .inner { max-width: 1200px; margin: 0 auto; }

  .section-eyebrow {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--accent);
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 14px;
    display: flex; align-items: center; gap: 14px;
  }
  .section-eyebrow::after {
    content: ''; flex: 0 0 48px; height: 1px;
    background: var(--accent); opacity: 0.4;
  }

  .section-title {
    font-size: clamp(28px, 4.5vw, 52px);
    font-weight: 800;
    letter-spacing: -2px;
    line-height: 1;
    margin-bottom: 60px;
  }

  /* About */
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
  .about-text p { font-size: 14px; line-height: 1.9; color: var(--muted); margin-bottom: 16px; }
  .about-text strong { color: var(--text); }

  .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
  .stat-box {
    background: var(--surface); border: 1px solid var(--border);
    padding: 28px 24px; position: relative; overflow: hidden;
    transition: border-color 0.3s;
  }
  .stat-box:hover { border-color: var(--accent); }
  .stat-box::before {
    content: ''; position: absolute; top: 0; left: 0;
    width: 3px; height: 100%;
    background: linear-gradient(180deg, var(--accent), var(--accent2));
  }
  .stat-num { font-size: 44px; font-weight: 800; letter-spacing: -3px; line-height: 1; margin-bottom: 6px; }
  .stat-lbl { font-family: var(--mono); font-size: 10px; color: var(--muted); letter-spacing: 2px; text-transform: uppercase; }

  /* Skills */
  .skills-categories { display: flex; flex-direction: column; gap: 32px; }
  .skill-cat-label {
    font-family: var(--mono); font-size: 10px; color: var(--accent3);
    letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px;
  }
  .skill-chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .skill-chip {
    padding: 8px 16px;
    background: var(--surface); border: 1px solid var(--border);
    font-family: var(--mono); font-size: 11px; color: var(--muted);
    letter-spacing: 1px; transition: all 0.3s; cursor: default;
  }
  .skill-chip:hover { border-color: var(--accent); color: var(--text); transform: translateY(-3px); background: rgba(108,99,255,0.08); }

  /* Languages */
  .lang-list { display: flex; flex-direction: column; gap: 32px; max-width: 600px; }
  .lang-item {}
  .lang-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
  .lang-name { font-size: 18px; font-weight: 700; }
  .lang-level { font-family: var(--mono); font-size: 11px; color: var(--muted); letter-spacing: 2px; }
  .lang-bar-bg { height: 3px; background: var(--border); position: relative; overflow: hidden; }
  .lang-bar-fill {
    height: 100%; border-radius: 0;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Projects */
  .project-list { display: flex; flex-direction: column; gap: 2px; }
  .project-card {
    background: var(--surface); border: 1px solid var(--border);
    padding: 48px; display: grid; grid-template-columns: 1fr auto;
    gap: 40px; align-items: start; transition: all 0.4s; position: relative; overflow: hidden;
  }
  .project-card::before {
    content: ''; position: absolute; top: 0; left: 0;
    width: 100%; height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    transform: scaleX(0); transform-origin: left; transition: transform 0.5s;
  }
  .project-card:hover { border-color: rgba(108,99,255,0.25); }
  .project-card:hover::before { transform: scaleX(1); }
  .proj-num { font-family: var(--mono); font-size: 10px; color: var(--accent); letter-spacing: 3px; margin-bottom: 18px; }
  .proj-name { font-size: 26px; font-weight: 700; letter-spacing: -1px; margin-bottom: 14px; }
  .proj-badge {
    display: inline-block; padding: 4px 12px; margin-bottom: 20px;
    font-family: var(--mono); font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
  }
  .proj-desc { font-size: 14px; line-height: 1.8; color: var(--muted); margin-bottom: 24px; max-width: 640px; }
  .proj-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .proj-tag {
    padding: 4px 10px; background: rgba(108,99,255,0.08);
    border: 1px solid rgba(108,99,255,0.2);
    font-family: var(--mono); font-size: 10px; color: var(--accent); letter-spacing: 1px;
  }
  .proj-links { display: flex; flex-direction: column; gap: 12px; align-items: flex-end; }
  .proj-link {
    display: flex; align-items: center; gap: 8px;
    color: var(--muted); text-decoration: none;
    font-family: var(--mono); font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
    transition: color 0.3s; white-space: nowrap; cursor: none;
  }
  .proj-link:hover { color: var(--accent2); }
  .proj-video-wrap {
    position: relative;
    width: 100%;
    margin-top: 24px;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.5s ease, opacity 0.4s ease;
  }
  .project-card:hover .proj-video-wrap {
    max-height: 320px;
    opacity: 1;
  }
  .proj-video {
    width: 100%;
    display: block;
    border: 1px solid var(--border);
  }
  .proj-video-hint {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 3px;
    color: white;
    background: rgba(8,8,16,0.6);
    padding: 6px 14px;
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.3s;
  }
  .project-card:hover .proj-video-hint { opacity: 0; }

  /* Certs */
  .certs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 2px; }
  .cert-pdf-thumb {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
    margin-top: 16px;
    border: 1px solid var(--border);
    background: #fff;
    cursor: pointer;
    transition: transform 0.3s;
  }
  .cert-pdf-thumb:hover { transform: translateY(-3px); }
  .cert-pdf-thumb iframe {
    width: 680px;
    height: 500px;
    border: none;
    transform: scale(0.44);
    transform-origin: top left;
    pointer-events: none;
  }
  .cert-pdf-thumb-overlay {
    position: absolute;
    inset: 0;
    background: rgba(8,8,16,0);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s;
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .cert-pdf-thumb:hover .cert-pdf-thumb-overlay {
    opacity: 1;
    background: rgba(8,8,16,0.55);
  }
  .cert-card {
    background: var(--surface); border: 1px solid var(--border);
    padding: 32px; transition: all 0.3s; position: relative;
  }
  .cert-card:hover { transform: translateY(-4px); }
  .cert-issuer { font-family: var(--mono); font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px; }
  .cert-name { font-size: 15px; font-weight: 700; margin-bottom: 10px; line-height: 1.4; }
  .cert-desc { font-size: 12px; color: var(--muted); line-height: 1.7; margin-bottom: 20px; }
  .cert-actions { display: flex; gap: 12px; flex-wrap: wrap; }
  .cert-link {
    font-family: var(--mono); font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
    text-decoration: none; transition: opacity 0.3s; cursor: none;
  }
  .cert-link:hover { opacity: 0.7; }
  .cert-pending { font-family: var(--mono); font-size: 10px; color: var(--muted); letter-spacing: 2px; }

  /* Timeline */
  .timeline { position: relative; padding-left: 32px; }
  .timeline::before {
    content: ''; position: absolute; left: 0; top: 8px; bottom: 8px;
    width: 1px; background: var(--border);
  }
  .timeline-item {
    position: relative; padding-bottom: 40px; padding-left: 28px;
  }
  .timeline-item::before {
    content: ''; position: absolute; left: -37px; top: 8px;
    width: 10px; height: 10px; border-radius: 50%;
    border: 2px solid var(--accent); background: var(--bg);
  }
  .timeline-year {
    font-family: var(--mono); font-size: 10px; color: var(--accent);
    letter-spacing: 3px; text-transform: uppercase; margin-bottom: 6px;
  }
  .timeline-title { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
  .timeline-place { font-family: var(--mono); font-size: 11px; color: var(--muted); margin-bottom: 8px; letter-spacing: 1px; }
  .timeline-desc { font-size: 13px; color: var(--muted); line-height: 1.7; }
  .timeline-type-badge {
    display: inline-block; padding: 2px 8px; margin-left: 8px;
    font-family: var(--mono); font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
    vertical-align: middle;
  }

  /* Contact */
  .contact-section {
    text-align: center; padding: 120px 80px;
    background: var(--bg2);
  }
  .contact-inner { max-width: 700px; margin: 0 auto; }
  .contact-title {
    font-size: clamp(36px, 6vw, 72px); font-weight: 800;
    letter-spacing: -3px; line-height: 1; margin-bottom: 24px;
  }
  .contact-sub { font-size: 15px; color: var(--muted); line-height: 1.8; margin-bottom: 48px; }
  .contact-links { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

  /* Reveal */
  .reveal { opacity: 0; transform: translateY(36px); transition: opacity 0.8s ease, transform 0.8s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  footer {
    text-align: center; padding: 36px;
    border-top: 1px solid var(--border);
    font-family: var(--mono); font-size: 11px; color: var(--muted); letter-spacing: 2px;
  }

  @media (max-width: 900px) {
    /* Navbar */
    nav { padding: 16px 20px; }
    .nav-links { display: none; }
    .nav-mobile { display: flex; }

    /* Hero */
    .hero { padding: 100px 20px 60px; align-items: flex-start; }
    .hero-content {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .hero-name { font-size: clamp(40px, 12vw, 72px); letter-spacing: -2px; }
    .hero-role { font-size: 12px; }
    .hero-desc { font-size: 14px; max-width: 100%; }
    .hero-ctas { flex-direction: column; gap: 12px; }
    .btn-primary, .btn-outline { text-align: center; width: 100%; box-sizing: border-box; }

    /* Photo — mostrar centrada en móvil */
    .photo-container {
      display: flex;
      justify-content: center;
      order: -1;
    }
    .photo-frame { width: 200px; height: 230px; }

    /* Sections */
    .section-wrapper { padding: 56px 20px; }
    .section-wrapper.dark { padding: 56px 20px; }
    .section-wrapper.dark .inner { padding: 0; }
    .section-title { font-size: clamp(28px, 8vw, 48px); letter-spacing: -1px; }

    /* About */
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .stat-num { font-size: 32px; }

    /* Skills */
    .skill-chips { gap: 6px; }

    /* Projects */
    .project-card { grid-template-columns: 1fr; padding: 24px; gap: 24px; }
    .proj-links { flex-direction: column; gap: 10px; }
    .proj-link { justify-content: flex-start; }

    /* Certs */
    .certs-grid { grid-template-columns: 1fr; }
    .cert-card { padding: 24px; }

    /* Timeline */
    .timeline { padding-left: 20px; }
    .timeline-item { padding-left: 20px; }
    .timeline-item::before { left: -25px; }
    .timeline-year { flex-wrap: wrap; gap: 6px; }
    .timeline-type-badge { margin-left: 0; }

    /* Contact */
    .contact-section { padding: 72px 20px; }
    .contact-title { font-size: clamp(32px, 10vw, 60px); letter-spacing: -2px; }
    .contact-links { flex-direction: column; align-items: center; gap: 12px; }
    .contact-links a { width: 100%; max-width: 320px; text-align: center; }
  }

  @media (max-width: 480px) {
    .hero-name { font-size: clamp(36px, 13vw, 56px); letter-spacing: -1px; }
    .hero-tag { font-size: 10px; }
    .hero-role { font-size: 11px; }
    .stats-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .section-eyebrow { font-size: 9px; }
    .cert-name { font-size: 13px; }
    .proj-name { font-size: 17px; }
    .timeline-title { font-size: 14px; }
  }
`;
