import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { CaseStudyArchitecture } from "@/components/case-study/architecture"
import { CaseStudyBackLink } from "@/components/case-study/case-study-back-link"
import { CaseStudyShell } from "@/components/case-study/case-study-shell"
import { CaseStudyCTA } from "@/components/case-study/cta"
import { CaseStudyGallery } from "@/components/case-study/gallery"
import { CaseStudyProjectHighlights } from "@/components/case-study/project-highlights"
import { ShowcaseHeroImage } from "@/components/case-study/showcase-hero-image"
import { CaseStudyStatsRow } from "@/components/case-study/stats-row"
import { ProjectChallenges } from "@/components/project-challenges"
import { ProjectDescription } from "@/components/project-description"
import {
  getCaseStudyBody,
  getProjectBySlug,
  getProjectPreviewText,
  getShowcaseImage,
  projects,
  type Project,
} from "@/data/projects"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return {
    title: `${project.title} Case Study | Hadeer ElBoghdady`,
    description: getProjectPreviewText(project),
  }
}

function isRichCaseStudy(project: Project) {
  return Boolean(project.stats?.length)
}

function SimpleCaseStudyHero({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-52 sm:h-64 md:h-80 overflow-hidden rounded-2xl border border-border/40 mb-10 shadow-lg">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        className="w-full h-full object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
    </div>
  )
}

function TechBadges({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {technologies.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="bg-muted/60 text-muted-foreground hover:bg-muted border-border/50 font-normal"
        >
          {tech}
        </Badge>
      ))}
    </div>
  )
}

function RichCaseStudyPage({ project }: { project: Project }) {
  const subtitle = getProjectPreviewText(project)
  const heroImage = getShowcaseImage(project)

  return (
    <article className="space-y-12">
      {/* Hero panel */}
      <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-md p-6 md:p-10 shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
        <header className="relative">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/90 mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            Case Study
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6">{subtitle}</p>
          {project.stats && <CaseStudyStatsRow stats={project.stats} />}
        </header>
      </div>

      <div className="lg:grid lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-12 lg:items-start">
        <ShowcaseHeroImage src={heroImage} alt={project.title} demo={project.demo} />
        <div className="rounded-2xl border border-border/40 bg-card/20 backdrop-blur-sm p-6 md:p-8 space-y-4 text-sm leading-relaxed min-w-0">
          <ProjectDescription description={getCaseStudyBody(project.description)} variant="case-study" />
        </div>
      </div>

      {project.caseStudyHighlights && <CaseStudyProjectHighlights items={project.caseStudyHighlights} />}

      {project.challenges && project.challenges.length > 0 && (
        <ProjectChallenges items={project.challenges} />
      )}

      {project.architecture && <CaseStudyArchitecture stacks={project.architecture} />}

      {project.gallery && project.gallery.length > 0 && (
        <CaseStudyGallery images={project.gallery} alt={project.title} />
      )}

      <TechBadges technologies={project.technologies} />

      <CaseStudyCTA
        demo={project.demo}
        github={project.github}
        sourcePrivate={project.sourcePrivate}
        projectTitle={project.title}
      />
    </article>
  )
}

function SimpleCaseStudyPage({ project }: { project: Project }) {
  const subtitle = getProjectPreviewText(project)
  const heroImage = getShowcaseImage(project)

  return (
    <article className="space-y-10">
      <header>
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/90 mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
          Case Study
        </span>
        <SimpleCaseStudyHero src={heroImage} alt={project.title} />
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </header>

      <div className="rounded-2xl border border-border/40 bg-card/20 p-6 md:p-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
        <ProjectDescription description={getCaseStudyBody(project.description)} variant="case-study" />
      </div>

      {project.challenges && project.challenges.length > 0 && (
        <ProjectChallenges items={project.challenges} />
      )}

      <TechBadges technologies={project.technologies} />

      <CaseStudyCTA
        demo={project.demo}
        github={project.github}
        sourcePrivate={project.sourcePrivate}
        projectTitle={project.title}
      />
    </article>
  )
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <CaseStudyShell>
      <div className="container mx-auto px-4 lg:px-8 pb-16 max-w-5xl">
        <CaseStudyBackLink />
        {isRichCaseStudy(project) ? (
          <RichCaseStudyPage project={project} />
        ) : (
          <SimpleCaseStudyPage project={project} />
        )}
      </div>
    </CaseStudyShell>
  )
}
