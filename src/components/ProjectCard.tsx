import { motion } from "motion/react";
import { HiCheck, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

export type ProjectCardProps = {
  project: {
    image: string;
    title: string;
    description: string;
    techStack?: string[];
    tech?: string[];
    highlights?: string[];
    features?: string[];
    liveUrl?: string;
    demo?: string;
    githubUrl?: string;
    github?: string;
    caseStudyUrl?: string;
  };
  i?: number;
};

export function ProjectCard({ project, i = 0 }: ProjectCardProps) {
  const {
    image,
    title,
    description,
  } = project;

  // Support both techStack/highlights/liveUrl/githubUrl and legacy aliases
  const techList = project.techStack || project.tech || [];
  const highlightList = project.highlights || project.features || [];
  const demoUrl = project.liveUrl || project.demo || "";
  const repoUrl = project.githubUrl || project.github || "#";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col h-full rounded-2xl border border-border bg-card/90 glass overflow-hidden shadow-elegant hover:shadow-glow hover:border-primary/40 transition-all duration-300"
    >
      {/* Subtle top gradient accent bar on hover */}
      <div className="absolute top-0 inset-x-0 h-1 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* [Project Image / Screenshot] */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity" />
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          loading="lazy"
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-1 gap-5">
        {/* Title & Description */}
        <div>
          <h3 className="text-xl font-bold font-display tracking-tight text-foreground group-hover:gradient-text transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* [Tech stack as small pill/badge tags] */}
        {techList.length > 0 && (
          <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
            {techList.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full bg-secondary/80 border border-border/60 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* [Highlights with checkmark icon] */}
        {highlightList.length > 0 && (
          <ul className="space-y-2 text-xs sm:text-sm text-foreground/85">
            {highlightList.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent mt-0.5">
                  <HiCheck className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
                <span className="leading-snug">{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* [CTA Buttons / Links Footer] */}
        <div className={`mt-auto pt-4 border-t border-border/50 flex items-center gap-2 flex-wrap sm:flex-nowrap ${!demoUrl ? "justify-center" : ""}`}>
          {/* [Live Demo] - Primary / gradient button (only if URL exists) */}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo for ${title}`}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl gradient-bg text-primary-foreground px-4 py-2 text-xs sm:text-sm font-semibold glow hover:opacity-95 transition-opacity"
            >
              <span>Live Demo</span>
              <HiArrowTopRightOnSquare className="h-4 w-4" />
            </a>
          )}

          {/* [GitHub] - Outline button */}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
            className={`inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${demoUrl ? "flex-1" : "w-full"}`}
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
