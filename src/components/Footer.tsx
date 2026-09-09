import { ArrowUpRight, Github, Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <Sparkles size={14} strokeWidth={2.4} />
          </span>
          <span>Yvonne&apos;s Toolkit</span>
        </a>
        <p>Built with React + Vite</p>
        <a href="https://github.com/jiny16pg/Data-Toolkit" target="_blank" rel="noopener noreferrer">
          <Github size={14} aria-hidden="true" />
          GitHub
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
        <p>© {new Date().getFullYear()} Yvonne&apos;s Toolkit</p>
      </div>
    </footer>
  )
}