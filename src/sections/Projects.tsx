import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { Badge } from '../components/Badge'
import { ExternalLinkIcon } from '../components/Icons'
import { projects } from '../data/portfolio'
import type { ProjectStatus } from '../types'

const statusLabel: Record<ProjectStatus, string> = {
  real: 'Projeto',
  study: 'Estudo',
  todo: 'A configurar',
}

const statusStyle: Record<ProjectStatus, string> = {
  real: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  study: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
  todo: 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-500',
}

export function Projects() {
  return (
    <div className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            id="projetos-heading"
            title="Projetos e estudos"
            subtitle="Trabalho real, frentes de aprendizado ativo e espaços para crescimento"
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <article
                className={`
                  flex h-full flex-col rounded-xl border bg-white dark:bg-gray-900 p-5
                  transition-all duration-300
                  ${project.status === 'todo'
                    ? 'border-dashed border-gray-200 dark:border-gray-800 opacity-60'
                    : 'border-gray-200 dark:border-gray-800 hover:border-accent/40 dark:hover:border-accent/30 hover:shadow-sm'
                  }
                `}
              >
                {/* Status badge */}
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle[project.status]}`}
                  >
                    {statusLabel[project.status]}
                  </span>

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.title} no GitHub`}
                      className="
                        rounded p-1 text-gray-400 hover:text-accent
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                        transition-colors
                      "
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className={`mb-2 text-sm font-semibold leading-snug ${
                  project.status === 'todo'
                    ? 'text-gray-400 dark:text-gray-600'
                    : 'text-gray-900 dark:text-gray-100'
                }`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="default" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {project.status === 'todo' && (
                  <p className="mt-3 font-mono text-xs text-gray-400 dark:text-gray-600">
                    {/* TODO: Configurar em src/data/portfolio.ts */}
                    TODO: adicionar dados em portfolio.ts
                  </p>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="mt-8 text-center text-sm text-gray-400 dark:text-gray-600">
            Mais projetos disponíveis em{' '}
            <a
              href="https://github.com/andersonmdn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              github.com/andersonmdn
            </a>
          </p>
        </ScrollReveal>
      </div>
    </div>
  )
}
