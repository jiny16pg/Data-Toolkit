import type { Language } from '../i18n'
import { uiCopy } from '../i18n'

export function Hero({ language }: { language: Language }) {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Yifan&apos;s Data Toolkit</h1>
        <p className="hero-lede">{uiCopy[language].hero}</p>
      </div>
    </section>
  )
}
