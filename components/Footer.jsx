import { CONFIG } from "../config.js";
import { useLang } from "./LangContext.jsx";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer>
      <span style={{ color: "var(--accent)" }}>{CONFIG.name}</span> · {t.footer}
    </footer>
  );
}
