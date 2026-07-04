export type ChallengeSolution = {
  challenge: string
  solution: string
}

export type ArchitectureStack = {
  label?: string
  nodes: string[]
}

export type Project = {
  title: string
  description: string
  /** Homepage + project cards only */
  image: string
  technologies: string[]
  demo: string
  featured?: boolean
  slug: string
  /** Short copy for homepage featured card — full story lives on case study page */
  summary?: string
  highlights?: string[]
  /** Case study / showcase page only — use a different file than `image` when possible */
  showcaseImage?: string
  challenges?: ChallengeSolution[]
  /** Rich case study (stats, architecture, gallery, etc.) */
  stats?: string[]
  caseStudyHighlights?: string[]
  architecture?: ArchitectureStack[]
  gallery?: string[]
  github?: string
  sourcePrivate?: boolean
}

export const projects: Project[] = [
  {
    title: "ZØYA",
    featured: true,
    slug: "zoya",
    summary:
      "Production-ready headless e-commerce platform for an Egyptian streetwear brand — built end-to-end without Shopify.",
    highlights: [
      "Custom checkout, order tracking & InstaPay verification",
      "Admin dashboard with profit analytics & discount codes",
      "Sanity content layer + Google Sheets sync + email automation",
      "Performance-tuned for mobile & Core Web Vitals",
    ],
    description: `
A production-ready headless e-commerce platform built from scratch for an Egyptian streetwear brand.

Problem:
Most small and medium fashion brands depend on third-party commerce platforms that limit customization, business workflows, and long-term scalability.

What I did:
- Built a complete storefront with product catalog, checkout, order tracking, and customer workflows
- Integrated Sanity CMS as the full content layer (products, categories, shipping settings, testimonials, Instagram reels)
- Developed a custom admin dashboard for order lifecycle management and discount codes
- Implemented profit analytics, financial period tracking, and business reporting tools
- Added InstaPay payment verification with proof uploads and manual review flow
- Built newsletter automation and drop announcement email campaigns
- Integrated Supabase, Resend, and Google Sheets synchronization
- Optimized performance for mobile devices with lazy loading, image optimization, and Core Web Vitals improvements

Result:
- Complete end-to-end commerce platform
- Production-ready business workflows
- Scalable headless architecture
- High-performance mobile experience
- Custom tools for managing orders, inventory, analytics, and marketing

Tech: Next.js 16, React 19, Tailwind CSS, Sanity CMS, Supabase, Resend, Upstash Redis
`,
    image: "/projects/zoya.png",
    showcaseImage: "/projects/zoya0.png",
    challenges: [
      {
        challenge:
          "Managing inventory consistency between customer orders and CMS-managed product stock.",
        solution:
          "Implemented server-side stock reservation and restoration workflows using Sanity mutations and Supabase order state transitions.",
      },
      {
        challenge: "Maintaining smooth UX on iOS Safari while keeping Core Web Vitals high.",
        solution:
          "Removed heavy Framer Motion usage from critical routes, replaced modal animations with optimized CSS transitions, and lazy-loaded below-the-fold sections.",
      },
      {
        challenge: "Protecting sensitive endpoints from abuse.",
        solution:
          "Implemented rate limiting using Upstash Redis on checkout and admin-related API routes.",
      },
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "Sanity CMS",
      "Tailwind CSS",
      "Resend",
      "Upstash Redis",
      "Full-Stack",
    ],
    demo: "https://zoya-store.com",
    sourcePrivate: true,
    stats: [
      "15+ API Routes",
      "Admin Dashboard",
      "Profit Analytics",
      "95+ CWV",
      "Headless CMS",
      "Google Sheets Sync",
      "Email Automation",
    ],
    caseStudyHighlights: [
      "Headless Commerce",
      "Custom Admin Dashboard",
      "Google Sheets Sync",
      "Profit Analytics",
      "Payment Verification",
      "Email Automation",
    ],
    architecture: [
      { label: "Application", nodes: ["Next.js", "API Routes", "Supabase", "Resend"] },
      { label: "Content layer", nodes: ["Sanity CMS", "Products & Content", "Storefront"] },
    ],
    gallery: ["/projects/zoya1.png", "/projects/zoya2.png", "/projects/zoya3.png", "/projects/zoya4.png", "/projects/zoya5.png", "/projects/zoya6.png", "/projects/zoya7.png", "/projects/zoya8.png", "/projects/zoya9.png"],
  },
  {
    title: "Feminista Accessories",
    slug: "feminista",
    description: `
A premium e-commerce experience built for a fashion accessories brand, focused on luxury UI and content-driven scalability.

Problem:
Most small e-commerce brands rely on static, hard-coded content, making updates difficult and limiting growth.

What I did:
- Built a fully dynamic frontend powered by Sanity CMS
- Designed a luxury-focused UI with smooth scroll-triggered animations
- Implemented mobile-first responsive architecture
- Structured reusable components for scalability

Result:
- Easy content management without developer dependency
- Enhanced user engagement through interactive UI
- Scalable foundation for future product expansion

Tech: Next.js, Tailwind CSS, Framer Motion, Sanity CMS
`,
    image: "/projects/feminista.png",
    technologies: ["Next.js", "UI/UX", "Animations", "Responsive", "Sanity CMS"],
    demo: "https://feminista-accessories.vercel.app/",
  },
 /*  {
    title: "Basmat Alidrak",
    slug: "basmat",
    description: `
A high-end Arabic corporate platform delivering a cinematic interactive experience.

Problem:
Many Arabic corporate websites lack modern UI and engaging UX, especially with RTL layouts.

What I did:
- Built a fully responsive RTL layout
- Created cinematic animations using Framer Motion
- Optimized performance for smooth interactions

Result:
- Modern corporate experience
- Improved user engagement
- Strong visual identity

Tech: Next.js, Tailwind CSS, Framer Motion, RTL
`,
    image: "/projects/basmat.png",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "RTL"],
    demo: "https://basmat-alidrak-kg43.vercel.app/",
  }, */
  {
    title: "Noureldeen",
    slug: "noureldeen",
    description: `
A multi-lingual web application focused on accessibility and scalability.

Problem:
Multi-language apps often struggle with RTL consistency and accessibility issues.

What I did:
- Implemented dynamic multi-language support
- Built reusable and scalable React components
- Applied accessibility best practices (A11y)

Result:
- Better usability across languages
- Improved accessibility
- Maintainable frontend structure

Tech: React, Multi-language, Accessibility, Responsive Design
`,
    image: "/projects/noureldeen.png",
    technologies: ["React", "Multi-language", "Responsive"],
    demo: "https://noureldeen.co/ar",
  },
  {
    title: "Uzersaif",
    slug: "uzersaif",
    description: `
A modern personal portfolio designed to deliver a clean and engaging user experience.

Problem:
Many portfolios fail to reflect real developer skills and feel too static.

What I did:
- Built a component-based architecture using Next.js
- Added smooth animations to improve engagement
- Designed responsive layouts for all devices

Result:
- Better project presentation
- Improved user interaction
- Stronger personal branding

Tech: Next.js, Tailwind CSS, React
`,
    image: "/projects/uzersaif.png",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    demo: "https://uzersaif.com",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectPreviewText(project: Project): string {
  return project.summary ?? project.description.trim().split("\n\n")[0].replace(/\n/g, " ")
}

/** Card / featured section on the homepage */
export function getHomeImage(project: Project): string {
  return project.image
}

/** Case study page hero — never reuse homepage image when showcaseImage is set */
export function getShowcaseImage(project: Project): string {
  return project.showcaseImage ?? project.image
}

export function hasDedicatedShowcaseImage(project: Project): boolean {
  return Boolean(project.showcaseImage && project.showcaseImage !== project.image)
}

/** Case study pages: skip the intro paragraph already shown as summary */
export function getCaseStudyBody(description: string): string {
  const sections = description.trim().split("\n\n")
  const detailStart = sections.findIndex((s) => /^Problem:/m.test(s.trim()))
  if (detailStart >= 0) return sections.slice(detailStart).join("\n\n")
  if (sections.length > 1) return sections.slice(1).join("\n\n")
  return description
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getGridProjects(): Project[] {
  return projects.filter((p) => !p.featured)
}
