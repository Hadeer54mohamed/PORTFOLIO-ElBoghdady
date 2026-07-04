import { Check } from "lucide-react"
import { CaseStudySectionTitle } from "@/components/case-study/section-title"

export function CaseStudyProjectHighlights({ items }: { items: string[] }) {
  return (
    <section className="mb-12 rounded-2xl border border-border/40 bg-card/25 backdrop-blur-sm p-6 md:p-8">
      <CaseStudySectionTitle>Project Highlights</CaseStudySectionTitle>
      <p className="text-muted-foreground text-sm mb-6">Quick scan before the deep dive.</p>
      <ul className="grid sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-xl border border-border/30 bg-background/50 px-4 py-3 text-sm text-foreground/90 hover:border-primary/20 transition-colors"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
              <Check className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2.5} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
