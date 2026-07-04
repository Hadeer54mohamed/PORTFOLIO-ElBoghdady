{/* ===== Section: Featured Projects ===== */}
{/*  <div className="text-center mb-16">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      Featured Menu Projects
    </span>
  </h2>
  <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance mb-10">
    Selected menu projects demonstrating my skills in UI, micro-interactions, and responsive design.
  </p>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {featuredProjects.map((project, index) => (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full">
          <div className="relative overflow-hidden">
            <
          
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>

          <CardHeader>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <Button asChild variant="outline" size="sm" className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary">
                <Link href={project.github} target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Link>
              </Button>
              <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Link href={project.demo} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</div> */}

{/* ===== Section: Menu UI Explorations ===== */}
{/* <div className="text-center mb-16">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      Interactive Menu UI Explorations
    </span>
  </h2>
  <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance mb-10">
    Collection of menu experiments showing different UI concepts, styles, and interactions.
  </p>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {menuExplorations.map((menu, index) => (
      <motion.div
        key={menu.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col h-full">
          <div className="relative overflow-hidden">
            <ProjectImage
              src={menu.image}
              alt={menu.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>

          <CardHeader>
            <CardTitle className="text-lg group-hover:text-primary transition-colors text-center">
              {menu.title}
            </CardTitle>
            <CardDescription className="text-center">{menu.shortDescription}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 mt-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {menu.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3 pt-2 justify-center">
              {menu.demo && menu.demo !== "#" ? (
                <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  <Link href={menu.demo} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Link>
                </Button>
              ) : (
                <span className="flex-1 text-center text-sm font-medium text-muted-foreground border border-border rounded-md py-1">
                  {menu.status || "In Progress"}
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</div> */}