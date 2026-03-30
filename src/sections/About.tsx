import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { aboutParagraphs } from '../data/portfolio'

export function About() {
  return (
    <div className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            id="sobre-heading"
            title="Sobre mim"
            subtitle="Mais de 11 anos construindo software crítico que não pode falhar"
          />
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-4">
            {aboutParagraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={100} className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Em números
              </h3>

              <dl className="space-y-4">
                <div>
                  <dt className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                    11<span className="text-accent">+</span>
                  </dt>
                  <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                    anos de experiência em desenvolvimento
                  </dd>
                </div>
                <div className="h-px bg-gray-100 dark:bg-gray-800" />
                <div>
                  <dt className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                    1<span className="text-accent"> empresa</span>
                  </dt>
                  <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                    Thomson Reuters Brasil — do estágio ao sênior
                  </dd>
                </div>
                <div className="h-px bg-gray-100 dark:bg-gray-800" />
                <div>
                  <dt className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                    98<span className="text-accent">%</span>
                  </dt>
                  <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                    redução no tempo de geração de relatórios críticos
                  </dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
