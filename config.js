// ============================================================
// CONFIGURATION — Edit your personal data here
// ============================================================
export const CONFIG = {
  name: "Ximena Baquero",
  role: "Frontend Engineer",
  subtitle: "Full-Stack Systems · Health Tech",
  location: "Bogotá, Colombia",
  email: "saraximenagilbaquero@gmail.com",
  linkedin: "https://www.linkedin.com/in/sara-ximena-gil-baquero-a3559022b/",
  github: "https://github.com/ximenabaquero",

  //  PHOTO: 
  photo: "/foto Ximena.jpeg", 

  about: `I'm a Systems Engineering student at Universidad EAN (8th semester, graduating Nov. 2026), 
specialized in frontend development with real production experience in the health-tech sector. 
I work in collaborative teams leading the frontend layer while handling direct client communication 
and requirements gathering — translating real clinical needs into functional, scalable solutions.`,

  stats: [
    { num: "2", label: "Active Clients" },
    { num: "2+", label: "Projects in Prod" },
    { num: "15+", label: "IBM Courses" },
    { num: "C1", label: "English Level" },
  ],

  skills: [
    { category: "Core Stack", items: ["Next.js", "React", "TypeScript", "Laravel", "REST APIs", "MySQL"] },
    { category: "Experience With", items: ["Vue", "Nuxt", "Python", "Django", "Docker", "Linux", "CI/CD", "GitHub", "Power BI"] },
    { category: "Security Concepts", items: ["RBAC", "Audit Logs", "AES-256", "MFA"] },
  ],

  projects: [
    {
      number: "01",
      name: "XIMCA — Clinic Management System",
      badge: "Production SaaS · 2 clinics currently using the platform",
      badgeColor: "#00d4ff",
      desc: `Healthcare SaaS platform for aesthetic medicine clinics. Handles patient management, immutable medical record history, Role-Based Access Control (RBAC) for physicians and staff, and public digital clinic profiles. Decoupled architecture: Next.js + TypeScript frontend, Laravel REST API backend, MySQL database. Currently used by 2 active clinics.`,
      tags: ["Next.js", "React", "TypeScript", "Laravel", "MySQL", "RBAC", "SaaS"],
      video: "/demo-ximca.mp4",

      links: [
        { label: "Frontend repo", url: "https://github.com/ximenabaquero/Clinic-management-system-front" },
        { label: "Backend repo", url: "https://github.com/karol-cc/Clinic-management-system-back" },
      ],
    },
    {
      number: "02",
      name: "Plataforma Mosquera Juvenil",
      badge: "Live · Institutional platform — Municipality of Mosquera, Colombia",
      badgeColor: "#ff6b9d",
      desc: `Frontend development of a government platform centralizing programs and resources for young citizens. Built component-based architecture with Nuxt and Vue, integrated REST APIs, and led Git-based collaborative development.`,
      tags: ["Nuxt", "Vue.js", "TypeScript", "REST API", "Government"],

      links: [
        { label: "View repo", url: "https://github.com/DousoAdmin/pmj-front" },
      ],
    },
  ],

  certifications: [
    {
      issuer: "Google · Coursera",
      name: "Google Cybersecurity Professional Certificate",
      desc: "9 courses · Python, Linux, SQL, SIEM, threat detection, network security, incident response.",
      credentialLink: "https://coursera.org/share/d02581a8aecd850ce6d3f36594465d0e",
      pdfLink: "/Google Cibersecurity.pdf", 
      color: "#4285F4",
    },
    {
      issuer: "IBM · Coursera",
      name: "IBM Full Stack Software Developer",
      desc: "15 courses · React, Node.js, Python, Django, Docker, Kubernetes, Microservices, SaaS capstone.",
      credentialLink: "https://coursera.org/share/9eebe0e3fc8aa28aaebfb9e4a0c99147",
      pdfLink: "/Full stack.pdf", 
      color: "#0062ff",
    },
    {
      issuer: "EF Education First",
      name: "EF SET English Certificate — C1 Proficient",
      desc: "Score 72/100 · Full professional working capacity in English. CEFR scale.",
      credentialLink: "https://cert.efset.org/en/URoZpZ",
      pdfLink: "/EF SET Certificate.pdf",
      color: "#00d4ff",
    },
    {
      issuer: "Universidad EAN",
      name: "Análisis de Datos en Power BI",
      desc: "Data visualization, interactive dashboards and business intelligence reports. Feb. 2026.",
      credentialLink: "https://eanx.co/certificate/wCPfYqhpDj",
      pdfLink: "/Análisis de Datos en Power BI.pdf",
      color: "#ff6b9d",
    },
  ],

  languages: [
    { lang: "Español", level: "Nativo", percent: 100, color: "#6c63ff" },
    { lang: "Inglés", level: "C1 Proficiente", percent: 85, color: "#00d4ff" },
  ],

  timeline: [
    {
      year: "2026",
      type: "education",
      title: "Ingeniería de Sistemas",
      place: "Universidad EAN",
      desc: "Graduación esperada noviembre 2026.",
    },
    {
      year: "Oct 2025",
      type: "work",
      title: "Frontend Developer",
      place: "Plataforma Mosquera Juvenil",
      desc: "Plataforma institucional de juventudes del municipio de Mosquera.",
    },
    {
      year: "junio 2025",
      type: "work",
      title: "Frontend Developer & Fullstack",
      place: "XIMCA",
      desc: "SaaS de gestión clínica en producción con 2 clientes activos.",
    },
    {
      year: "Nov 2025",
      type: "cert",
      title: "Google Cybersecurity Certificate",
      place: "Google / Coursera",
      desc: "9 cursos completados.",
    },
    {
      year: "Dic 2025",
      type: "cert",
      title: "IBM Full Stack Software Developer",
      place: "IBM / Coursera",
      desc: "15 cursos completados, proyecto capstone SaaS.",
    },
    {
      year: "Ene 2023",
      type: "education",
      title: "Inicio Ingeniería de Sistemas",
      place: "Universidad EAN",
      desc: "Comienzo de la carrera universitaria.",
    },
  ],
};
