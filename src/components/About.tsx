import type { Language } from '../i18n'
import { uiCopy } from '../i18n'

export function About({ language }: { language: Language }) {
  const copy = uiCopy[language]

  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <p className="about-label">{copy.aboutLabel}</p>
      <div className="about-copy">
        <h2 id="about-heading">{copy.aboutTitle}</h2>
        <p>{copy.aboutBody}</p>
      </div>
      <a className="text-link" href="https://github.com/jiny16pg" target="_blank" rel="noopener noreferrer">
        {copy.moreOnGithub}
      </a>
    </section>
  )
}
