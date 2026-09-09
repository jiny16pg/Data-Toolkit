import { Github, Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Yvonne's Toolkit home">
          <span className="brand-mark" aria-hidden="true">
            <Sparkles size={16} strokeWidth={2.4} />
          </span>
          <span>Yvonne&apos;s Toolkit</span>
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a
            className="nav-github"
            href="https://github.com/yvonnejinn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={15} aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  )
}