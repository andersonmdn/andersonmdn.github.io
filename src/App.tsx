import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Impacts } from './sections/Impacts'
import { Experience } from './sections/Experience'
import { Stack } from './sections/Stack'
import { Projects } from './sections/Projects'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  const { theme, toggle } = useTheme()
  const activeSection = useActiveSection()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header theme={theme} onToggleTheme={toggle} activeSection={activeSection} />

      <main>
        <Hero />

        <section id="sobre" aria-labelledby="sobre-heading">
          <About />
        </section>

        <section id="impactos" aria-labelledby="impactos-heading">
          <Impacts />
        </section>

        <section id="experiencia" aria-labelledby="experiencia-heading">
          <Experience />
        </section>

        <section id="stack" aria-labelledby="stack-heading">
          <Stack />
        </section>

        <section id="projetos" aria-labelledby="projetos-heading">
          <Projects />
        </section>

        <section id="certificacoes" aria-labelledby="certificacoes-heading">
          <Certifications />
        </section>

        <section id="contato" aria-labelledby="contato-heading">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
