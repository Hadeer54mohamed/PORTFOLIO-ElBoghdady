"use client"

import { useState } from "react"
import { Send, Mail, MapPin, Loader2, Github, Linkedin, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@hadeer.dev",
    href: "mailto:hello@hadeer.dev",
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote Worldwide",
    gradient: "from-fuchsia-500 to-pink-500",
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/Hadeer54mohamed", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/hadeer-mohamed", label: "LinkedIn" },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Have a project in mind? Let&apos;s work together to create something amazing.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group relative rounded-2xl overflow-hidden opacity-0 animate-in fade-in slide-in-from-left-4 fill-mode-forwards"
                  style={{ animationDelay: `${index * 100}ms`, animationDuration: "700ms" }}
                >
                  <div className={`absolute -inset-px bg-gradient-to-br ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                  
                  <Card className="relative bg-card/80 backdrop-blur-sm border-border/50 hover:border-transparent transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.href ? (
                            <a href={info.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-4 opacity-0 animate-in fade-in slide-in-from-left-4 fill-mode-forwards" style={{ animationDelay: "200ms", animationDuration: "700ms" }}>
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-xl bg-card/80 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-fuchsia-500/20"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 opacity-0 animate-in fade-in slide-in-from-right-4 fill-mode-forwards" style={{ animationDelay: "100ms", animationDuration: "700ms" }}>
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute -inset-px bg-gradient-to-br from-purple-500/30 via-fuchsia-500/30 to-cyan-400/30 rounded-2xl" />
                
                <Card className="relative bg-card/90 backdrop-blur-xl border-0 rounded-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400" />
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="name" className={cn(focusedField === "name" && "text-primary")}>Name</FieldLabel>
                          <Input
                            id="name"
                            placeholder="Your name"
                            required
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className="bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="email" className={cn(focusedField === "email" && "text-primary")}>Email</FieldLabel>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className="bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          />
                        </Field>

                        <Field>
                          <FieldLabel htmlFor="message" className={cn(focusedField === "message" && "text-primary")}>Message</FieldLabel>
                          <Textarea
                            id="message"
                            placeholder="Tell me about your project..."
                            rows={5}
                            required
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            className="bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                          />
                        </Field>

                        <Button
                          type="submit"
                          disabled={isSubmitting || isSubmitted}
                          className={cn(
                            "w-full py-6 text-base rounded-xl transition-all duration-300",
                            isSubmitted
                              ? "bg-green-500 hover:bg-green-500"
                              : "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 hover:shadow-lg hover:shadow-fuchsia-500/30 hover:-translate-y-0.5"
                          )}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : isSubmitted ? (
                            <>
                              <CheckCircle2 className="w-5 h-5 mr-2" />
                              Message Sent Successfully!
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </FieldGroup>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
