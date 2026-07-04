"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  getFeaturedProjects,
  getGridProjects,
  getHomeImage,
  getProjectPreviewText,
  type Project,
} from "@/data/projects"

function getFeaturedPreview(project: Project) {
  return {
    summary: getProjectPreviewText(project),
    highlights: project.highlights ?? [],
  }
}

const FALLBACK_IMAGE = "/projects/image.png"

function ProjectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={600}
      height={340}
      className={className}
      onError={() => {
        if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE)
      }}
    />
  )
}

function FeaturedProjectCard({ project }: { project: Project }) {
  const { summary, highlights } = getFeaturedPreview(project)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto mb-16"
    >
      <Card className="group overflow-hidden bg-card/40 backdrop-blur-md border border-border/40 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[320px] overflow-hidden border-b lg:border-b-0 lg:border-r border-border/30">
            <ProjectImage
              src={getHomeImage(project)}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/30" />
          </div>

          <div className="flex flex-col p-6 md:p-8 lg:p-10">
            <Badge className="w-fit mb-4 bg-primary/15 text-primary hover:bg-primary/20 border-primary/30">
              Featured Project
            </Badge>

            <CardTitle className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>

            <p className="text-muted-foreground leading-relaxed mb-5">{summary}</p>

            {highlights.length > 0 && (
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 border-none"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Link href={`/projects/${project.slug}`}>
                  Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary">
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const preview = getProjectPreviewText(project)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden bg-card/40 backdrop-blur-md border border-border/40 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full">
        <Link href={`/projects/${project.slug}`} className="flex flex-col flex-1 min-h-0 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-t-lg">
          <div className="relative overflow-hidden">
            <ProjectImage
              src={getHomeImage(project)}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>

          <CardHeader className="space-y-3 flex-1">
            <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>

            <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-4">
              {preview}
            </CardDescription>
            <p className="text-xs font-medium text-primary pt-1">View case study →</p>
          </CardHeader>
        </Link>

        <CardContent className="space-y-4 mt-auto pt-0">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 border-none"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button asChild size="sm" variant="outline" className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary">
              <Link href={`/projects/${project.slug}`}>Details</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  const featured = getFeaturedProjects()
  const grid = getGridProjects()

  return (
    <section id="projects" className="pt-8 lg:pt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            A showcase of my work, focused on building modern, scalable, and engaging web experiences.
          </p>
        </div>

        {featured.map((project) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {grid.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
