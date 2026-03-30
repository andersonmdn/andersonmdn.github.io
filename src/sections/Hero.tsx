import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDownIcon, DownloadIcon, MapPinIcon } from '../components/Icons'
import { person, heroSummary, socialLinks } from '../data/portfolio'
import { scrollToSection } from '../lib/utils'

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Apresentação"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)]"
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
        aria-hidden="true"
      >
        <div className="h-[400px] w-[800px] rounded-full bg-accent/5 blur-3xl dark:bg-accent/8" />
      </div>

      <div className="section-container relative z-10 flex flex-col items-start gap-6 py-20 sm:py-24">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          <MapPinIcon className="h-3.5 w-3.5 flex-shrink-0" />
          <span>{person.location}</span>
        </div>

        {/* Name */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl">
            {person.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-accent sm:text-xl">
            {person.headline}
          </p>
          <p className="mt-1 text-base text-gray-500 dark:text-gray-400">
            {person.subheadline}
          </p>
        </div>

        {/* Transition note */}
        <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3.5 py-1 text-sm text-accent dark:border-accent/20 dark:bg-accent/10">
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {person.transitionNote}
        </div>

        {/* Summary */}
        <p className="max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-400 text-balance">
          {heroSummary}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection('experiencia')}
            className="
              inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5
              text-sm font-medium text-white shadow-sm
              hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-accent focus-visible:ring-offset-2
              focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950
              transition-colors duration-200
            "
          >
            <ArrowDownIcon className="h-4 w-4" />
            Ver experiência
          </button>

          {person.resumeUrl ? (
            <a
              href={person.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700
                px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300
                hover:border-gray-400 dark:hover:border-gray-600
                hover:text-gray-900 dark:hover:text-gray-100
                hover:bg-gray-50 dark:hover:bg-gray-800
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                transition-colors duration-200
              "
            >
              <DownloadIcon className="h-4 w-4" />
              Baixar currículo
            </a>
          ) : (
            <span
              className="
                inline-flex items-center gap-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-700
                px-5 py-2.5 text-sm font-medium text-gray-400 dark:text-gray-600
                cursor-not-allowed select-none
              "
              title="TODO: currículo PDF não configurado"
              aria-label="Baixar currículo — ainda não disponível"
            >
              <DownloadIcon className="h-4 w-4" />
              Baixar currículo
              <span className="font-mono text-xs opacity-60">TODO</span>
            </span>
          )}
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {socialLinks.map(link => {
            const Icon = iconMap[link.icon]
            if (link.href) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="
                    rounded-lg p-2 text-gray-500 dark:text-gray-400
                    hover:text-gray-900 dark:hover:text-gray-100
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                    transition-colors duration-200
                  "
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            }
            return (
              <span
                key={link.label}
                title={`TODO: ${link.label} não configurado`}
                className="rounded-lg p-2 text-gray-300 dark:text-gray-700 cursor-not-allowed"
                aria-label={`${link.label} — ainda não configurado`}
              >
                <Icon className="h-5 w-5" />
              </span>
            )
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollToSection('sobre')}
        aria-label="Rolar para a seção Sobre"
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          animate-bounce rounded-full p-2
          text-gray-400 dark:text-gray-600
          hover:text-gray-600 dark:hover:text-gray-400
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
          transition-colors
        "
      >
        <ArrowDownIcon className="h-5 w-5" />
      </button>
    </section>
  )
}
