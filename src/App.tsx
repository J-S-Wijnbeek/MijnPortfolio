import EyeBackground from './components/EyeBackground';
import Navbar from './components/Navbar';
import ProjectCard, { type Project } from './components/ProjectCard';
import { Github, Mail, Linkedin } from 'lucide-react';

// ── Edit this data to customise your portfolio ──────────────────────────────

const HERO = {
  name: 'Your Name',
  tagline: 'Full-Stack Developer · Open-Source Enthusiast',
  bio: 'I build things for the web. Passionate about clean code, great user experiences, and turning ideas into working software.',
};

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and what problem it solves.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
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

const skills = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java'] },
  { category: 'Frontend', items: ['React', 'Vue.js', 'Tailwind CSS', 'HTML & CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'CI/CD', 'Linux'] },
];

const education = [
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

const CONTACT = {
  email: 'you@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

// ────────────────────────────────────────────────────────────────────────────

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Animated eye background */}
      <EyeBackground />

      {/* Sticky navbar */}
      <Navbar />

      {/* Page content sits on top of the background */}
      <main className="relative z-10">
        {/* ── Hero ── */}
        <section
          id="home"
          className="flex flex-col items-center justify-center text-center px-6 py-40 min-h-screen"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            {HERO.name}
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-6">{HERO.tagline}</p>
          <p className="max-w-xl text-white/50 text-sm md:text-base">{HERO.bio}</p>
          <a
            href="#projects"
            className="mt-10 inline-block rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/80 hover:bg-white/10 transition-colors"
          >
            View my work ↓
          </a>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="px-6 py-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-white/50 mb-10 text-sm">Things I've built</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="px-6 py-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <p className="text-white/50 mb-10 text-sm">Technologies I work with</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
                  {group.category}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-white/60">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" className="px-6 py-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <p className="text-white/50 mb-10 text-sm">My academic background</p>
          <div className="flex flex-col gap-6">
            {education.map((entry) => (
              <div
                key={entry.degree}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="font-semibold text-white text-lg">{entry.degree}</h3>
                  <span className="text-xs text-white/40">{entry.period}</span>
                </div>
                <p className="text-sm text-white/60">{entry.institution}</p>
                {entry.description && (
                  <p className="mt-2 text-sm text-white/40">{entry.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="px-6 py-20 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <p className="text-white/50 mb-10 text-sm">Get in touch</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Mail size={18} />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="text-center text-xs text-white/20 py-8 border-t border-white/10">
          © {new Date().getFullYear()} {HERO.name}. Built with React + Vite.
        </footer>
      </main>
    </div>
  );
}

export default App;

