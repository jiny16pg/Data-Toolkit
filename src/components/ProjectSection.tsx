import type { Project } from '../types/project'
import { ProjectCard } from './ProjectCard'

interface ProjectSectionProps {
  id?: string
  title: string
  projects: Project[]
}

export function ProjectSection({ id, title, projects }: ProjectSectionProps) {
  return (
    <section className="projects-section page-section" id={id} aria-labelledby={`${title}-heading`}>
      <div className="section-heading">
        <h2 id={`${title}-heading`}>{title}</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}