import { ArrowDownRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Yvonne&apos;s <em>AI &amp; Data</em> Toolkit
        </h1>
        <p className="hero-lede">Selected products, data tools and applied machine learning projects.</p>
        <a className="hero-link" href="#projects">
          View projects
          <ArrowDownRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}