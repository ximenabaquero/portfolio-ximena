import { useLang } from "./LangContext.jsx";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
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
    </nav>
  );
}
