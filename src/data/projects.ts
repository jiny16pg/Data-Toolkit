import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'competitor-intelligence',
    name: 'Competitor Intelligence',
    kind: 'Product',
    shortDescription: {
      en: 'Scan signals, compare products and organize evidence in one workspace.',
      zh: '快速查看市场信号、比较产品，并把关键证据整理到一个工作区。',
    },
    description: {
      en: 'A public competitive-intelligence workspace built with synthetic data. It brings market signals, formula patterns, category filtering and side-by-side competitor comparison into one lightweight interface.',
      zh: '一个基于合成数据的 Competitive Intelligence 工作区，将市场信号、配方模式、品类筛选与竞品横向比较整合到同一界面，帮助用户更快定位信息并回溯分析依据。',
    },
    techStack: ['React', 'Vite', 'Static Data', 'Client-side Search'],
    primaryAction: { en: 'Launch Demo', zh: '打开 Demo' },
    primaryUrl: 'https://jiny16pg.github.io/competitor-intelligence-demo/',
  },
  {
    id: 'batchlens',
    name: 'BatchLens',
    kind: 'Product',
    shortDescription: {
      en: 'Turn manufacturing records into structured, traceable tables.',
      zh: '把生产批次记录转换为结构化、可追溯的数据表。',
    },
    description: {
      en: 'A static document-intelligence demo showing how electronic and scanned manufacturing records can be normalized into a common hierarchy with validation, provenance and review-ready table outputs.',
      zh: '一个 Document Intelligence 演示，展示如何将电子版与扫描版生产记录规范化到统一的数据层级中，并保留 validation、provenance 与 review-ready 输出，便于后续检查与分析。',
    },
    techStack: ['React', 'TypeScript', 'Vite', 'Static JSON'],
    primaryAction: { en: 'Launch Demo', zh: '打开 Demo' },
    primaryUrl: 'https://jiny16pg.github.io/data-extraction-pipeline-demo/',
  },
  {
    id: 'job-application-copilot',
    name: 'Job Application Copilot',
    kind: 'Skill',
    shortDescription: {
      en: 'Tailor a resume to a JD while keeping every claim evidence-grounded.',
      zh: '根据 JD 定制简历，同时确保每一项表述都有事实依据。',
    },
    description: {
      en: 'A reusable job-application Skill that maps JD requirements to verified evidence, chooses the right level of resume modification, rewrites relevant experience and audits unsupported claims before export.',
      zh: '一个可复用的求职申请 Skill，将 JD 要求映射到已验证的经历证据，判断合适的简历修改程度，重写相关经历，并在输出前审计 unsupported claims，避免夸大或虚构。',
    },
    techStack: ['Skill Workflow', 'Markdown', 'Python', 'Evidence Rules'],
    primaryAction: { en: 'View Skill', zh: '查看 Skill' },
    primaryUrl: 'https://github.com/yvonnejinn/job-application-copilot',
  },
  {
    id: 'loan-approval-prediction',
    name: 'Loan Approval Prediction',
    kind: 'Model',
    shortDescription: {
      en: 'Compare approval models, calibrate probabilities and explain predictions.',
      zh: '比较审批模型、校准预测概率，并解释模型判断。',
    },
    description: {
      en: 'An end-to-end classification workflow for historical loan-approval labels, with leakage checks, stratified out-of-fold validation, model comparison, probability calibration, threshold analysis and SHAP-based interpretation.',
      zh: '一个针对历史贷款审批标签的端到端分类流程，覆盖 data leakage 检查、stratified OOF validation、模型对比、probability calibration、threshold analysis 与基于 SHAP 的模型解释。',
    },
    techStack: ['Python', 'scikit-learn', 'LightGBM', 'XGBoost', 'SHAP'],
    primaryAction: { en: 'View GitHub', zh: '查看 GitHub' },
    primaryUrl: 'https://github.com/yvonnejinn/loan-approval-decision-analysis',
  },
  {
    id: 'news-intelligence-rag',
    name: 'News Intelligence RAG',
    kind: 'RAG',
    shortDescription: {
      en: 'Retrieve source evidence and generate citation-constrained news answers.',
      zh: '检索来源证据，并生成受引用约束的新闻问答。',
    },
    description: {
      en: 'A news-analysis workflow separating sentiment classification, semantic retrieval and evidence-constrained question answering so each component can be evaluated independently with source IDs and review checks.',
      zh: '一个新闻分析工作流，将 sentiment classification、semantic retrieval 与 evidence-constrained QA 拆分为可独立评估的模块，并通过 source ID、引用校验与人工 review 约束生成结果。',
    },
    techStack: ['Python', 'Streamlit', 'Sentence Transformers', 'FAISS', 'Gemini'],
    primaryAction: { en: 'View GitHub', zh: '查看 GitHub' },
    primaryUrl: 'https://github.com/yvonnejinn/news-intelligence-rag-agent',
  },
]
