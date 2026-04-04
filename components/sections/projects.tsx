"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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

const projects = [
  {
    title: "Basmat Alidrak",
    description: "A high-end Arabic corporate platform featuring a cinematic interactive experience. Optimized for performance with Next.js, utilizing Framer Motion for fluid animations and full RTL layout integration.",
    image: "/projects/basmat.png",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "RTL"],
    github: "https://github.com/Hadeer54mohamed/basmat-alidrak.git",
    demo: "https://basmat-alidrak-kg43.vercel.app/",
  },

  {
    title: "Feminista Accessories",
    description: "A premium e-commerce UI concept focused on luxury branding. Features sophisticated navigation patterns, scroll-triggered animations, and a mobile-first responsive architecture. All products, reviews, and reels are dynamically managed via Sanity CMS for a fully scalable content-driven experience.",
    image: "/projects/feminista.png",
    technologies: ["Next.js", "UI/UX", "Animations", "Responsive", "Sanity CMS"],
    github: "https://github.com/Hadeer54mohamed/Feminista-Accessories.git",
    demo: "https://feminista-accessories.vercel.app/",
  },

  {
    title: "Uzersaif",
    description: "Personal portfolio built with Next.js, Tailwind CSS, React components architecture. Features modern design with smooth animations.",
    image: "/projects/uzersaif.png",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    github: "https://github.com/Hadeer54mohamed/Uzi.git",
    demo: "https://uzersaif.com",
  },

  {
    title: "Noureldeen",
    description: "A multi-lingual dynamic web application with a focus on User Accessibility (A11y). Implements complex RTL layouts and scalable component architecture using React.",
    image: "/projects/noureldeen.png",
    technologies: ["React", "Multi-language", "Responsive"],
    github: "https://github.com/Hadeer54mohamed/noureldeen",
    demo: "https://noureldeen.co/ar",
  }
]

// ===== Featured Projects  =====
export const featuredProjects = [
  {
    title: "Ember Bloom Menu",
    description: "A sophisticated digital menu interface crafted for high-end dining experiences. Features seamless micro-interactions, optimized image loading, and a fluid responsive layout built with Next.js and Tailwind CSS.",
    image: "/projects/ember-bloom-menu.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Mobile-First Design", "Framer Motion"],
    github: "https://github.com/Hadeer54mohamed/ember-bloom-menu",
    demo: "https://ember-bloom-menu.vercel.app/",
  },
  {
    title: "N-IR Menu",
    description: "A minimalist and functional menu system highlighting modern UI patterns. Focused on performance and cross-device compatibility, featuring smooth state transitions and a clean, accessible architecture.",
    image: "/projects/N-IR-menu.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Mobile-First Design", "Framer Motion"],
    github: "https://github.com/Hadeer54mohamed/N-IR-menu",
    demo: "https://n-ir-menu.vercel.app/",
  },
];

// ===== Menu UI Explorations =====
export const menuExplorations = [
  {
    title: "Online Menu 1",
    image: "/images/online-menu1.jpg",
    shortDescription: "Interactive menu UI experiment with Tailwind CSS & Next.js.",
    tech: ["Next.js", "Tailwind CSS", "UI/UX"],
    status: "In Progress", // بدل demo link
  },
  {
    title: "Online Menu 2",
    image: "/images/online-menu2.jpg",
    shortDescription: "Responsive and visually engaging menu layout for concept testing.",
    tech: ["Next.js", "Tailwind CSS", "Animations"],
    demo: "https://n-ir-menu.vercel.app/"
  },
  {
    title: "Oceanic Menu",
    image: "/images/oceanic-menu.jpg",
    shortDescription: "Experimental menu design focusing on fluid micro-interactions.",
    tech: ["Next.js", "Tailwind CSS", "Micro-interactions"],
    status: "In Progress",
  },
  {
    title: "Theme Menu",
    image: "/images/theme-menu.jpg",
    shortDescription: "A creative UI exploration with themed styling and layout patterns.",
    tech: ["Next.js", "Tailwind CSS", "UI Design"],
    status: "In Progress",
  },
  {
    title: "MENU2 ORDER",
    image: "/images/MENU2-ORDER.jpg",
    shortDescription: "Prototype menu interface emphasizing user flow and accessibility.",
    tech: ["Next.js", "Tailwind CSS", "Responsive"],
    status: "In Progress",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-10 lg:py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* ===== Section: Original Projects ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            A showcase of my recent work, demonstrating my passion for creating beautiful and functional web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary">
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ===== Section: Featured Projects ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Menu Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance mb-10">
            Selected menu projects demonstrating my skills in UI, micro-interactions, and responsive design.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button asChild variant="outline" size="sm" className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary">
                        <Link href={project.github} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                      <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== Section: Menu UI Explorations ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Interactive Menu UI Explorations
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance mb-10">
            Collection of menu experiments showing different UI concepts, styles, and interactions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuExplorations.map((menu, index) => (
              <motion.div
                key={menu.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <ProjectImage
                      src={menu.image}
                      alt={menu.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors text-center">
                      {menu.title}
                    </CardTitle>
                    <CardDescription className="text-center">{menu.shortDescription}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 mt-auto">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {menu.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2 justify-center">
                      {menu.demo && menu.demo !== "#" ? (
                        <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                          <Link href={menu.demo} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </Link>
                        </Button>
                      ) : (
                        <span className="flex-1 text-center text-sm font-medium text-muted-foreground border border-border rounded-md py-1">
                          {menu.status || "In Progress"}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}