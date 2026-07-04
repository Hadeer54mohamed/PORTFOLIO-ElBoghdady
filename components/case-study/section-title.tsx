import type { ReactNode } from "react"

export function CaseStudySectionTitle({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={`text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${className}`}
    >
      {children}
    </h2>
  )
}
