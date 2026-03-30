export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string | null
  icon: 'github' | 'linkedin' | 'mail'
}

export interface Impact {
  title: string
  description: string
  icon: 'zap' | 'database' | 'shield' | 'cpu' | 'book' | 'wrench'
}

export interface ExperienceRole {
  title: string
  description: string[]
}

export interface ExperienceItem {
  company: string
  location: string
  period: string
  roles: ExperienceRole[]
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export type ProjectStatus = 'real' | 'study' | 'todo'

export interface Project {
  title: string
  description: string
  tags: string[]
  href: string | null
  status: ProjectStatus
}

export interface Certification {
  title: string
  issuer: string
  description?: string
}
