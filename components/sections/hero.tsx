"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Cyberpunk floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl opacity-50" />
            <div className="relative">
              <Image
                src="/images/profile.png"
                alt="Hadeer Mohamed"
                width={320}
                height={320}
                className="rounded-2xl border-2 border-primary/30 object-cover w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 shadow-2xl shadow-primary/20"
                priority
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                Hadeer Mohamed
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              <span className="text-primary font-semibold">Creative Frontend Developer</span>
              {" "}| Turning Ideas into Interactive Experiences
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link href="#projects">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-full border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
