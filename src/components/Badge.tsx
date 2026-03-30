import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'accent' | 'subtle'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors',
        variant === 'default' &&
          'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
        variant === 'accent' &&
          'bg-accent/10 text-accent-700 dark:bg-accent/15 dark:text-accent-400',
        variant === 'subtle' &&
          'bg-transparent border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400',
        className,
      )}
    >
      {children}
    </span>
  )
}
