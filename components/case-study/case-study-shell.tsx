"use client"

import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"

export function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-32 right-0 w-[480px] h-[480px] bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -left-24 w-[360px] h-[360px] bg-accent/10 rounded-full blur-[90px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <div className="relative z-10 flex-1 pt-20 lg:pt-24">{children}</div>

      <Footer />
    </div>
  )
}
