"use client"

import Link from "next/link"
import { Github, Linkedin, Facebook, MessageCircle, Mail, Heart, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Hadeer54mohamed", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/hadeer-elboghdady", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/hadeer.elboghdady.184", icon: Facebook },
  { name: "whatsapp", href: "https://wa.me/201062801851", icon: MessageCircle },
  { name: "Email", href: "mailto:hadeerelboghdady54@gmail.com", icon: Mail }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background pt-12 pb-6">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2">
              Let’s build something <span className="text-primary font-extrabold">Meaningful✨</span>
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              Open for freelance & collaborations.
            </p>
            <motion.a
              href="https://wa.me/201062801851"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-md hover:shadow-lg transition-all"
            >
              Let’s Talk <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Socials & Slogan Bar */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center border-y border-border/10 gap-6">
            <p className="text-xs text-muted-foreground/70 text-center md:text-left max-w-[250px] md:max-w-none">
              Building modern, interactive & user-focused experiences.
            </p>
            
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-muted/40 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="w-full mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground/60">
            <p className="text-center md:text-left"> 
              © {currentYear} Designed & Developed by Hadeer ElBoghdady 
              <motion.span 
                className="inline-block ml-1"
                whileHover={{ scale: 1.4, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Heart className="inline w-3 h-3 text-primary fill-primary cursor-pointer" />
              </motion.span>
            </p> 
          
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-secondary/30 rounded-full border border-border/50">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Available to work together
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}