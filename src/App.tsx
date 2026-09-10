import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectSection } from './components/ProjectSection'
import { projects } from './data/projects'

function App() {
  const products = projects.filter((project) => project.group === 'Products & Tools')
  const dataProjects = projects.filter((project) => project.group === 'Data Science & ML')

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <div className="projects-board page-section" id="projects">
          <ProjectSection title="Products & Tools" projects={products} />
          <ProjectSection title="Data Science & ML" projects={dataProjects} />
        </div>
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App