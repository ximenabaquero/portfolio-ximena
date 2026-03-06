// ============================================================
// CONFIGURATION — Edit your personal data here
// ============================================================
export const CONFIG = {
  name: "Ximena Baquero",
  role: "Frontend Developer",
  subtitle: "Full-Stack · Systems Engineer · Health Tech",
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
    { category: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Nuxt 4", "Vue.js", "HTML/CSS"] },
    { category: "Backend", items: ["Laravel 11", "PHP 8.2", "Python", "Django", "Node.js", "REST APIs"] },
    { category: "Database", items: ["MySQL", "PostgreSQL", "NoSQL", "SQL"] },
    { category: "DevOps & Tools", items: ["Docker", "Git", "GitHub", "Linux", "CI/CD", "Power BI"] },
    { category: "Security", items: ["RBAC", "AES-256", "Audit Logs", "MFA", "SIEM"] },
  ],

  projects: [
    {
      number: "01",
      name: "XIMCA — Clinic Management System",
      badge: "In production · 2 active clients",
      badgeColor: "#00d4ff",
      desc: `SaaS platform for aesthetic medicine clinics. Handles patient management, clinical records 
with immutability principles, role-based access control (RBAC) for Lead and Collaborator doctors, 
and digital public profiles. Built with a decoupled architecture: Next.js frontend + Laravel REST API.`,
      tags: ["Next.js 15", "React 19", "TypeScript", "Laravel 11", "MySQL", "RBAC", "SaaS"],
      video: "/demo-ximca.mp4",

      links: [
        { label: "Frontend repo", url: "https://github.com/ximenabaquero/Clinic-management-system-front" },
        { label: "Backend repo", url: "https://github.com/karol-cc/Clinic-management-system-back" },
      ],
    },
    {
      number: "02",
      name: "Plataforma Mosquera Juvenil",
      badge: "Live · Institutional platform",
      badgeColor: "#ff6b9d",
      desc: `Institutional youth platform for the municipality of Mosquera, Colombia. 
Full frontend development with Nuxt 4 and Vue, REST API integration, 
reusable component architecture, and Git version control.`,
      tags: ["Nuxt 4", "Vue.js", "TypeScript", "REST API", "Government"],

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
