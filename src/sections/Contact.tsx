import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  CopyIcon,
  CheckIcon,
  DownloadIcon,
} from '../components/Icons'
import { person } from '../data/portfolio'
import { copyToClipboard } from '../lib/utils'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function handleCopyEmail() {
    if (!person.email) return
    const ok = await copyToClipboard(person.email)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            id="contato-heading"
            title="Contato"
            subtitle="Aberto a conversas sobre oportunidades, projetos e colaborações"
          />
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: message */}
          <ScrollReveal>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Estou em transição ativa para Backend/Fullstack moderno e aberto a oportunidades
                que valorizem experiência sólida em sistemas críticos, SQL performance e desenvolvimento
                de software em geral.
              </p>
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Se quiser conversar sobre uma vaga, projeto ou simplesmente trocar ideias técnicas,
                fique à vontade para entrar em contato.
              </p>

              {/* Resume CTA */}
              {person.resumeUrl ? (
                <a
                  href={person.resumeUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-2 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5
                    text-sm font-medium text-white
                    hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-accent transition-colors
                  "
                >
                  <DownloadIcon className="h-4 w-4" />
                  Baixar currículo
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm text-gray-400 dark:text-gray-600">
                  <DownloadIcon className="h-4 w-4" />
                  Currículo PDF{' '}
                  <span className="font-mono text-xs">
                    {/* TODO: Configurar person.resumeUrl em src/data/portfolio.ts */}
                    TODO
                  </span>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right: contact cards */}
          <ScrollReveal delay={100}>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    <MailIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wide">E-mail</p>
                    {person.email ? (
                      <a
                        href={`mailto:${person.email}`}
                        className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                      >
                        {person.email}
                      </a>
                    ) : (
                      <span className="font-mono text-sm text-gray-400 dark:text-gray-600">
                        {/* TODO: Definir person.email em src/data/portfolio.ts */}
                        TODO — não configurado
                      </span>
                    )}
                  </div>
                </div>
                {person.email && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label={copied ? 'E-mail copiado' : 'Copiar e-mail'}
                    className="
                      rounded-lg p-2 text-gray-400 hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                      transition-colors
                    "
                  >
                    {copied ? (
                      <CheckIcon className="h-4 w-4 text-accent" />
                    ) : (
                      <CopyIcon className="h-4 w-4" />
                    )}
                  </button>
                )}
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] dark:bg-[#0A66C2]/15 dark:text-[#70a9e0]">
                  <LinkedInIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wide">LinkedIn</p>
                  {person.linkedin ? (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      {person.linkedin.replace('https://www.linkedin.com/in/', '').replace(/\/$/, '')}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-gray-400 dark:text-gray-600">
                      {/* TODO: Definir person.linkedin em src/data/portfolio.ts */}
                      TODO — não configurado
                    </span>
                  )}
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <GitHubIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wide">GitHub</p>
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    github.com/andersonmdn
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
