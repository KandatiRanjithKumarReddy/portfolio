import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectSpotlight } from "@/components/ProjectSpotlight";

export function ProjectsSection() {
  const spotlightProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24" id="projects" data-section="/projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="A curated set of recent builds showcasing full-stack delivery, real-time systems, and responsive user interfaces."
      />

      <div className="mt-12 space-y-8">
        {/* Featured / Spotlight Project (First Project) */}
        {spotlightProject && (
          <motion.div layout>
            <ProjectSpotlight project={spotlightProject} i={0} />
          </motion.div>
        )}

        {/* Remaining Projects in a 2-Column Grid */}
        {otherProjects.length > 0 && (
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {otherProjects.map((p, i) => (
              <motion.div key={p.id} layout className="h-full">
                <ProjectCard project={p} i={i + 1} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
