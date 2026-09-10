import type { Project } from '../types/project'
import { ProjectCard } from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

export function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <section className="projects-section" aria-labelledby="projects-heading">
      <div className="section-heading">
        <h2 id="projects-heading">Projects</h2>
        <span>{String(projects.length).padStart(2, '0')}</span>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
