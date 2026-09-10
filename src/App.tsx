import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectSection } from './components/ProjectSection'
import { projects } from './data/projects'
import type { Language } from './i18n'

function getInitialLanguage(): Language {
  const saved = window.localStorage.getItem('toolkit-language')
  return saved === 'zh' ? 'zh' : 'en'
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem('toolkit-language', language)
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
  }, [language])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'zh' : 'en'))
  }

  return (
    <div className="site-shell">
      <Header language={language} onLanguageChange={toggleLanguage} />
      <main>
        <Hero language={language} />
        <div className="projects-board" id="projects">
          <ProjectSection projects={projects} language={language} />
        </div>
        <About language={language} />
      </main>
      <Footer />
    </div>
  )
}

export default App
