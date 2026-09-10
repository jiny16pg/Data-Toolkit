export type ProjectKind = 'Product' | 'Skill' | 'Model' | 'RAG'

export interface Project {
  id: string
  name: string
  kind: ProjectKind
  shortDescription: string
  description: string
  techStack: string[]
  primaryAction: string
  primaryUrl: string
  secondaryAction?: string
  secondaryUrl?: string
}
