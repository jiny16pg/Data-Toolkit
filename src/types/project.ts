export type ProjectGroup = 'AI Products' | 'Data & Intelligence'

export type ProjectIcon =
  | 'search'
  | 'file-search'
  | 'wand-sparkles'
  | 'brain-circuit'
  | 'newspaper'

export interface Project {
  id: string
  name: string
  subtitle?: string
  group: ProjectGroup
  category: string
  description: string
  icon: ProjectIcon
  tags: string[]
  primaryAction: string
  primaryUrl: string
  secondaryAction: string
  secondaryUrl: string
  status: string
  featured: boolean
  accent: 'indigo' | 'cyan' | 'emerald' | 'gold'
}