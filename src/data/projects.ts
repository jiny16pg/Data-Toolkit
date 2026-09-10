import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'competitor-intelligence',
    name: 'Competitor Intelligence',
    group: 'Products & Tools',
    description:
      'A competitive intelligence workspace that structures product and technical reports into comparable records, enabling users to search evidence, compare products and experiments, and trace generated insights back to source material.',
    // TODO: verify exact stack from the competitor-intelligence-demo repository.
    techStack: ['Python', 'LLM Workflow', 'Structured Extraction', 'Web App'],
    primaryAction: 'Launch Demo',
    primaryUrl: 'https://jiny16pg.github.io/competitor-intelligence-demo/',
    secondaryAction: 'GitHub',
    secondaryUrl: '',
  },
  {
    id: 'batchlens',
    name: 'BatchLens',
    group: 'Products & Tools',
    description:
      'A document extraction demo that converts manufacturing batch records into structured, reviewable tables. Users can upload supported reports, inspect extracted batch and material information, and review structured outputs through a lightweight web interface.',
    // TODO: verify exact stack from the data-extraction-pipeline-demo repository.
    techStack: ['Python', 'FastAPI', 'Document Parsing', 'Structured Data'],
    primaryAction: 'Launch Demo',
    primaryUrl: 'https://jiny16pg.github.io/data-extraction-pipeline-demo/',
    secondaryAction: 'GitHub',
    secondaryUrl: '',
  },
  {
    id: 'job-application-copilot',
    name: 'Job Application Copilot',
    group: 'Products & Tools',
    description:
      'A reusable skill for tailoring a resume to a target job description. It evaluates role fit, selects relevant experience, and rewrites project bullets while preserving factual boundaries and the source resume layout.',
    techStack: ['Prompt Engineering', 'Skill Workflow', 'LLM', 'Markdown'],
    primaryAction: 'View GitHub',
    primaryUrl: 'https://github.com/yvonnejinn/job-application-copilot',
    secondaryAction: 'How It Works',
    secondaryUrl: 'https://github.com/yvonnejinn/job-application-copilot',
  },
  {
    id: 'loan-approval-prediction',
    name: 'Loan Approval Prediction',
    group: 'Data Science & ML',
    description:
      'An end-to-end classification project for predicting loan approval outcomes, comparing multiple machine learning models and interpreting model decisions to support risk-oriented analysis.',
    techStack: ['Python', 'scikit-learn', 'LightGBM', 'SHAP', 'MLflow'],
    primaryAction: 'View GitHub',
    primaryUrl: 'https://github.com/yvonnejinn/Loan-Approval-Prediction',
    secondaryAction: 'Project Details',
    secondaryUrl: 'https://github.com/yvonnejinn/Loan-Approval-Prediction',
  },
  {
    id: 'news-intelligence-rag',
    name: 'News Intelligence RAG',
    group: 'Data Science & ML',
    description:
      'A retrieval-augmented news analysis workflow that ingests selected articles, builds a searchable knowledge base, retrieves relevant evidence for a query, and generates source-grounded responses.',
    // TODO: verify vector store, embeddings, loader, and UI framework from the repository.
    techStack: ['Python', 'OpenAI API', 'RAG'],
    primaryAction: 'View GitHub',
    primaryUrl: 'https://github.com/yvonnejinn/news-intelligence-rag-agent',
    secondaryAction: 'Project Details',
    secondaryUrl: 'https://github.com/yvonnejinn/news-intelligence-rag-agent',
  },
]