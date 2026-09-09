import { ArrowDownRight, Boxes, Circle } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            AI <span aria-hidden="true">·</span> Data <span aria-hidden="true">·</span> Product
          </p>
          <h1 id="hero-title">
            Yvonne&apos;s <em>AI &amp; Data</em> Toolkit
          </h1>
          <p className="hero-lede">
            A collection of AI products, data tools, machine learning projects and intelligent workflows.
          </p>
          <p className="hero-note">
            Built around practical problems in document intelligence, competitive intelligence, machine learning,
            RAG and AI-assisted workflows.
          </p>
          <a className="hero-link" href="#projects">
            Explore the toolkit
            <ArrowDownRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-index" aria-label="Toolkit overview">
          <div className="hero-index-topline">
            <Boxes size={18} aria-hidden="true" />
            <span>Personal project launcher</span>
            <span className="hero-index-count">05</span>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <div className="orbit-core">
              <span>AI</span>
              <small>+ DATA</small>
            </div>
            <Circle className="orbit-node node-one" size={12} fill="currentColor" />
            <Circle className="orbit-node node-two" size={9} fill="currentColor" />
            <Circle className="orbit-node node-three" size={10} fill="currentColor" />
          </div>
          <div className="hero-index-footer">
            <span>01 — 05</span>
            <span>Selected experiments &amp; tools</span>
          </div>
        </div>
      </div>
      <div className="hero-badges" aria-label="Toolkit areas">
        <span>AI Products</span>
        <span>Data Science</span>
        <span>Applied AI</span>
      </div>
    </section>
  )
}