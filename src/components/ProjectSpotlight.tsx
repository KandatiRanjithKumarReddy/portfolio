import { motion } from "motion/react";
import { HiArrowTopRightOnSquare, HiSparkles } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import type { ProjectCardProps } from "@/components/ProjectCard";

export function ProjectSpotlight({ project, i = 0 }: ProjectCardProps) {
  const { image, title, description } = project;

  const techList = project.techStack || project.tech || [];
  const highlightList = project.highlights || project.features || [];
  const demoUrl = project.liveUrl || project.demo || "";
  const repoUrl = project.githubUrl || project.github || "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-project overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
    >
      {/* Subtle background glow effect on hover */}
      <div
        className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden
      />

      <div className="grid gap-8 lg:grid-cols-12 items-center">
        {/* Left Column: Image with gradient frame & overlay badge (7 cols) */}
        <div className="lg:col-span-7 relative group/img overflow-hidden rounded-2xl border border-border/60 bg-muted">
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 opacity-60 group-hover/img:opacity-30 transition-opacity duration-500" />

          <img
            src={image}
            alt={`Featured project preview: ${title}`}
            loading="lazy"
            width={1280}
            height={720}
            className="h-64 sm:h-80 md:h-96 w-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
          />

          {/* Featured Tag Badge over Image */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-md border border-primary/30 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
              <HiSparkles className="h-3.5 w-3.5 text-primary" />
              Featured Spotlight
            </span>
          </div>
        </div>

        {/* Right Column: Project details (5 cols) */}
        <div className="lg:col-span-5 flex flex-col h-full justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-foreground group-hover:gradient-text transition-colors duration-300">
              {title}
            </h3>

            {project.subtitle && (
              <p className="mt-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
                {project.subtitle}
              </p>
            )}

            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tech Stack Pills - Outlined & Clean */}
          {techList.length > 0 && (
            <div className="flex flex-wrap gap-2" aria-label="Technologies used">
              {techList.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-lg bg-primary/5 border border-primary/20 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10 hover:border-primary/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Key Highlights */}
          {highlightList.length > 0 && (
            <div className="space-y-2 border-t border-border/50 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Key Impact & Features
              </p>
              <ul className="space-y-2">
                {highlightList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary font-mono text-[10px] font-bold mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          {(demoUrl || repoUrl) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo for ${title}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl gradient-bg text-primary-foreground px-5 py-2.5 text-sm font-semibold glow hover:opacity-95 transition-all"
                >
                  <span>Live Demo</span>
                  <HiArrowTopRightOnSquare className="h-4 w-4" />
                </a>
              )}

              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source code on GitHub`}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-muted/60 hover:bg-muted text-foreground px-5 py-2.5 text-sm font-medium transition-colors ${
                    demoUrl ? "flex-1" : "w-full"
                  }`}
                >
                  <FaGithub className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
