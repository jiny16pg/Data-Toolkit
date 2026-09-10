import type { Project } from '../types/project'
import { ProjectCard } from './ProjectCard'

interface ProjectSectionProps {
  title: string
  projects: Project[]
}

export function ProjectSection({ title, projects }: ProjectSectionProps) {
  return (
    <section className="projects-section" aria-labelledby={`${title}-heading`}>
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