import Image from "next/image"
import { CaseStudySectionTitle } from "@/components/case-study/section-title"

export function CaseStudyGallery({ images, alt }: { images: string[]; alt: string }) {
  return (
    <section className="mb-12">
      <CaseStudySectionTitle>Gallery</CaseStudySectionTitle>
      <p className="text-muted-foreground text-sm mb-6">Storefront, mobile experience, and key product flows.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <div
            key={src}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border/40 bg-muted/20 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <Image
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  )
}
