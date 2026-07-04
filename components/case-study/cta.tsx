import Link from "next/link"
import { ExternalLink, FileText, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

type CaseStudyCTAProps = {
  demo: string
  github?: string
  sourcePrivate?: boolean
  projectTitle: string
}

export function CaseStudyCTA({ demo, github, sourcePrivate, projectTitle }: CaseStudyCTAProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card/80 via-card/40 to-primary/[0.06] p-6 md:p-10 shadow-xl shadow-primary/5">
      <div
        className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.28 320 / 0.5), transparent)" }}
        aria-hidden
      />
      <div className="relative">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">Explore {projectTitle}</h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-lg">
          {sourcePrivate
            ? "Live production storefront — source available on request."
            : "See the project in action or browse the implementation."}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20"
          >
            <Link href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Link>
          </Button>
          {github && !sourcePrivate ? (
            <Button asChild size="lg" variant="outline" className="border-border/60 hover:bg-muted/50">
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </Link>
            </Button>
          ) : (
            <Button asChild size="lg" variant="outline" className="border-border/60 hover:bg-muted/50">
              <Link href="/#projects">
                <FileText className="w-4 h-4 mr-2" />
                Project Overview
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
