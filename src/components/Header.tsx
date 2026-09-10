import type { Language } from '../i18n'
import { uiCopy } from '../i18n'

interface HeaderProps {
  language: Language
  onLanguageChange: () => void
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.8 12h16.4M12 3.5c2.5 2.6 3.8 5.4 3.8 8.5S14.5 17.9 12 20.5M12 3.5C9.5 6.1 8.2 8.9 8.2 12s1.3 5.9 3.8 8.5" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  )
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const copy = uiCopy[language]

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Yifan's Data Toolkit home">
          Yifan&apos;s Data Toolkit
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#projects">{copy.navProjects}</a>
          <a href="#about">{copy.navAbout}</a>
          <a
            className="nav-github"
            href="https://github.com/jiny16pg"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <button
            className="language-toggle"
            type="button"
            onClick={onLanguageChange}
            aria-label={copy.switchLanguage}
            title={copy.switchLanguage}
          >
            <GlobeIcon />
            <span>{language === 'en' ? '中文' : 'EN'}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
