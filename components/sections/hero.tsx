"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  "Frontend Developer",
  "React Specialist",
  "Next.js Developer",
  "UI Engineer",
]

const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Happy Clients", value: 15, suffix: "+" },
]

function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1))
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)
          
          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{count}{suffix}</span>
}

export function HeroSection() {
  const typedText = useTypingEffect(roles)

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Cyberpunk floating shapes with enhanced animation */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary animate-in fade-in slide-in-from-left-4 duration-700">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">Available for Work</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
                <span className="text-foreground">{"Hi, I'm "}</span>
                <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                  Hadeer
                </span>
              </h1>
              <div className="h-10 md:h-12 animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
                <p className="text-xl md:text-2xl lg:text-3xl font-light">
                  <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent font-semibold">
                    {typedText}
                  </span>
                  <span className="animate-blink text-primary">|</span>
                </p>
              </div>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
                Turning ideas into interactive digital experiences. I craft beautiful, responsive, and user-centric web applications with modern technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-400">
              <Link href="#projects">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
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
                  className="px-8 py-6 text-base rounded-xl border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300 hover:-translate-y-1"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Hadeer54mohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/hadeer-mohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hadeer@example.com"
                  className="group p-2.5 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Stats with animated counters */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border/50 animate-in fade-in slide-in-from-left-4 duration-700 delay-700">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-cyan-400/30 rounded-2xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
              
              {/* Radial glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/30 to-cyan-400/40 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition duration-500 animate-float" />
              
              {/* Image container with floating animation */}
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-400/20 rounded-2xl" />
                <Image
                  src="/images/profile.png"
                  alt="Hadeer Mohamed ElBoghdady"
                  width={450}
                  height={450}
                  className="relative rounded-2xl border-2 border-primary/20 object-cover w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] shadow-2xl shadow-fuchsia-500/20 group-hover:shadow-fuchsia-500/40 transition-shadow duration-500"
                  priority
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-card/95 backdrop-blur-md border border-primary/30 rounded-xl shadow-lg shadow-primary/20 animate-float" style={{ animationDelay: "0.5s" }}>
                  <p className="text-xs text-muted-foreground">Specializing in</p>
                  <p className="text-sm font-semibold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">React & Next.js</p>
                </div>

                {/* Experience badge */}
                <div className="absolute -top-4 -left-4 px-4 py-2 bg-card/95 backdrop-blur-md border border-cyan-400/30 rounded-xl shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <p className="text-xs text-muted-foreground">Experience</p>
                  <p className="text-sm font-semibold text-cyan-400">3+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 hover:border-primary/60 transition-colors">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
