"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

const skills = [
  { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-blue-500" },
  { name: "React", level: 90, color: "from-primary to-accent" },
  { name: "Next.js", level: 85, color: "from-accent to-primary" },
  { name: "UI/UX Design", level: 80, color: "from-pink-500 to-primary" },
  { name: "TypeScript", level: 75, color: "from-blue-500 to-indigo-500" },
  { name: "Responsive Design", level: 95, color: "from-primary to-pink-500" },
]

function SkillBar({ name, level, color, isVisible }: { name: string; level: number; color: string; isVisible: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full bg-gradient-to-r rounded-full transition-all duration-1000 ease-out",
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
      { threshold: 0.2 }
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
      className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="opacity-0 animate-in fade-in slide-in-from-left-4 fill-mode-forwards"
              style={{ animationDelay: `${index * 100}ms`, animationDuration: "500ms" }}
            >
              <SkillBar {...skill} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
