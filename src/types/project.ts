export type ProjectKind = 'Product' | 'Skill' | 'Model' | 'RAG'

export interface LocalizedText {
  en: string
  zh: string
}

export interface Project {
  id: string
  name: string
  kind: ProjectKind
  shortDescription: LocalizedText
  description: LocalizedText
  techStack: string[]
  primaryAction: LocalizedText
  primaryUrl: string
  secondaryAction?: LocalizedText
  secondaryUrl?: string
}
