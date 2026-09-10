interface ProjectLogoProps {
  projectId: string
  name: string
}

function CompetitorLogo() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
      <path d="M43.5 20.5a17 17 0 1 0 0 23" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="40" cy="24" r="7" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M45 29l7 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function BatchLensLogo() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
      <rect x="15" y="13" width="28" height="36" rx="9" fill="none" stroke="currentColor" strokeWidth="4" />
      <rect x="23" y="19" width="28" height="32" rx="9" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.72" />
      <path d="M27 32h20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="36" cy="32" r="4" fill="currentColor" />
    </svg>
  )
}

function CopilotLogo() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
      <path d="M17 18h24a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H26l-9 7v-7a7 7 0 0 1-6-7V26a8 8 0 0 1 6-8Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M24 29h15M24 36h10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="m46 10 2.2 5.8L54 18l-5.8 2.2L46 26l-2.2-5.8L38 18l5.8-2.2L46 10Z" fill="currentColor" />
    </svg>
  )
}

function LoanLogo() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
      <path d="M13 45h38" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.45" />
      <rect x="16" y="32" width="7" height="10" rx="3.5" fill="currentColor" opacity="0.45" />
      <rect x="28.5" y="25" width="7" height="17" rx="3.5" fill="currentColor" opacity="0.7" />
      <rect x="41" y="17" width="7" height="25" rx="3.5" fill="currentColor" />
      <path d="m18 19 7 7 16-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NewsLogo() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
      <circle cx="19" cy="20" r="5" fill="currentColor" />
      <circle cx="45" cy="18" r="5" fill="currentColor" />
      <circle cx="43" cy="44" r="5" fill="currentColor" />
      <circle cx="20" cy="43" r="5" fill="currentColor" />
      <path d="M23 21.5 40 19M44 23l-1 16M38.5 44 25 43.5M18.5 38V25" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.72" />
      <path d="M27 31h10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function FallbackLogo() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
      <rect x="15" y="15" width="34" height="34" rx="12" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M24 32h16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function ProjectLogo({ projectId, name }: ProjectLogoProps) {
  let mark = <FallbackLogo />

  if (projectId === 'competitor-intelligence') mark = <CompetitorLogo />
  if (projectId === 'batchlens') mark = <BatchLensLogo />
  if (projectId === 'job-application-copilot') mark = <CopilotLogo />
  if (projectId === 'loan-approval-prediction') mark = <LoanLogo />
  if (projectId === 'news-intelligence-rag') mark = <NewsLogo />

  return (
    <div className={`project-logo project-logo--${projectId}`} aria-label={`${name} logo`}>
      {mark}
    </div>
  )
}
