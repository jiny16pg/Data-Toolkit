import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types/project'

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
  const hasDistinctSecondaryAction = Boolean(project.secondaryUrl && project.secondaryUrl !== project.primaryUrl)

  return (
    <article className="project-card">
      <div className="project-card-content">
        <div className="project-card-heading">
          <h3>{project.name}</h3>
          <span className="project-arrow" aria-hidden="true">↗</span>
        </div>
        <p className="project-description">{project.description}</p>
        <p className="project-stack" aria-label={`${project.name} technology stack`}>
          {project.techStack.join(' · ')}
        </p>
      </div>
      <div className="project-actions">
        <Action label={project.primaryAction} url={project.primaryUrl} primary />
        {hasDistinctSecondaryAction && <Action label={project.secondaryAction} url={project.secondaryUrl} />}
      </div>
    </article>
  )
}