export function ProjectDescription({
  description,
  variant = "default",
}: {
  description: string
  variant?: "default" | "case-study"
}) {
  const isCaseStudy = variant === "case-study"

  return (
    <>
      {description.trim().split("\n\n").map((section, i) => {
        const [title, ...content] = section.split("\n")

        return (
          <div key={i} className={i > 0 ? "mt-4" : ""}>
            {i !== 0 && (
              <p
                className={
                  isCaseStudy
                    ? "text-foreground font-semibold mb-2"
                    : "text-primary font-medium"
                }
              >
                {title}
              </p>
            )}

            {(i === 0 ? [title, ...content] : content).map((line, idx) => (
              <p key={idx} className="flex items-start gap-2 text-muted-foreground">
                {line.startsWith("-") ? (
                  <>
                    <span
                      className={
                        isCaseStudy ? "text-muted-foreground/50 mt-1" : "text-primary mt-1"
                      }
                    >
                      •
                    </span>
                    <span>{line.replace(/^- /, "")}</span>
                  </>
                ) : (
                  line
                )}
              </p>
            ))}
          </div>
        )
      })}
    </>
  )
}
