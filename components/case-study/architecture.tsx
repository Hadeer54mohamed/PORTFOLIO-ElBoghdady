import { ArrowDown } from "lucide-react"
import type { ArchitectureStack } from "@/data/projects"
import { CaseStudySectionTitle } from "@/components/case-study/section-title"

function ArchitectureColumn({ stack }: { stack: ArchitectureStack }) {
  return (
    <div className="flex-1 min-w-[160px] rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 shadow-sm">
      {stack.label && (
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5 text-center">
          {stack.label}
        </p>
      )}
      <div className="flex flex-col items-center gap-1">
        {stack.nodes.map((node, i) => (
          <div key={node} className="flex flex-col items-center w-full">
            <div className="w-full text-center rounded-xl border border-border/50 bg-background/90 px-4 py-3 text-sm font-medium text-foreground shadow-sm">
              {node}
            </div>
            {i < stack.nodes.length - 1 && (
              <ArrowDown className="w-4 h-4 my-1.5 text-primary/40 shrink-0" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function CaseStudyArchitecture({ stacks }: { stacks: ArchitectureStack[] }) {
  return (
    <section className="mb-12">
      <CaseStudySectionTitle>Architecture</CaseStudySectionTitle>
      <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
        Sanity powers the full content layer — products, categories, shipping, testimonials, and reels — before it
        reaches the storefront.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center">
        {stacks.map((stack) => (
          <ArchitectureColumn key={stack.label ?? stack.nodes[0]} stack={stack} />
        ))}
      </div>
    </section>
  )
}
