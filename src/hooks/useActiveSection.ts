import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'sobre',
  'impactos',
  'experiencia',
  'stack',
  'projetos',
  'certificacoes',
  'contato',
] as const

export function useActiveSection(): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        {
          threshold: 0,
          rootMargin: '-30% 0px -60% 0px',
        },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return active
}
