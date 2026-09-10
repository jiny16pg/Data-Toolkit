import type { Project } from '../types/project'
import { ProjectCard } from './ProjectCard'
import { BrainCircuit, LayoutGrid } from 'lucide-react'

interface ProjectSectionProps {
  title: string
  projects: Project[]
  icon: 'products' | 'data'
}

export function ProjectSection({ title, projects, icon }: ProjectSectionProps) {
  const SectionIcon = icon === 'products' ? LayoutGrid : BrainCircuit

  return (
    <section className="projects-section" aria-labelledby={`${title}-heading`}>
      <div className="section-heading">
        <span className="section-icon" aria-hidden="true">
          <SectionIcon size={20} strokeWidth={2} />
        </span>
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