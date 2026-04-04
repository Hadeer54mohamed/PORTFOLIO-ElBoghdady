"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  "Frontend Developer",
  "Responsive Web Developer",
  "Web Designer",
  "React Developer",
  "Next.js Developer",
  "UI Developer",
]

const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 10, suffix: "+" },
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
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 md:pt-32 lg:pt-36"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-10 left-5 w-40 h-40 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl animate-float opacity-60" />
      <div className="absolute bottom-10 right-5 w-48 h-48 md:w-96 md:h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content Side - NOW FIRST ON MOBILE */}
          <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">

            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase drop-shadow-sm">Available for Work</span>
            </div>

            {/* Headline Section */}
            <div className="space-y-3 w-full">
              <h1 className="font-bold tracking-tight leading-tight">
                <span className="text-foreground text-2xl sm:text-3xl block mb-1 opacity-90 drop-shadow-md">Hi, I’m</span>
                <span className="text-4xl sm:text-5xl md:text-6xl block bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent italic pb-2 drop-shadow-sm">
                  Hadeer ElBoghdady
                </span>
              </h1>

              <div className="text-xl sm:text-3xl font-bold min-h-[40px]">
                <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
                  {typedText}
                </span>
                <span className="animate-blink text-primary ml-1">|</span>
              </div>

              <h2 className="text-foreground text-lg sm:text-2xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-sm">
                I don’t just build interfaces, I craft experiences that <span className="text-primary italic">feel alive.</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed opacity-90 border-none lg:border-l-2 border-primary/20 lg:pl-4">
              I design and build interactive, high-performance web experiences that don’t just look good — they respond, feel, and engage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Link href="#projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-primary/40 transition-all hover:-translate-y-1">
                  Explore My Work <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 rounded-xl border-primary/30 backdrop-blur-md hover:bg-primary/10 transition-all hover:-translate-y-1">
                  Get in Touch
                </Button>
              </Link>
            </div>
            <div className="w-full space-y-8 pt-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {[
                  { Icon: Github, href: "https://github.com/Hadeer54mohamed", label: "GitHub" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/hadeer-elboghdady-2106a1252", label: "LinkedIn" },
                  { Icon: Mail, href: "mailto:hadeerelboghdady54@gmail.com", label: "Email" },

                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="p-3 rounded-xl bg-secondary/30 hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1 border border-white/5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
                <div className="h-px w-8 bg-border/50 mx-2" />
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Connect</span>
              </div>


            </div>

            {/* Stats - Centered on Mobile */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-border/50 w-full lg:w-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground uppercase font-bold tracking-tighter sm:tracking-normal">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side - NOW SECOND ON MOBILE */}
          <div className="order-2 lg:order-2 flex flex-col items-center lg:items-end gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="relative group">
              <div className="absolute -inset-4 sm:-inset-10 bg-gradient-to-r from-purple-600/25 via-fuchsia-500/20 to-cyan-400/25 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-700 animate-float" />

              <div className="relative animate-float will-change-transform">
                <Image
                  src="/images/hero.png"
                  alt="Hadeer ElBoghdady"
                  width={450}
                  height={450}
                  className="relative rounded-2xl border-2 border-primary/20 object-cover w-85 h-70 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[480px] shadow-[0_0_50px_rgba(217,70,239,0.15)] transition-all duration-500 group-hover:scale-[1.03] group-hover:border-primary/40"
                  priority
                />

                {/* Experience Badge */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 px-4 py-2  bg-card/90 backdrop-blur-md border border-cyan-400/30 rounded-xl shadow-xl transition-all duration-300 hover:scale-110 hover:-rotate-3 cursor-default group/badge1 z-20">
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-medium italic group-hover/badge1:text-cyan-400 transition-colors">Experience</p>
                  <p className="text-xs sm:text-sm font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">2+ Years</p>
                </div>

                {/* Specializing Badge*/}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 px-4 py-2 bg-card/90 backdrop-blur-md border border-primary/30 rounded-xl shadow-xl  transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-default  group/badge2 z-20"
                  style={{ animationDelay: "0.5s" }}>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-medium text-right italic group-hover/badge2:text-primary transition-colors">Specializing in</p>
                  <p className="text-xs sm:text-sm font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(217,70,239,0.3)]">
                    React & Next.js
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap justify-center gap-2.5 max-w-[320px] sm:max-w-none">
              {[
                "React","Next.js","JavaScript","TypeScript","Tailwind CSS","CSS","Framer Motion","RTL / Arabic","UI/UX","Sanity CMS"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-[10px] sm:text-xs font-semibold rounded-full 
                   bg-secondary/40 border border-primary/10 text-foreground/90 
                   backdrop-blur-md shadow-sm transition-all duration-300 hover:bg-primary/20 hover:border-primary/40 hover:-translate-y-1 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}