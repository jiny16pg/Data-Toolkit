export type ProjectGroup = 'Products & Tools' | 'Data Science & ML'

export interface Project {
  id: string
  name: string
  group: ProjectGroup
  description: string
  techStack: string[]
  primaryAction: string
  primaryUrl: string
  secondaryAction: string
  secondaryUrl: string
}