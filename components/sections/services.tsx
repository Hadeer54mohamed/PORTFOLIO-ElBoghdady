"use client"

import { Code2, Gauge, Palette, Smartphone, Layout, Activity, Zap, Monitor } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

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

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob delay-2000" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Skills & expertise I bring to my projects
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
    </section>
  )
}