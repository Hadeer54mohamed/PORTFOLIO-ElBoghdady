"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Happy Clients", value: "15+" },
]

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Cyberpunk floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Available for Work</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">{"Hi, I'm "}</span>
                <span className="bg-gradient-to-r from-primary via-fuchsia-500 to-accent bg-clip-text text-transparent">
                  Hadeer
                </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                <span className="text-primary font-semibold">Creative Frontend Developer</span>
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
                Turning ideas into interactive digital experiences. I craft beautiful, responsive, and user-centric web applications with modern technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#projects">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-fuchsia-600 hover:from-primary/90 hover:to-fuchsia-600/90 text-primary-foreground px-8 py-6 text-base rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base rounded-xl border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hadeer@example.com"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border/50">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/30 rounded-2xl" />
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-fuchsia-500 to-accent rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse" />
              
              {/* Image container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-2xl" />
                <Image
                  src="/images/profile.png"
                  alt="Hadeer Mohamed"
                  width={450}
                  height={450}
                  className="relative rounded-2xl border border-primary/20 object-cover w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] shadow-2xl shadow-primary/20"
                  priority
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 px-4 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-xl shadow-lg">
                  <p className="text-xs text-muted-foreground">Specializing in</p>
                  <p className="text-sm font-semibold text-primary">React & Next.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
