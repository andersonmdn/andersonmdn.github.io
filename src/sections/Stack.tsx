import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { skillGroups } from '../data/portfolio'

const groupAccents = [
  'border-blue-200 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-900/10',
  'border-violet-200 dark:border-violet-900/40 bg-violet-50/50 dark:bg-violet-900/10',
  'border-accent/30 dark:border-accent/20 bg-accent/5 dark:bg-accent/5',
]

const badgeStyles = [
  'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
  'bg-accent/10 text-accent-800 dark:bg-accent/15 dark:text-accent-300',
]

export function Stack() {
  return (
    <div className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            id="stack-heading"
            title="Stack e competências"
            subtitle="Ferramentas, práticas e frentes de estudo"
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <ScrollReveal key={groupIndex} delay={groupIndex * 80}>
              <div
                className={`rounded-xl border p-6 h-full ${groupAccents[groupIndex % groupAccents.length]}`}
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2" aria-label={`Competências: ${group.label}`}>
                  {group.skills.map(skill => (
                    <li key={skill}>
                      <span
                        className={`
                          inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium
                          ${badgeStyles[groupIndex % badgeStyles.length]}
                        `}
                      >
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
