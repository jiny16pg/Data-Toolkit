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
        <ProjectSection
          id="projects"
          eyebrow="01 / Selected work"
          title="AI Products"
          description="Practical interfaces and reusable workflows for turning messy inputs into useful decisions."
          projects={aiProducts}
        />
        <ProjectSection
          eyebrow="02 / Technical projects"
          title="Data & Intelligence"
          description="Explorations across machine learning, retrieval and the systems that help information travel further."
          projects={dataProjects}
        />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App