import en from './en'
import ru from './ru'
import type { Content, Lang } from './types'

export const content: Record<Lang, Content> = { en, ru }

export const EMAIL = 'nurkali.adil@gmail.com'
export const GITHUB_URL = 'https://github.com/qipchaq'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/adil-nurkaliyev/'

export type {
  Content,
  ExperienceItem,
  Lang,
  Metric,
  ProjectItem,
  SectionId,
} from './types'
