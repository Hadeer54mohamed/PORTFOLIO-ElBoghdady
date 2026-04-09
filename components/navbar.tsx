"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
/*{ href: "#testimonials", label: "Testimonials" },*/ 
 { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* 🔥 Logo (مهم عشان نربطه بالـ Splash بعدين) */}
          <motion.div layoutId="logo">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/dede-logo.png"
                alt="logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="hidden sm:block text-sm font-semibold tracking-wide">
                Hadeer ElBoghdady
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}

                {/* underline animation */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* 🔥 Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="mt-2 rounded-xl bg-background/80 backdrop-blur-lg border border-white/10 p-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition px-2 py-1 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}