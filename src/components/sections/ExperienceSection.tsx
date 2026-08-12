import { HiArrowDownTray } from "react-icons/hi2";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceList } from "@/components/ExperienceList";

export function ExperienceSection() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-24" id="experience" data-section="/experience">
      <SectionHeading
        eyebrow="Experience"
        title="A timeline of work & milestones"
        description="Internships, certifications, achievements, and workshops — the things that shaped how I build today."
      />

      <div className="mt-12">
        <ExperienceList items={experience} />
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <HiArrowDownTray className="h-4 w-4" /> Download full resume
        </a>
      </div>
    </div>
  );
}
