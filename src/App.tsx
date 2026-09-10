import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectSection } from './components/ProjectSection'
import { projects } from './data/projects'

function App() {
  const aiProducts = projects.filter((project) => project.group === 'AI Products')
  const dataProjects = projects.filter((project) => project.group === 'Data & Intelligence')

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <div className="projects-board page-section" id="projects">
          <ProjectSection title="AI Products" projects={aiProducts} icon="products" />
          <ProjectSection title="Data & Intelligence" projects={dataProjects} icon="data" />
        </div>
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App