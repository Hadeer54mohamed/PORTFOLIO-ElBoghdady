import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShowcaseHeroImage({ src, alt, demo }: { src: string; alt: string; demo: string }) {
  return (
    <div className="relative flex flex-col items-center lg:items-start pb-8 lg:pb-12">      {/* Pink glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] rounded-3xl blur-3xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.65 0.28 320 / 0.45) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative w-full max-w-[240px] sm:max-w-[280px]">
        {/* Stack layers */}
        <div
          className="absolute inset-0 rounded-2xl border border-primary/20 bg-card/40 -rotate-3 translate-x-2 translate-y-3 scale-[0.97] shadow-lg"
          aria-hidden
        />
        <div
          className="absolute inset-0 rounded-2xl border border-primary/15 bg-card/30 rotate-2 -translate-x-1 translate-y-2 scale-[0.98] shadow-md"
          aria-hidden
        />

        {/* Main frame */}
        <div className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/15 ring-1 ring-primary/20 bg-background z-10">
          <Image
            src={src}
            alt={alt}
            width={390}
            height={844}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        {/* Reflection */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-8 rounded-[100%] opacity-30 blur-md bg-primary/50 pointer-events-none"
          aria-hidden
        />
      </div>

      <Button
        asChild
        size="sm"
        className="mt-6 w-full max-w-[240px] sm:max-w-[280px] bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-md shadow-primary/15"
      >
        <Link href={demo} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Live Demo
        </Link>
      </Button>
    </div>
  )
}