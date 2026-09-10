import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectSection } from './components/ProjectSection'
import { projects } from './data/projects'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <div className="projects-board" id="projects">
          <ProjectSection projects={projects} />
        </div>
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
