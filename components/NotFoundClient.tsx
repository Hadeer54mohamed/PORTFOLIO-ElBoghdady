"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useRouter } from "next/navigation"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

// 💻 Code to type
const codeText = `const page = await find("this-page");
if (!page) throw new Error("404 — Not Found");`

export default function NotFoundClient() {
  const router = useRouter()

  // typing effect
  const [typed, setTyped] = useState("")

  // glitch state
  const [glitch, setGlitch] = useState(false)

  // mouse interaction
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  // ⌨️ typing animation
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTyped(codeText.slice(0, i))
      i++
      if (i > codeText.length) clearInterval(interval)
    }, 20)

    return () => clearInterval(interval)
  }, [])

  // ⚡ random glitch effect
  useEffect(() => {
    const trigger = () => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 150)
    }

    const interval = setInterval(() => {
      trigger()
    }, Math.random() * 4000 + 2000)

    return () => clearInterval(interval)
  }, [])

  // 🔙 navigation fallback
  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push("/")
    }
  }

  return (
    <section
      onMouseMove={(e) => {
        mouseX.set(e.clientX - window.innerWidth / 2)
        mouseY.set(e.clientY - window.innerHeight / 2)
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-10 left-5 w-40 h-40 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl animate-float opacity-60" />
      <div className="absolute bottom-10 right-5 w-48 h-48 md:w-96 md:h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ rotateX, rotateY }}
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto will-change-transform"
        >
          {/* 🔥 404 Glitch */}
          <motion.h1
            variants={item}
            className="relative text-[clamp(6rem,15vw,14rem)] font-extrabold leading-none bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent select-none"
          >
            404

            <span
              className={`absolute inset-0 text-red-500 blur-[2px] ${
                glitch ? "opacity-40 translate-x-[3px]" : "opacity-0"
              }`}
            >
              404
            </span>

            <span
              className={`absolute inset-0 text-cyan-400 blur-[2px] ${
                glitch ? "opacity-40 -translate-x-[3px]" : "opacity-0"
              }`}
            >
              404
            </span>
          </motion.h1>

          {/* 🧠 Message */}
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
              Oops! Page not found
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              Looks like you took a wrong turn in my codebase 😅
            </p>
          </motion.div>

          {/* ✨ Line */}
          <motion.div
            variants={item}
            className="w-24 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 rounded-full"
          />

          {/* 🎯 Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/#projects">
              <Button className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                <ArrowRight className="mr-2 w-4 h-4" />
                View Projects
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={handleBack}
              className="px-8 py-6 rounded-xl border-primary/30 backdrop-blur-md hover:bg-primary/10 hover:-translate-y-1 transition-all"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </Button>
          </motion.div>

          {/* 💻 Typing Code */}
          <motion.pre
            variants={item}
            className="mt-8 px-6 py-4 rounded-xl bg-card/60 backdrop-blur-md border border-primary/10 font-mono text-xs sm:text-sm text-left whitespace-pre-wrap text-muted-foreground"
          >
            <code>
              {typed}
              <span className="animate-pulse text-primary">|</span>
            </code>
          </motion.pre>
        </motion.div>
      </div>
    </section>
  )
}