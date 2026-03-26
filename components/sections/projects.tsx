"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Uzersaif Portfolio",
    description: "Personal portfolio built with Next.js, Tailwind CSS, React components architecture. Features modern design with smooth animations and interactive elements.",
    image: "/images/project-uzersaif.jpg",
    technologies: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
    github: "https://github.com/Hadeer54mohamed/uzersaif",
    demo: "https://uzersaif.com",
  },
  {
    title: "Noureldeen Website",
    description: "Arabic multi-language website with dynamic components and responsive design. Built with accessibility and RTL support for seamless Arabic experience.",
    image: "/images/project-noureldeen.jpg",
    technologies: ["Next.js", "SCSS", "Multi-language", "Responsive"],
    github: "https://github.com/Hadeer54mohamed/noureldeen",
    demo: "https://noureldeen.co/ar",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section id="projects" className="py-10 lg:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            A showcase of my recent work, demonstrating my passion for creating beautiful and functional web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-fuchsia-500/10 hover:-translate-y-2 opacity-0 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards"
              style={{ animationDelay: `${index * 150}ms`, animationDuration: "700ms" }}
            >
              {/* Gradient border glow effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-purple-500/50 via-fuchsia-500/50 to-cyan-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative bg-card rounded-2xl overflow-hidden">
                {/* Image with overlay */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover overlay with buttons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-secondary/80 backdrop-blur-sm text-foreground rounded-lg font-medium border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                      style={{ transitionDelay: "50ms" }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Link>
                  </div>
                  
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
