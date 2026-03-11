"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CEO, TechStart",
    content: "Hadeer's work is creative, fast, and highly professional. She delivered our project ahead of schedule with exceptional quality. Her attention to the smallest details made all the difference.",
    avatar: "AH",
    rating: 5,
  },
  {
    name: "Sara Ali",
    role: "Product Manager, InnovateCo",
    content: "Working with Hadeer was a fantastic experience. Her attention to detail and creative solutions exceeded our expectations. I highly recommend her for any frontend project.",
    avatar: "SA",
    rating: 5,
  },
  {
    name: "Mohamed Youssef",
    role: "Founder, DigitalEdge",
    content: "Exceptional frontend skills combined with a great eye for design. Hadeer transformed our vision into a beautiful reality. The website performance improved significantly.",
    avatar: "MY",
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  )
}

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
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse-slow" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Feedback from clients and collaborators
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Gradient border */}
              <div className="absolute -inset-px bg-gradient-to-br from-purple-500/50 via-fuchsia-500/30 to-cyan-400/50 rounded-3xl" />
              
              <Card className="relative bg-card/90 backdrop-blur-xl border-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400" />
                
                <CardContent className="p-8 md:p-12 lg:p-16">
                  <div className="flex justify-between items-start mb-8">
                    <Quote className="w-16 h-16 text-primary/20" />
                    <StarRating rating={testimonials[currentIndex]?.rating || 5} />
                  </div>
                  
                  <div className="relative min-h-[160px]">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={testimonial.name}
                        className={cn(
                          "absolute inset-0 transition-all duration-700 ease-out",
                          index === currentIndex
                            ? "opacity-100 translate-x-0 scale-100"
                            : index < currentIndex
                            ? "opacity-0 -translate-x-12 scale-95"
                            : "opacity-0 translate-x-12 scale-95"
                        )}
                      >
                        <p className="text-lg md:text-xl lg:text-2xl text-foreground mb-10 leading-relaxed font-light italic">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                        
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-fuchsia-500/30">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full w-12 h-12 border-primary/30 hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-500",
                      index === currentIndex
                        ? "w-10 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 shadow-md shadow-fuchsia-500/30"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full w-12 h-12 border-primary/30 hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300"
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
