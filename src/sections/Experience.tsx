import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { Badge } from '../components/Badge'
import { experiences } from '../data/portfolio'

export function Experience() {
  return (
    <div className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            id="experiencia-heading"
            title="Experiência profissional"
            subtitle="Trajetória construída em um único lugar, do início à referência técnica"
          />
        </ScrollReveal>

        {experiences.map((exp, expIndex) => (
          <ScrollReveal key={expIndex} delay={100}>
            <div className="mb-10">
              {/* Company header */}
              <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {exp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>{exp.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-accent">{exp.period}</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-6 sm:pl-8">
                {/* Vertical line */}
                <div
                  className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-800"
                  aria-hidden="true"
                />

                {exp.roles.map((role, roleIndex) => (
                  <ScrollReveal key={roleIndex} delay={roleIndex * 80 + 120} className="relative mb-10 last:mb-0">
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-6 sm:-left-8 top-1.5 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className={`h-3 w-3 rounded-full border-2 ${
                        roleIndex === 0
                          ? 'border-accent bg-accent'
                          : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950'
                      }`} />
                    </div>

                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                          {role.title}
                        </h4>
                        {roleIndex === 0 && (
                          <Badge variant="accent">Posição mais recente</Badge>
                        )}
                      </div>

                      <ul className="space-y-2" aria-label={`Responsabilidades como ${role.title}`}>
                        {role.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                            <span
                              className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
