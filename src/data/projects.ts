import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'competitor-intelligence',
    name: 'Competitor Intelligence',
    kind: 'Product',
    shortDescription: 'Scan signals, compare products and organize evidence in one workspace.',
    description:
      'A public competitive-intelligence workspace built with synthetic data. It brings market signals, formula patterns, category filtering and side-by-side competitor comparison into one lightweight interface.',
    techStack: ['React', 'Vite', 'Static Data', 'Client-side Search'],
    primaryAction: 'Launch Demo',
    primaryUrl: 'https://jiny16pg.github.io/competitor-intelligence-demo/',
  },
  {
    id: 'batchlens',
    name: 'BatchLens',
    kind: 'Product',
    shortDescription: 'Turn manufacturing records into structured, traceable tables.',
    description:
      'A static document-intelligence demo showing how electronic and scanned manufacturing records can be normalized into a common hierarchy with validation, provenance and review-ready table outputs.',
    techStack: ['React', 'TypeScript', 'Vite', 'Static JSON'],
    primaryAction: 'Launch Demo',
    primaryUrl: 'https://jiny16pg.github.io/data-extraction-pipeline-demo/',
  },
  {
    id: 'job-application-copilot',
    name: 'Job Application Copilot',
    kind: 'Skill',
    shortDescription: 'Tailor a resume to a JD while keeping every claim evidence-grounded.',
    description:
      'A reusable job-application Skill that maps JD requirements to verified evidence, chooses the right level of resume modification, rewrites relevant experience and audits unsupported claims before export.',
    techStack: ['Skill Workflow', 'Markdown', 'Python', 'Evidence Rules'],
    primaryAction: 'View Skill',
    primaryUrl: 'https://github.com/yvonnejinn/job-application-copilot',
  },
  {
    id: 'loan-approval-prediction',
    name: 'Loan Approval Prediction',
    kind: 'Model',
    shortDescription: 'Compare approval models, calibrate probabilities and explain predictions.',
    description:
      'An end-to-end classification workflow for historical loan-approval labels, with leakage checks, stratified out-of-fold validation, model comparison, probability calibration, threshold analysis and SHAP-based interpretation.',
    techStack: ['Python', 'scikit-learn', 'LightGBM', 'XGBoost', 'SHAP'],
    primaryAction: 'View GitHub',
    primaryUrl: 'https://github.com/yvonnejinn/loan-approval-decision-analysis',
  },
  {
    id: 'news-intelligence-rag',
    name: 'News Intelligence RAG',
    kind: 'RAG',
    shortDescription: 'Retrieve source evidence and generate citation-constrained news answers.',
    description:
      'A news-analysis workflow separating sentiment classification, semantic retrieval and evidence-constrained question answering so each component can be evaluated independently with source IDs and review checks.',
    techStack: ['Python', 'Streamlit', 'Sentence Transformers', 'FAISS', 'Gemini'],
    primaryAction: 'View GitHub',
    primaryUrl: 'https://github.com/yvonnejinn/news-intelligence-rag-agent',
  },
]
