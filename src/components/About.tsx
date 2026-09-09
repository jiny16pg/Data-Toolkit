import { ArrowUpRight, Github } from 'lucide-react'

export function About() {
  return (
    <section className="about-section page-section" id="about" aria-labelledby="about-heading">
      <div className="about-copy">
        <h2 id="about-heading">A working shelf for curious problems.</h2>
        <p>
          This toolkit brings together selected projects across applied AI, data science, document intelligence and
          AI-assisted workflows. Each project focuses on turning technical capabilities into practical tools, analysis
          or decision-support systems.
        </p>
        <a
          className="text-link"
          href="https://github.com/jiny16pg/Data-Toolkit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} aria-hidden="true" />
          View GitHub
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}