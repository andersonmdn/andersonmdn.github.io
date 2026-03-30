import { GitHubIcon, LinkedInIcon } from '../components/Icons'
import { person } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          &copy; {year} {person.name}. Feito com React + Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              rounded-lg p-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-300
              hover:bg-gray-100 dark:hover:bg-gray-800
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
              transition-colors
            "
          >
            <GitHubIcon className="h-4 w-4" />
          </a>

          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                rounded-lg p-2 text-gray-400 hover:text-[#0A66C2] dark:hover:text-[#70a9e0]
                hover:bg-gray-100 dark:hover:bg-gray-800
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                transition-colors
              "
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
