import { Github, ExternalLink } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/30 hover:bg-white/10 transition-all">
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="text-sm text-white/60 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white/10 px-3 py-0.5 text-xs text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
