import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function CaseStudyBackLink() {
  return (
    <Link
      href="/#projects"
      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group mb-8"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-card/50 group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors">
        <ArrowLeft className="h-4 w-4" />
      </span>
      Back to Projects
    </Link>
  )
}
