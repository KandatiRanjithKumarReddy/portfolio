import { motion } from "motion/react";
import { HiBriefcase, HiAcademicCap, HiArrowDownTray } from "react-icons/hi2";
import { experiences, certifications } from "@/data/experience";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceList } from "@/components/ExperienceList";

export function ExperienceSection() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 space-y-16" id="experience" data-section="/experience">
      <SectionHeading
        eyebrow="Journey & Milestones"
        title="Experience & Certifications"
        description="A clear timeline of my professional work experience, internships, and certified skill accreditations."
      />

      {/* ─── Work Experience Block ─── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 border-b border-border/60 pb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-bg text-primary-foreground shadow-sm">
            <HiBriefcase className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Work Experience
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Professional software engineering roles & internships
            </p>
          </div>
          <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {experiences.length} {experiences.length === 1 ? "Role" : "Roles"}
          </span>
        </div>

        <ExperienceList items={experiences} />
      </motion.section>

      {/* ─── Certifications Block ─── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3 border-b border-border/60 pb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20 shadow-sm">
            <HiAcademicCap className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Certifications & Training
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Verified certifications, courses & problem solving specializations
            </p>
          </div>
          <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {certifications.length} {certifications.length === 1 ? "Certificate" : "Certificates"}
          </span>
        </div>

        <ExperienceList items={certifications} />
      </motion.section>

      {/* ─── Resume Download CTA ─── */}
      <div className="flex justify-center pt-4">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-sm"
        >
          <HiArrowDownTray className="h-4 w-4" /> Download full resume
        </a>
      </div>
    </div>
  );
}
