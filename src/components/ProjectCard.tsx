import {
  ArrowUpRight,
  BrainCircuit,
  FileSearch,
  Newspaper,
  Search,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Project } from '../types/project'

const iconMap: Record<Project['icon'], LucideIcon> = {
  search: Search,
  'file-search': FileSearch,
  'wand-sparkles': Sparkles,
  'brain-circuit': BrainCircuit,
  newspaper: Newspaper,
}

function Action({ label, url, primary }: { label: string; url: string; primary?: boolean }) {
  if (!url) {
    return (
      <span className={`project-action ${primary ? 'project-action-primary' : 'project-action-secondary'} is-disabled`}>
        {primary ? 'Coming Soon' : label}
      </span>
    )
  }

  return (
    <a
      className={`project-action ${primary ? 'project-action-primary' : 'project-action-secondary'}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" />
    </a>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon]

  return (
    <article className={`project-card ${project.featured ? 'is-featured' : ''}`} data-accent={project.accent}>
      <div className="card-topline">
        <div className="project-icon" aria-hidden="true">
          <Icon size={21} strokeWidth={1.8} />
        </div>
        <span className="status-badge">
          <span className="status-dot" aria-hidden="true" />
          {project.status}
        </span>
      </div>
      <div className="project-card-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
        <p className="project-description">{project.description}</p>
        <div className="tag-list" aria-label={`${project.name} tags`}>
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="project-actions">
        <Action label={project.primaryAction} url={project.primaryUrl} primary />
        <Action label={project.secondaryAction} url={project.secondaryUrl} />
      </div>
    </article>
  )
}