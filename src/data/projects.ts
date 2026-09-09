import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'competitor-intelligence',
    name: 'Competitor Intelligence',
    group: 'AI Products',
    category: 'AI Product',
    description:
      'AI-assisted competitive intelligence workflow for organizing product reports, extracting structured insights and supporting cross-product comparison.',
    icon: 'search',
    tags: ['AI Product', 'Competitive Intelligence', 'Data Extraction', 'Analytics'],
    primaryAction: 'Launch Demo',
    // TODO: replace with public Competitor Intelligence demo URL.
    primaryUrl: '',
    secondaryAction: 'View Project',
    secondaryUrl: '',
    status: 'Live Demo',
    featured: true,
    accent: 'indigo',
  },
  {
    id: 'batchlens',
    name: 'BatchLens',
    subtitle: 'Batch Document Extraction',
    group: 'AI Products',
    category: 'Document Intelligence',
    description:
      'Document intelligence demo for uploading manufacturing records and transforming unstructured reports into structured batch-level data.',
    icon: 'file-search',
    tags: ['Document AI', 'OCR', 'LLM', 'Structured Extraction'],
    primaryAction: 'Launch Demo',
    // TODO: replace with public BatchLens demo URL.
    primaryUrl: '',
    secondaryAction: 'View Project',
    secondaryUrl: '',
    status: 'Live Demo',
    featured: true,
    accent: 'cyan',
  },
  {
    id: 'job-application-copilot',
    name: 'Job Application Copilot',
    group: 'AI Products',
    category: 'AI Productivity',
    description:
      'Reusable AI skill for analyzing job descriptions and tailoring resumes through structured role matching, experience selection and bullet optimization.',
    icon: 'wand-sparkles',
    tags: ['AI Skill', 'Resume', 'Prompt Engineering', 'Productivity'],
    primaryAction: 'View Skill',
    // TODO: replace with public Job Application Copilot documentation URL.
    primaryUrl: '',
    secondaryAction: 'How It Works',
    secondaryUrl: '',
    status: 'AI Skill',
    featured: true,
    accent: 'gold',
  },
  {
    id: 'loan-approval-prediction',
    name: 'Loan Approval Prediction',
    group: 'Data & Intelligence',
    category: 'Machine Learning',
    description:
      'End-to-end machine learning project for loan approval prediction, model comparison, explainability and decision-oriented analysis.',
    icon: 'brain-circuit',
    tags: ['Machine Learning', 'Classification', 'SHAP', 'Model Evaluation'],
    primaryAction: 'View GitHub',
    primaryUrl: 'https://github.com/yvonnejinn/Loan-Approval-Prediction',
    secondaryAction: 'Project Details',
    secondaryUrl: 'https://github.com/yvonnejinn/Loan-Approval-Prediction',
    status: 'GitHub Project',
    featured: false,
    accent: 'emerald',
  },
  {
    id: 'news-intelligence-rag',
    name: 'News Intelligence RAG',
    group: 'Data & Intelligence',
    category: 'RAG / NLP',
    description:
      'News intelligence workflow using retrieval-augmented generation to retrieve, organize and synthesize information from news content.',
    icon: 'newspaper',
    tags: ['RAG', 'NLP', 'LLM', 'Information Retrieval'],
    primaryAction: 'View GitHub',
    // TODO: verify repository URL.
    primaryUrl: 'https://github.com/yvonnejinn/news-intelligence-rag-agent',
    secondaryAction: 'Project Details',
    secondaryUrl: 'https://github.com/yvonnejinn/news-intelligence-rag-agent',
    status: 'GitHub Project',
    featured: false,
    accent: 'indigo',
  },
]