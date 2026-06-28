import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { HiArrowDownTray, HiAcademicCap, HiSparkles, HiMapPin } from "react-icons/hi2";
import { profile } from "@/data/profile";
import { education, interests, currentlyLearning } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Timeline } from "@/components/Timeline";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kandati Ranjith Kumar Reddy" },
      { name: "description", content: "Get to know Kandati Ranjith Kumar Reddy: career objective, education, and what I'm building next." },
      { property: "og:title", content: "About — Kandati Ranjith Kumar Reddy" },
      { property: "og:description", content: "Career objective, education, and current learning." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: "/about",
          name: "About — Kandati Ranjith Kumar Reddy",
          mainEntity: { "@id": "/#person" },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 space-y-20">
      <SectionHeading
        eyebrow="About me"
        title="A developer who cares about the details"
        description="I build polished products end-to-end — equally happy designing a delightful interaction or tuning a slow query."
      />

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2">
          <GlassCard hover={false} className="h-full">
            <h3 className="font-display text-xl font-semibold"></h3>
            <p className="mt-3 text-foreground/85 leading-relaxed">
              {profile.intro} I'm seeking roles where I can ship product-defining features, mentor early-career engineers,
              and continue going deep on performance, UX engineering, and developer experience.
            </p>
          </GlassCard>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlassCard hover={false}>
            <h3 className="font-display text-xl font-semibold">Personal info</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground"><HiMapPin className="h-4 w-4" /> {profile.location}</li>
              <li className="flex items-center gap-2 text-muted-foreground"><HiAcademicCap className="h-4 w-4" /> B.Tech In Computer Science</li>
            </ul>
            <a
              href={profile.resumeUrl}
              download
              className="mt-5 inline-flex items-center gap-2 rounded-xl gradient-bg text-primary-foreground px-4 py-2.5 text-sm font-medium glow w-full justify-center"
            >
              <HiArrowDownTray className="h-4 w-4" /> Download resume
            </a>
          </GlassCard>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard hover={false}>
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-lg gradient-bg flex items-center justify-center"><HiSparkles className="h-4 w-4 text-primary-foreground" /></span>
            <h3 className="font-display text-xl font-semibold">Currently learning</h3>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {currentlyLearning.map(t => (
              <li key={t} className="rounded-full glass px-3 py-1 text-sm">{t}</li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard hover={false}>
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-lg gradient-bg flex items-center justify-center"><HiSparkles className="h-4 w-4 text-primary-foreground" /></span>
            <h3 className="font-display text-xl font-semibold">Interests</h3>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {interests.map(t => (
              <li key={t} className="rounded-full glass px-3 py-1 text-sm">{t}</li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <div>
        <SectionHeading eyebrow="Education" title="The path so far" />
        <div className="mt-12">
          <Timeline items={education.map(e => ({ ...e, icon: HiAcademicCap }))} />
        </div>
      </div>
    </div>
  );
}
