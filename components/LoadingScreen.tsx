"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const messages = [
  "Initializing portfolio...",
  "Loading components...",
  "Preparing UI system...",
  "Optimizing experience...",
  "Welcome..."
]

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev))
    }, 500)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => {
      clearInterval(textInterval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          {/* glow background */}
          <div className="absolute w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full animate-pulse" />

          {/* content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-4 font-mono"
          >
            {/* logo / name */}
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400">
              Dede Portfolio
            </h1>

            {/* glitch line */}
            <div className="text-sm text-muted-foreground relative">
              <span className="animate-pulse">▶</span>{" "}
              {messages[textIndex]}

              {/* glitch effect */}
              <span className="absolute left-0 top-0 text-pink-500 opacity-20 blur-[1px] animate-pulse">
                {messages[textIndex]}
              </span>
            </div>

            {/* loading bar */}
            <div className="w-64 h-[2px] bg-muted overflow-hidden rounded-full mt-4">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}