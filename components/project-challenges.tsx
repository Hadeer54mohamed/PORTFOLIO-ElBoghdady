import { Flame, Lightbulb } from "lucide-react"
import type { ChallengeSolution } from "@/data/projects"
import { CaseStudySectionTitle } from "@/components/case-study/section-title"

export function ProjectChallenges({ items }: { items: ChallengeSolution[] }) {
  return (
    <section className="mb-12">
      <CaseStudySectionTitle>Challenges & Solutions</CaseStudySectionTitle>
      <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
        Real engineering problems solved in production — the kind of work that goes beyond a standard storefront build.
      </p>

      <div className="space-y-4">
        {items.map((item, index) => (
          <article
            key={index}
            className="rounded-2xl border border-border/40 bg-card/25 backdrop-blur-sm p-5 md:p-7 space-y-5 hover:border-primary/15 transition-colors"
          >
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                <Flame className="h-5 w-5 text-orange-500" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Challenge</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.challenge}</p>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Lightbulb className="h-5 w-5 text-amber-500" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">Solution</p>
                <p className="text-sm leading-relaxed text-foreground/90">{item.solution}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
