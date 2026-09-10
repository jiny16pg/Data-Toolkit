import type { ProjectKind } from './types/project'

export type Language = 'en' | 'zh'

export const uiCopy = {
  en: {
    navProjects: 'Projects',
    navAbout: 'About',
    hero: "A small shelf of products, models and experiments I've built to make messy information easier to use.",
    projectsHeading: 'Projects',
    aboutLabel: 'Why I build',
    aboutTitle: 'Most of these started as an annoyance.',
    aboutBody:
      'A report that was hard to compare, a model that was hard to explain, or a task that kept getting repeated. I like turning those awkward moments into small tools that are easier to use — and easier to trust.',
    moreOnGithub: 'More on GitHub ↗',
    switchLanguage: 'Switch to Chinese',
    openProject: 'Open',
    showDetails: 'Show details for',
    hideDetails: 'Hide details for',
  },
  zh: {
    navProjects: '项目',
    navAbout: '关于',
    hero: '一些我做过的产品、模型与实验——把杂乱的信息变得更容易使用。',
    projectsHeading: '项目',
    aboutLabel: '为什么做这些',
    aboutTitle: '很多项目，都从一个“不太顺手”的瞬间开始。',
    aboutBody:
      '一份难以比较的报告，一个难以解释的模型，或一项不断重复的任务。我喜欢把这些不顺手的环节做成更简单、更可信，也真正有人愿意使用的工具。',
    moreOnGithub: 'GitHub 上查看更多 ↗',
    switchLanguage: 'Switch to English',
    openProject: '打开',
    showDetails: '展开详情：',
    hideDetails: '收起详情：',
  },
} as const

export const kindLabels: Record<Language, Record<ProjectKind, string>> = {
  en: {
    Product: 'Product',
    Skill: 'Skill',
    Model: 'Model',
    RAG: 'RAG',
  },
  zh: {
    Product: '产品',
    Skill: 'Skill',
    Model: '模型',
    RAG: 'RAG',
  },
}
