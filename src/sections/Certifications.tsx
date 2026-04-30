import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { certifications } from '../data/portfolio'

export function Certifications() {
  return (
    <div className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            id="certificacoes-heading"
            title="Certificações e aprendizado contínuo"
            subtitle="Investimento constante em atualização técnica"
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <article className="
                flex flex-col gap-2 rounded-xl border border-gray-200 dark:border-gray-800
                bg-white dark:bg-gray-900 p-5 h-full
                hover:border-accent/30 dark:hover:border-accent/20
                hover:shadow-sm transition-all duration-300
              ">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug flex-1">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </span>
                </div>

                {cert.description && (
                  <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-500">
                    {cert.description}
                  </p>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 rounded-xl border border-dashed border-gray-200 dark:border-gray-800 p-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Aprendizado contínuo em andamento — novas certificações serão adicionadas conforme concluídas.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
