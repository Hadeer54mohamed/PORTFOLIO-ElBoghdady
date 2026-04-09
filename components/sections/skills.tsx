"use client"

import { cn } from "@/lib/utils"
import { Code2, Palette, Layers, Globe, Zap, GitBranch, Server, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Gauge, Smartphone, Layout, Activity, Monitor } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive, modern web applications using React, Next.js, and Tailwind CSS. Experienced in creating modular components and reusable layouts.",
    badge: "Frontend"
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Optimizing website speed, SEO, and smooth animations to deliver fast and engaging user experiences, based on real project improvements.",
    badge: "Optimization"
  },
  {
    icon: Palette,
    title: "Creative UI/UX",
    description: "Designing visually appealing interfaces with a focus on user engagement, micro-interactions, and intuitive navigation.",
    badge: "Design"
  },
  {
    icon: Smartphone,
    title: "Responsive & RTL Design",
    description: "Ensuring websites work seamlessly on all devices and support Arabic/RTL layouts without breaking design.",
    badge: "Mobile/RTL"
  },
  {
    icon: Layout,
    title: "Component Architecture",
    description: "Creating maintainable and scalable component structures in Next.js for efficient development and easy updates.",
    badge: "Architecture"
  },
  {
    icon: Activity,
    title: "Animations & Micro-interactions",
    description: "Adding subtle animations, hover effects, and interactive elements to enhance user experience and project polish.",
    badge: "Motion"
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Quickly translating design ideas into functional, interactive prototypes for testing concepts before full implementation.",
    badge: "Prototype"
  },
  {
    icon: Monitor,
    title: "Luxury UI & Branding",
    description: "Crafting premium, elegant interfaces with attention to typography, colors, and subtle details that define high-end digital experiences.",
    badge: "Branding"
  },
]

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


export function SkillsSection() {
  return (
    <section id="skills" className="py-8 lg:py-12 relative overflow-hidden">
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
        </div>
      </div>
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="py-8 lg:py-12 relative overflow-hidden"
      >
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob delay-2000" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            What I <span className="text-primary">Deliver</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From design to deployment, I provide end-to-end frontend solutions tailored to your needs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />

                <CardHeader className="relative text-center pb-2">
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 self-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.badge}
                  </span>
                  <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative mt-auto pb-8">
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
    
  )
}
