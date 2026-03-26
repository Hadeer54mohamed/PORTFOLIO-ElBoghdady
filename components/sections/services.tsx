"use client"

import { Code2, Gauge, Palette, Smartphone } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive, modern web applications using the latest technologies like React and Next.js.",
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Creating fast, smooth, and SEO-friendly websites that deliver exceptional user experiences.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Palette,
    title: "Creative UI/UX",
    description: "Designing visually stunning, user-friendly interfaces that captivate and engage users.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring cross-device consistency and accessibility for all screen sizes and devices.",
    gradient: "from-fuchsia-500 to-purple-600",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            What I can do for you
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden opacity-0 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards"
              style={{ animationDelay: `${index * 100}ms`, animationDuration: "700ms" }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute -inset-px bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              
              <div className="relative h-full p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-transparent transition-all duration-500 hover:shadow-xl hover:shadow-fuchsia-500/10 hover:-translate-y-2">
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
