import { ArrowUpRight, Github, LayoutGrid } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <LayoutGrid size={14} strokeWidth={2.1} />
          </span>
          <span>Yifan&apos;s Data Toolkit</span>
        </a>
        <p>Built with React · TypeScript · Vite</p>
        <a href="https://github.com/jiny16pg/Data-Toolkit" target="_blank" rel="noopener noreferrer">
          <Github size={14} aria-hidden="true" />
          GitHub
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
        <p>© {new Date().getFullYear()} Yifan&apos;s Data Toolkit</p>
      </div>
    </footer>
  )
}