// CV data derived from your uploaded resume only.
// Icons: keep/replace as you like. If an icon import is missing, add it to /assets/icons or /assets/images.

import { contact, github, linkedin } from "../assets/icons";
import { hz, jrcz } from '../assets/images'; 


// === SKILLS (from CV) ===
export const skills = [
  // Languages
  { imageUrl: "https://cdn.simpleicons.org/html5",       name: "HTML",       type: "Programming Language" },
  { imageUrl: "https://cdn.simpleicons.org/css",        name: "CSS",        type: "Programming Language" },
  { imageUrl: "https://cdn.simpleicons.org/javascript",  name: "JavaScript", type: "Programming Language" },
  { imageUrl: "https://cdn.simpleicons.org/typescript",  name: "TypeScript", type: "Programming Language" },
  { imageUrl: "https://cdn.simpleicons.org/php",         name: "PHP",        type: "Programming Language" },
  { imageUrl: "https://cdn.simpleicons.org/python",      name: "Python",     type: "Programming Language" },
  { imageUrl: "https://cdn.simpleicons.org/cplusplus",   name: "C++",        type: "Programming Language" },
  { imageUrl: "https://cdn.simpleicons.org/mysql",       name: "MySQL",      type: "Database" },
  { imageUrl: "https://cdn.simpleicons.org/pandas",      name: "Pandas",     type: "Data" },

  // Frameworks & Libraries
  { imageUrl: "https://cdn.simpleicons.org/svelte",      name: "Svelte",     type: "Frontend" },
  { imageUrl: "https://cdn.simpleicons.org/laravel",     name: "Laravel",    type: "Backend" },
  { imageUrl: "https://cdn.simpleicons.org/unrealengine",name: "Unreal Engine (Blueprints & C++)", type: "Simulation/Engine" },
  { imageUrl: "https://cdn.simpleicons.org/react",     name: "React",    type: "Frontend" },
  { imageUrl: "https://cdn.simpleicons.org/threedotjs", name: "Three.js", type: "3D/WebGL" },
];

// === EXPERIENCE (from CV) ===
export const experiences = [
  {
    title: "Software Engineering Intern — Virtual Anatomy",
    company_name: "JRCZ, Middelburg",
    icon: jrcz,            
    iconBg: "#a2d2ff",
    date: "Feb 2025 – Jul 2025",
    points: [
      "Developed interactive 3D anatomy simulations in Unreal Engine and C++.",
      "Implemented diagnosis-based logic (e.g., cardiogenic shock) with pulse & temperature indicators.",
      "Created reusable UI components (breathing indicators, floating vitals).",
      "Collaborated with nursing educators for educational accuracy in simulations.",
      "Worked in an Agile, multidisciplinary team to deliver modular, scalable simulations.",
    ],
  },
  {
    title: "Full-Stack Developer — Step Up (Student Project)",
    company_name: "HZ University",
    icon: hz,
    iconBg: "#b7e4c7",
    date: "Nov 2023 – Jan 2024",
    points: [
      "Built a mobile app that connects people through sports and tracks real-time performance.",
      "Developed and integrated front-end and back-end microservices.",
      "Ensured smooth communication via RESTful APIs.",
      "Delivered features for social engagement and performance visualization.",
    ],
  },
  {
    title: "Laravel Developer — Energy Efficiency Project",
    company_name: "JRCZ, Middelburg",
    icon: jrcz,
    iconBg: "#accbe1",
    date: "Jan 2023 – Jun 2023",
    points: [
      "Created a desktop application to monitor and optimize building energy usage.",
      "Developed the interface in Laravel (PHP) and handled data with MySQL.",
      "Enabled real-time monitoring of room temperature and energy consumption.",
      "Focused on automation and smart energy optimization features.",
    ],
  },
];

// === SOCIAL LINKS (yours) ===
export const socialLinks = [
  { name: "Contact", iconUrl: contact, link: "/contact" },
  { name: "GitHub",  iconUrl: github,  link: "https://github.com/animepuika" },
  { name: "LinkedIn",iconUrl: linkedin,link: "https://www.linkedin.com/in/kristers-gruzins-93bba629b/" },
];

// === PROJECTS (derived from CV sections) ===
export const projects = [
  {
    iconUrl: jrcz,
    theme: "btn-back-yellow",
    name: "Virtual Anatomy — Interactive 3D Simulations",
    description:
      "Unreal Engine (C++/Blueprints) simulations with diagnosis-based logic, pulse/temperature indicators, and reusable UI (breathing indicators, floating vitals).",
  },
  {
    iconUrl: hz,
    theme: "btn-back-green",
    name: "Step Up — Sports Social App",
    description:
      "Mobile app connecting people via sports with real-time performance tracking. Front-end & back-end microservices with REST APIs.",
    link: "https://github.com/animepuika/StepUP",
  },
  {
    iconUrl: jrcz,
    theme: "btn-back-blue",
    name: "Energy Efficiency Desktop App",
    description:
      "Laravel + MySQL tool for real-time building energy and room temperature monitoring; automation and optimization features.",
  },
];
