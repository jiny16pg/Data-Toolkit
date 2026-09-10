export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Yifan's Data Toolkit home">
          Yifan&apos;s Data Toolkit
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a
            className="nav-github"
            href="https://github.com/jiny16pg"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}