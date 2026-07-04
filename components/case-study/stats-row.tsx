export function CaseStudyStatsRow({ stats }: { stats: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-2.5">
      {stats.map((stat) => (
        <div
          key={stat}
          className="rounded-full border border-primary/15 bg-gradient-to-br from-primary/[0.07] to-transparent px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground/90 shadow-sm backdrop-blur-sm"
        >
          {stat}
        </div>
      ))}
    </div>
  )
}
