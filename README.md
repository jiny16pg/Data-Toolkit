# Yifan's Data Toolkit

A lightweight personal project launcher for selected data science, applied AI, document intelligence and workflow projects.

Live site: `https://jiny16pg.github.io/Data-Toolkit/`

## Current projects

- Competitor Intelligence
- BatchLens
- Job Application Copilot
- Loan Approval Prediction
- News Intelligence RAG

The homepage uses a compact launcher grid so every project is visible at a glance. On desktop, hovering or focusing a project opens a larger floating detail surface with the full project description and technology stack. On touch devices, the `+` control expands the full description inside the tile. Clicking a project opens its public demo or repository.

The interface also includes an English / Chinese language toggle. Project names and technical terms remain in their canonical form while supporting copy is localized for clarity.

## Local Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Deployment

GitHub Pages deployment is handled by `.github/workflows/deploy.yml`. The Vite base path remains configured for `/Data-Toolkit/`.

## Project data

The main file to edit is `src/data/projects.ts`. Each `Project` contains:

- a stable project id and display name;
- a project kind (`Product`, `Skill`, `Model`, or `RAG`);
- English and Chinese short descriptions;
- English and Chinese full descriptions;
- a technology stack;
- English and Chinese action labels;
- a public demo or repository URL.

`src/components/ProjectLogo.tsx` contains the custom SVG marks used by the launcher tiles. Shared interface copy and project-kind labels live in `src/i18n.ts`.

## Public links

- **Competitor Intelligence:** https://jiny16pg.github.io/competitor-intelligence-demo/
- **BatchLens:** https://jiny16pg.github.io/data-extraction-pipeline-demo/
- **Job Application Copilot:** https://github.com/yvonnejinn/job-application-copilot
- **Loan Approval Prediction:** https://github.com/yvonnejinn/loan-approval-decision-analysis
- **News Intelligence RAG:** https://github.com/yvonnejinn/news-intelligence-rag-agent

## Privacy

Keep this repository public-safe. Do not add employer-confidential code, internal URLs, private files, credentials, real production data, or machine-specific paths.
