# Yvonne's AI & Data Toolkit

Personal portfolio and project launcher for selected AI, data science and applied AI projects.

This repository is a lightweight navigation layer. It does not contain the source code, datasets, credentials or services for the projects it presents. It provides project summaries and links to public demos, repositories and documentation entry points.

## Projects

- Competitor Intelligence
- BatchLens
- Job Application Copilot
- Loan Approval Prediction
- News Intelligence RAG

The projects are grouped on the homepage into **AI Products** and **Data & Intelligence**.

## Local Development

Prerequisites: Node.js 20 or newer and npm.

```bash
git clone <repository-url>
cd personal-ai-data-toolkit
npm install
npm run dev
```

The Vite development server will print a local URL in the terminal.

## Build

```bash
npm run build
```

The production output is written to `dist/`.

## GitHub Pages

The Vite base path is configured for the repository name in `vite.config.ts`:

```text
https://yvonnejinn.github.io/personal-ai-data-toolkit/
```

To publish:

1. Create a GitHub repository named `personal-ai-data-toolkit`.
2. Push this project to the `main` branch.
3. Open the repository on GitHub and go to **Settings -> Pages**.
4. Set the source to **GitHub Actions**.
5. Pushes to `main` will build and deploy through `.github/workflows/deploy.yml`.

The workflow uses the current Pages artifact and deployment actions. It does not maintain a separate `gh-pages` branch.

## Development Across Multiple Computers

GitHub is the source of truth for this project. The original development computer is not required after the repository is pushed.

On another computer:

```bash
git clone <repository-url>
cd personal-ai-data-toolkit
git pull
npm install
```

After making changes:

```bash
git add .
git commit -m "Describe the change"
git push
```

Keep personal and public project links in the repository data, and do not add machine-specific paths or local environment files.

## How to Add a New Project

The main file to edit is `src/data/projects.ts`. Add one `Project` object with its name, group, category, description, icon, tags, actions, status and URLs. The existing `ProjectCard` renders every object, so a new card does not need a copied component.

If a new icon is needed, add its project icon value to `src/types/project.ts` and register the matching Lucide icon in the `iconMap` inside `src/components/ProjectCard.tsx`.

For an unpublished demo or documentation page, leave the URL empty. The interface will show `Coming Soon` and will not create an invalid `href="#"` link. Add a nearby TODO describing the public URL that still needs to be supplied.

## Project Links

- **Competitor Intelligence:** public demo and project links are placeholders until personal URLs are supplied.
- **BatchLens:** public demo and project links are placeholders until personal URLs are supplied.
- **Job Application Copilot:** public skill and documentation links are placeholders until personal URLs are supplied.
- **Loan Approval Prediction:** [GitHub repository](https://github.com/yvonnejinn/Loan-Approval-Prediction)
- **News Intelligence RAG:** [GitHub repository](https://github.com/yvonnejinn/news-intelligence-rag-agent), pending URL verification.

## Before Making This Repository Public

- No private service URLs or hostnames
- No confidential files or screenshots
- No API keys, tokens, credentials or passwords
- No private datasets
- No proprietary source code
- No unpublished internal project material

The toolkit should only link to public personal demos, public repositories and public documentation.
