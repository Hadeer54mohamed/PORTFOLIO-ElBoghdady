"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CEO, TechStart",
    content: "Hadeer's work is creative, fast, and highly professional. She delivered our project ahead of schedule with exceptional quality.",
    avatar: "AH",
  },
  {
    name: "Sara Ali",
    role: "Product Manager, InnovateCo",
    content: "Working with Hadeer was a fantastic experience. Her attention to detail and creative solutions exceeded our expectations.",
    avatar: "SA",
  },
  {
    name: "Mohamed Youssef",
    role: "Founder, DigitalEdge",
    content: "Exceptional frontend skills combined with a great eye for design. Hadeer transformed our vision into a beautiful reality.",
    avatar: "MY",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Feedback from clients and collaborators
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
              
              <CardContent className="p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary/30 mb-6" />
                
                <div className="relative min-h-[120px]">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      className={cn(
                        "absolute inset-0 transition-all duration-500",
                        index === currentIndex
                          ? "opacity-100 translate-x-0"
                          : index < currentIndex
                          ? "opacity-0 -translate-x-8"
                          : "opacity-0 translate-x-8"
                      )}
                    >
                      <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentIndex
                        ? "w-8 bg-gradient-to-r from-primary to-accent"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
