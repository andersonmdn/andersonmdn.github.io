import type { ComponentType, SVGProps } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { impacts } from '../data/portfolio'
import {
  ZapIcon,
  DatabaseIcon,
  ShieldIcon,
  CpuIcon,
  BookOpenIcon,
  WrenchIcon,
} from '../components/Icons'
import type { Impact } from '../types'

const iconComponents = {
  zap: ZapIcon,
  database: DatabaseIcon,
  shield: ShieldIcon,
  cpu: CpuIcon,
  book: BookOpenIcon,
  wrench: WrenchIcon,
} satisfies Record<Impact['icon'], ComponentType<SVGProps<SVGSVGElement>>>

export function Impacts() {
  return (
    <div className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            id="impactos-heading"
            title="Principais impactos"
            subtitle="Resultados concretos construídos ao longo de 11 anos em produção"
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map((impact, i) => {
            const Icon = iconComponents[impact.icon]
            return (
              <ScrollReveal key={i} delay={i * 60}>
                <article className="
                  group flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800
                  bg-white dark:bg-gray-900 p-6 h-full
                  hover:border-accent/40 dark:hover:border-accent/30
                  hover:shadow-sm dark:hover:shadow-accent/5
                  transition-all duration-300
                ">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                      {impact.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {impact.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
