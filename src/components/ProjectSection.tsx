import type { Project } from '../types/project'
import { ProjectCard } from './ProjectCard'

interface ProjectSectionProps {
  id?: string
  eyebrow: string
  title: string
  description: string
  projects: Project[]
}

export function ProjectSection({ id, eyebrow, title, description, projects }: ProjectSectionProps) {
  return (
    <section className="projects-section page-section" id={id} aria-labelledby={`${title}-heading`}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${title}-heading`}>{title}</h2>
        </div>
        <p className="section-description">{description}</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}