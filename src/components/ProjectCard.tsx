import { motion } from "motion/react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

export type ProjectCardProps = {
  project: {
    image: string;
    title: string;
    subtitle?: string;
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
  const { image, title, description } = project;

  // Support both techStack/highlights/liveUrl/githubUrl and legacy aliases
  const techList = project.techStack || project.tech || [];
  const demoUrl = project.liveUrl || project.demo || "";
  const repoUrl = project.githubUrl || project.github || "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col h-full rounded-2xl border border-white/[0.06] bg-[#16161a] overflow-hidden transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_8px_40px_-12px_rgba(249,115,22,0.15)]"
    >
      {/* ── Image Preview Container ── */}
      <div className="relative w-full overflow-hidden bg-[#111114]">
        {/* Warm ambient glow behind preview */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(249,115,22,0.12), transparent)",
          }}
          aria-hidden
        />

        {/* Project screenshot */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            loading="lazy"
            decoding="async"
            width={1280}
            height={720}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          {/* Subtle bottom fade into card body */}
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #16161a 0%, transparent 100%)",
            }}
            aria-hidden
          />
        </div>

        {/* ── Action Buttons (overlaid at bottom of image) ── */}
        {(repoUrl || demoUrl) && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code on GitHub`}
                className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800/90 backdrop-blur-sm border border-white/10 px-4 py-2 text-xs font-medium text-white/90 hover:bg-zinc-700/90 hover:border-white/20 transition-all duration-200"
              >
                <FaGithub className="h-3.5 w-3.5" />
                <span>Code</span>
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo for ${title}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_2px_12px_-2px_rgba(249,115,22,0.4)] hover:from-orange-400 hover:to-amber-400 transition-all duration-200"
              >
                <HiArrowTopRightOnSquare className="h-3.5 w-3.5" />
                <span>Live</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* ── Card Body ── */}
      <div className="p-5 pt-3 flex flex-col flex-1 gap-3">
        {/* Title & Subtitle */}
        <div>
          <h3 className="text-lg font-bold font-display tracking-tight text-white/95 group-hover:text-orange-300/90 transition-colors duration-300">
            {title}
          </h3>
          {project.subtitle && (
            <p className="text-xs font-medium text-orange-400/85 mt-0.5 tracking-wide">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Full description without clipping or skipping points */}
        <p className="text-sm text-zinc-400 leading-relaxed">
          {description}
        </p>

        {/* ── Tech Stack Badges ── */}
        {techList.length > 0 && (
          <div
            className="mt-auto pt-3 flex flex-wrap gap-1.5"
            aria-label="Technologies used"
          >
            {techList.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full bg-orange-500/[0.08] border border-orange-500/20 px-2.5 py-0.5 text-[11px] font-medium text-orange-400/90 transition-colors hover:bg-orange-500/[0.14] hover:border-orange-500/30"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom accent glow on hover */}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden
      />
    </motion.article>
  );
}
