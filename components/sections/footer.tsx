"use client"

import Link from "next/link"
import { Github, Linkedin, Heart, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Hadeer54mohamed",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hadeer-mohamed",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:hello@hadeer.dev",
    icon: Mail,
  },
]

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-primary/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/10 via-fuchsia-500/5 to-cyan-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="py-16 lg:py-20">
          <div className="flex flex-col items-center gap-10">
            {/* Logo with glow */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Link
                href="/"
                className="relative text-3xl font-bold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                Dede
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 rounded-full bg-secondary/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-fuchsia-500/20"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
                &copy; {currentYear} Hadeer Mohamed ElBoghdady. Made with
                <Heart className="w-4 h-4 text-fuchsia-500 fill-fuchsia-500 animate-pulse" />
              </p>
              <p className="text-xs text-muted-foreground/60">
                Frontend Developer | Building Digital Experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
