import { useState } from "react";
import { useLang } from "./LangContext.jsx";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="nav-logo">xb.dev</div>
      <div className="nav-links">
        {t.nav.map((label, i) => (
          <a key={i} href={`#${t.navIds[i]}`}>{label}</a>
        ))}
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === "es" ? "en" : "es")}
        >
          {t.langToggle}
        </button>
      </div>
      {/* Mobile */}
      <div className="nav-mobile">
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === "es" ? "en" : "es")}
        >
          {t.langToggle}
        </button>
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span className={open ? "ham-line open" : "ham-line"} />
          <span className={open ? "ham-line open" : "ham-line"} />
          <span className={open ? "ham-line open" : "ham-line"} />
        </button>
      </div>
      {open && (
        <div className="nav-drawer">
          {t.nav.map((label, i) => (
            <a key={i} href={`#${t.navIds[i]}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
