interface SectionHeadingProps {
  id?: string
  title: string
  subtitle?: string
}

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-12 bg-accent" aria-hidden="true" />
    </div>
  )
}
