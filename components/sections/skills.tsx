"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Code2, Palette, Layers, Globe, Zap, Database, Figma, GitBranch } from "lucide-react"

// Technical skills with progress bars
const technicalSkills = [
  { name: "React / Next.js", level: 92, color: "from-fuchsia-500 to-purple-600" },
  { name: "JavaScript (ES6+)", level: 90, color: "from-yellow-400 to-orange-500" },
  { name: "TypeScript", level: 85, color: "from-blue-500 to-cyan-400" },
  { name: "HTML5 / CSS3", level: 98, color: "from-pink-500 to-fuchsia-600" },
  { name: "Tailwind CSS / SCSS", level: 95, color: "from-cyan-400 to-teal-500" },
  { name: "Responsive Design", level: 95, color: "from-fuchsia-500 to-cyan-400" },
  { name: "REST API Integration", level: 88, color: "from-indigo-500 to-purple-500" },
]

// Tool cards
const tools = [
  { name: "React", icon: Code2, color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", icon: Layers, color: "from-gray-500 to-gray-700" },
  { name: "Figma", icon: Figma, color: "from-fuchsia-500 to-purple-500" },
  { name: "Git & GitHub", icon: GitBranch, color: "from-orange-500 to-red-500" },
  { name: "VS Code", icon: Code2, color: "from-blue-500 to-indigo-500" },
]

// Expertise areas
const expertise = [
  {
    title: "Frontend Development",
    description: "Building scalable and responsive web applications using React and Next.js with modern architecture.",
    icon: Code2,
    color: "from-fuchsia-500 to-purple-600"
  },
  {
    title: "UI Implementation",
    description: "Transforming UI/UX designs into pixel-perfect, responsive interfaces with clean component structure.",
    icon: Palette,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Performance Optimization",
    description: "Improving loading speed, SEO, and accessibility using modern frontend best practices.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "API Integration",
    description: "Connecting frontend applications with REST APIs and handling dynamic data efficiently.",
    icon: Database,
    color: "from-cyan-500 to-teal-500"
  },
]

function SkillBar({ name, level, color, isVisible, index }: { name: string; level: number; color: string; isVisible: boolean; index: number }) {
  return (
    <div
      className="space-y-2 opacity-100 animate-in fade-in slide-in-from-left-4 fill-mode-forwards"
      style={{ animationDelay: `${index * 120}ms`, animationDuration: "500ms" }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{level}%</span>
      </div>
      <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full bg-gradient-to-r rounded-full transition-all duration-1000 ease-out shadow-sm",
            color
          )}
          style={{ width: isVisible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-5 lg:py-15 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            My Toolkit
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-fuchsia-500 to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Technologies and tools I use to bring ideas to life
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Frontend Developer specializing in React and Next.js, focused on building
            modern, performant, and user-friendly web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Technical Skills */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
            </div>

            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} isVisible={isVisible} index={index} />
              ))}
            </div>

            {/* Tools */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">Tools I work with:</p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 opacity-100 animate-in fade-in fill-mode-forwards"
                    style={{ animationDelay: `${(index + 6) * 100}ms`, animationDuration: "500ms" }}
                  >
                    <tool.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Expertise Cards */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Areas of Expertise</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 opacity-100 animate-in fade-in slide-in-from-right-4 fill-mode-forwards"
                  style={{ animationDelay: `${index * 150}ms`, animationDuration: "500ms" }}
                >
                  <div className={cn(
                    "inline-flex p-2.5 rounded-xl bg-gradient-to-br mb-4",
                    item.color
                  )}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
