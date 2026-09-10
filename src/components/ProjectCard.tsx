import { useState } from 'react'
import type { KeyboardEvent, MouseEvent } from 'react'
import type { Project } from '../types/project'
import { ProjectLogo } from './ProjectLogo'

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  const openProject = () => {
    if (!project.primaryUrl) return
    window.open(project.primaryUrl, '_blank', 'noopener,noreferrer')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProject()
    }
  }

  const toggleDetails = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setExpanded((current) => !current)
  }

  return (
    <article
      className={`project-tile ${expanded ? 'is-expanded' : ''}`}
      onClick={openProject}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={`Open ${project.name}`}
    >
      <div className="project-tile-main">
        <div className="project-tile-topline">
          <ProjectLogo projectId={project.id} name={project.name} />
          <span className="project-kind">{project.kind}</span>
        </div>

        <div className="project-tile-title">
          <h3>{project.name}</h3>
          <span className="launch-arrow" aria-hidden="true">↗</span>
        </div>
      </div>

      <button
        type="button"
        className="project-info-toggle"
        aria-expanded={expanded}
        aria-label={`${expanded ? 'Hide' : 'Show'} details for ${project.name}`}
        onClick={toggleDetails}
      >
        <span aria-hidden="true">{expanded ? '−' : '+'}</span>
      </button>

      <div className="project-reveal" aria-hidden={!expanded}>
        <p className="project-short-description">{project.shortDescription}</p>
        <p className="project-description">{project.description}</p>
        <p className="project-stack">{project.techStack.join(' · ')}</p>
        <span className="project-open-label">
          {project.primaryAction} <span aria-hidden="true">↗</span>
        </span>
      </div>
    </article>
  )
}
