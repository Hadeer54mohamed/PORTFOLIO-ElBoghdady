"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin, Facebook, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    title: "EMAIL",
    value: "hadeerelboghdady54@gmail.com",
    href: "mailto:hadeerelboghdady54@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LINKEDIN",
    value: "hadeer-elboghdady",
    href: "https://www.linkedin.com/in/hadeer-elboghdady",
  },
  {
    icon: Facebook,
    title: "FACEBOOK",
    value: "Hadeer ElBoghdady",
    href: "https://www.facebook.com/hadeer.elboghdady.184",
  },
  {
    icon: MapPin,
    title: "LOCATION",
    value: "Available for remote work worldwide",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let&apos;s Create Something Together
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            I enjoy building clean, interactive, and user-focused web experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="p-[1px] rounded-xl bg-gradient-to-r from-primary/40 via-purple-500/40 to-accent/40 hover:from-primary hover:via-purple-500 hover:to-accent transition-all duration-500">
                  <Card className="rounded-[11px] border-0 bg-card/95 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">
                            {item.title}
                          </p>
                          {item.href ? (
                            <Link
                              href={item.href}
                              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block"
                            >
                              {item.value}
                            </Link>
                          ) : (
                            <p className="text-sm font-medium text-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
         {/*  <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="mailto:hadeerelboghdady54@gmail.com">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8">
                <Send className="w-4 h-4 mr-2" />
                Email Me
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/hadeer-elboghdady" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary px-8">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://www.facebook.com/hadeer.elboghdady.184" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary px-8">
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
            </Link>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
