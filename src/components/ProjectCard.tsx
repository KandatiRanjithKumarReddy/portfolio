import { motion } from "motion/react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.05, duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col h-full shadow-elegant hover:glow transition-all duration-300"
    >
      {/* Image — square/sharp corners, fixed aspect ratio */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20" aria-hidden />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={1280}
          height={720}
          className="h-full w-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <li key={t} className="text-[11px] rounded-md bg-muted px-2 py-0.5 text-muted-foreground">{t}</li>
          ))}
        </ul>
        <ul className="text-xs text-foreground/80 space-y-1">
          {project.features.slice(0, 3).map(f => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-1 h-1 w-1 rounded-full gradient-bg shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg gradient-bg text-primary-foreground px-3 py-2 text-sm font-medium glow hover:opacity-95 transition-opacity"
          >
            demo <HiArrowTopRightOnSquare className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
