import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24" id="projects" data-section="/projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="A curated set of recent builds that showcase full-stack delivery, real-time systems, and polished frontend experiences."
      />

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div key={p.id} layout>
            <ProjectCard project={p} i={i} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
