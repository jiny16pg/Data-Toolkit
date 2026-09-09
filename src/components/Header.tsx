import { Github, LayoutGrid } from 'lucide-react'

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Yvonne's Toolkit home">
          <span className="brand-mark" aria-hidden="true">
            <LayoutGrid size={16} strokeWidth={2.1} />
          </span>
          <span>Yvonne&apos;s Toolkit</span>
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a
            className="nav-github"
            href="https://github.com/jiny16pg/Data-Toolkit"
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