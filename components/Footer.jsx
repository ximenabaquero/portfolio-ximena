import { CONFIG } from "../config.js";

export default function Footer() {
  return (
    <footer>
      <span style={{ color: "var(--accent)" }}>{CONFIG.name}</span> · Built with React · Bogotá, Colombia · 2025
    </footer>
  );
}
