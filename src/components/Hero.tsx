import { ArrowDownRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker">Personal project toolkit</p>
        <h1 id="hero-title">
          Yifan&apos;s <em>Data</em> Toolkit
        </h1>
        <p className="hero-lede">Selected products, data tools and applied machine learning projects.</p>
        <div className="hero-meta" aria-label="Project toolkit details">
          <span>React</span>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>05 projects</span>
        </div>
        <a className="hero-link" href="#projects">
          View projects
          <ArrowDownRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}