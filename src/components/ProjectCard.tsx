import { useState } from 'react'
import type { KeyboardEvent, MouseEvent } from 'react'
import type { Language } from '../i18n'
import { kindLabels, uiCopy } from '../i18n'
import type { Project } from '../types/project'
import { ProjectLogo } from './ProjectLogo'

interface ProjectCardProps {
  project: Project
  language: Language
}

export function ProjectCard({ project, language }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const copy = uiCopy[language]
  const kindLabel = kindLabels[language][project.kind]

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
      aria-label={`${copy.openProject} ${project.name}`}
    >
      <div className="project-tile-main">
        <div className="project-tile-topline">
          <ProjectLogo projectId={project.id} name={project.name} />
          <span className="project-kind">{kindLabel}</span>
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
        aria-label={`${expanded ? copy.hideDetails : copy.showDetails}${project.name}`}
        onClick={toggleDetails}
      >
        <span aria-hidden="true">{expanded ? '−' : '+'}</span>
      </button>

      <div className="project-reveal">
        <div className="project-reveal-heading">
          <ProjectLogo projectId={project.id} name={project.name} />
          <div>
            <span className="project-kind">{kindLabel}</span>
            <h3>{project.name}</h3>
          </div>
        </div>

        <p className="project-short-description">{project.shortDescription[language]}</p>
        <p className="project-description">{project.description[language]}</p>

        <div className="project-reveal-footer">
          <p className="project-stack">{project.techStack.join(' · ')}</p>
          <span className="project-open-label">
            {project.primaryAction[language]} <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </article>
  )
}
