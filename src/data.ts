import { type Project } from './components/ProjectCard';

// ── Edit this file to customise your portfolio ─────────────────────────────

export const HERO = {
  name: 'Your Name',
  tagline: 'Full-Stack Developer · Open-Source Enthusiast',
  bio: 'I build things for the web. Passionate about clean code, great user experiences, and turning ideas into working software.',
};

// Add, remove or edit projects here.
// `image` is optional — supply a URL to a screenshot/thumbnail.
export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and what problem it solves.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
    // image: 'https://example.com/screenshot.png',
  },
  {
    title: 'Project Two',
    description: 'Another project that showcases a different set of skills and technologies.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com',
  },
  {
    title: 'Project Three',
    description: 'A mobile-friendly web app built with modern frontend tooling.',
    technologies: ['Vue.js', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export const skills = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java'] },
  { category: 'Frontend', items: ['React', 'Vue.js', 'Tailwind CSS', 'HTML & CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'CI/CD', 'Linux'] },
];

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    period: '2020 – 2024',
    description: 'Specialisation in Software Engineering.',
  },
  {
    degree: 'Relevant Certification',
    institution: 'Platform / Provider',
    period: '2023',
    description: 'Brief description of what you studied or achieved.',
  },
];

export const CONTACT = {
  email: 'you@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

// ───────────────────────────────────────────────────────────────────────────
