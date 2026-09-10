import type { Language } from '../i18n'
import { uiCopy } from '../i18n'
import type { Project } from '../types/project'
import { ProjectCard } from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
  language: Language
}

export function ProjectSection({ projects, language }: ProjectSectionProps) {
  return (
    <section className="projects-section" aria-labelledby="projects-heading">
      <div className="section-heading">
        <h2 id="projects-heading">{uiCopy[language].projectsHeading}</h2>
        <span>{String(projects.length).padStart(2, '0')}</span>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </div>
    </section>
  )
}
