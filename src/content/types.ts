export type Lang = 'en' | 'ru'

export type SectionId =
  'about' | 'experience' | 'projects' | 'skills' | 'contact'

export interface Metric {
  value: number
  suffix: string
  label: string
}

export interface ExperienceItem {
  period: string
  title: string
  company: string
  url?: string
  summary: string
  highlights?: string[]
  tags?: string[]
}

export interface ProjectItem {
  title: string
  description: string
  image: string
  liveUrl: string
  codeUrl?: string
  tags: string[]
}

export interface EducationItem {
  period: string
  degree: string
  school: string
  field: string
}

export interface Content {
  meta: { title: string; description: string }
  ui: {
    skipToContent: string
    nav: Record<SectionId, string>
    navLabel: string
    languageLabel: string
    themeToLight: string
    themeToDark: string
    social: { github: string; linkedin: string; email: string }
    openLink: string
  }
  person: {
    name: string
    role: string
    tagline: string
    location: string
    photoAlt: string
  }
  about: {
    heading: string
    paragraphs: string[]
    metrics: Metric[]
  }
  experience: {
    heading: string
    software: { label: string; items: ExperienceItem[] }
    aerospace: { label: string; items: ExperienceItem[] }
  }
  projects: {
    heading: string
    intro: string
    live: string
    code: string
    items: ProjectItem[]
  }
  skills: {
    heading: string
    groups: { title: string; items: string[] }[]
    educationHeading: string
    education: EducationItem[]
    coursesHeading: string
    courses: { period: string; title: string; provider: string }[]
    languagesHeading: string
    languages: { name: string; level: string }[]
  }
  contact: {
    heading: string
    text: string
    cta: string
    copy: string
    copied: string
  }
  footer: { built: string; inspired: string }
}
