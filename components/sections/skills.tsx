"use client"

import { cn } from "@/lib/utils"
import { Code2, Palette, Layers, Globe, Zap, GitBranch, Server, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const technicalSkills = [
  { name: "React / Next.js", level: 92, color: "from-fuchsia-500 to-purple-600" },
  { name: "JavaScript (ES6+)", level: 90, color: "from-yellow-400 to-orange-500" },
  { name: "HTML5 / CSS3", level: 98, color: "from-pink-500 to-fuchsia-600" },
  { name: "Tailwind CSS / SCSS", level: 95, color: "from-cyan-400 to-teal-500" },
  { name: "Responsive / Mobile-First Design", level: 95, color: "from-fuchsia-500 to-cyan-400" },
  { name: "Framer Motion", level: 90, color: "from-indigo-500 to-purple-500" },
  { name: "TypeScript (Assisted)", level: 70, color: "from-blue-400 to-cyan-400" },
  { name: "REST API Integration (Assisted)", level: 75, color: "from-indigo-400 to-purple-400" },
  { name: "Sanity CMS (Assisted)", level: 70, color: "from-green-400 to-teal-500" },
  { name: "RTL / Arabic Layouts", level: 80, color: "from-red-400 to-pink-500" },
  { name: "Figma (Assisted)", level: 65, color: "from-fuchsia-400 to-purple-400" },
]

const tools = [
  { name: "React", icon: Code2, color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", icon: Layers, color: "from-gray-500 to-gray-700" },
  { name: "VS Code", icon: Code2, color: "from-blue-500 to-indigo-500" },
  { name: "Cursor", icon: Code2, color: "from-blue-500 to-indigo-500" },
  { name: "Git & GitHub", icon: GitBranch, color: "from-orange-500 to-red-500" },
  { name: "AI & Interactive Design", icon: Zap, color: "from-fuchsia-500 to-purple-500" },
]

const expertise = [
  {
    title: "Frontend Development",
    description: "Building scalable and responsive web applications using React and Next.js with modern architecture.",
    icon: Code2,
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "UI Implementation",
    description: "Transforming UI/UX designs into pixel-perfect, responsive interfaces with clean component structure.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Performance Optimization",
    description: "Improving loading speed, SEO, and accessibility using modern frontend best practices.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "API Integration (Assisted)",
    description: "Connecting frontend applications with REST APIs, handling dynamic data with guidance.",
    icon: Server,
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Dynamic CMS Integration (Assisted)",
    description: "Connecting content from Sanity CMS into frontend applications with support.",
    icon: Layers,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Interactive UI & Micro-interactions",
    description: "Implementing engaging, smooth animations and responsive UI patterns using Framer Motion and Tailwind CSS.",
    icon: Sparkles,
    color: "from-indigo-500 to-purple-500",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
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
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Frontend Developer specializing in React and Next.js, focused on building modern, performant, and user-friendly web applications.
          </p>
        </div>

        <div className="space-y-16">
          {/* Technical Skills - Marquee */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
            </div>

            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />

              <div className="flex gap-4 w-max animate-marquee">
                {[...technicalSkills, ...technicalSkills].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 whitespace-nowrap"
                  >
                    <div className={cn("w-2 h-2 rounded-full bg-gradient-to-r shrink-0", skill.color)} />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    {skill.name.includes("Assisted") && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 uppercase tracking-tighter font-semibold">
                        Developing
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4 font-medium">Tools I work with:</p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <tool.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Areas of Expertise</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className={cn("inline-flex p-3 rounded-xl bg-gradient-to-br mb-4", item.color)}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
