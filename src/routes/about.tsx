import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  HiArrowDownTray,
  HiAcademicCap,
  HiSparkles,
  HiMapPin,
  HiCodeBracket,
} from "react-icons/hi2";
import {
  HiOutlineDesktopComputer,
  HiOutlineLightBulb,
} from "react-icons/hi";
import { FaCoffee, FaPlane } from "react-icons/fa";
import { profile } from "@/data/profile";
import { education, interests, currentlyLearning } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";

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

/* ── animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/* ── interests data with icons ── */
const interestItems = [
  { icon: HiOutlineDesktopComputer, label: "Gaming", desc: "Strategy & RPG enthusiast" },
  { icon: FaCoffee, label: "Coffee", desc: "Specialty bean brewer" },
  { icon: HiOutlineLightBulb, label: "System Design", desc: "Obsessing over structures" },
  { icon: FaPlane, label: "Travel", desc: "Digital nomad at heart" },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 space-y-24">

      {/* ─── Hero / Intro ─── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Open To Full Time Roles
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]"
        >
          Web Developer
          <br />
          <span className="text-muted-foreground font-normal">
            Engineering digital experiences with precision.
          </span>
        </motion.h1>
      </motion.section>

      {/* ─── Career Objective ─── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
            </h2>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              I am a Web Developer focused on building{" "}
              <strong className="text-foreground">robust, scalable systems</strong>{" "}
              that solve real-world problems. With hands-on experience in the JavaScript
              ecosystem, I bridge the gap between high-performance backends and
              pixel-perfect user interfaces.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              My philosophy is simple: write clean, maintainable code that lasts. I thrive in
              collaborative environments where technical excellence and user-centric
              design are the priority. I don't just build features; I architect solutions.
            </p>
          </div>

          <a
            href={profile.resumeUrl}
            download="Kandati_Ranjith_Kumar_Reddy_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl gradient-bg text-primary-foreground px-6 py-3 text-sm font-medium glow hover:opacity-95 transition-opacity w-fit"
          >
            <HiArrowDownTray className="h-4 w-4" /> Download My Resume
          </a>
        </motion.div>
      </motion.section>

      {/* ─── Education & Certifications ─── */}
      <section>
        <SectionHeading
          eyebrow="Education"
          title="Education"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex justify-center flex-wrap gap-5"
        >
          {education.map((e, i) => (
            <motion.div key={i} variants={fadeUp} className="w-full max-w-md">
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-9 w-9 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <HiAcademicCap className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {e.period}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold leading-snug">
                  {e.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                {e.description && (
                  <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
                    {e.description}
                  </p>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── Beyond the Code (Interests) ─── */}
      <section>
        <SectionHeading
          eyebrow="Personal"
          title="Beyond the Code"
          description="When I'm not pushing pixels or optimizing database queries, you can find me exploring my other passions."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {interestItems.map((it, i) => (
            <motion.div key={it.label} variants={fadeUp}>
              <GlassCard className="flex flex-col items-center text-center gap-3">
                <span className="h-14 w-14 rounded-2xl glass flex items-center justify-center text-primary">
                  <it.icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-sm font-semibold">{it.label}</h3>
                <p className="text-xs text-muted-foreground">{it.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── Currently Learning ─── */}
      <section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <GlassCard hover={false} className="relative overflow-hidden">
            {/* Subtle gradient decoration */}
            <div
              className="absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-10 gradient-bg blur-3xl pointer-events-none"
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-9 w-9 rounded-lg gradient-bg flex items-center justify-center">
                  <HiSparkles className="h-4 w-4 text-primary-foreground" />
                </span>
                <h3 className="font-display text-xl font-semibold">Currently Learning</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {currentlyLearning.map(t => (
                  <li key={t} className="rounded-full glass px-4 py-1.5 text-sm font-medium">{t}</li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* ─── Built for Performance ─── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="relative"
      >
        <div className="relative rounded-3xl overflow-hidden gradient-bg p-[1px]">
          <div className="rounded-3xl bg-card p-8 sm:p-12 grid gap-10 lg:grid-cols-2 items-center">
            {/* Left content */}
            <motion.div variants={fadeUp}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                Built for Performance
              </h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                My development environment is optimized for speed
                and reliability. I leverage modern tooling to ensure
                your projects are delivered with the highest quality.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "TypeScript for Type Safety",
                  "React.js for Fast & Rich UIs",
                  "Tailwind for Scalable Design Systems",
                ].map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm text-foreground/85">
                    <span className="h-5 w-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                      <svg className="h-3 w-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: code snippet */}
            <motion.div variants={fadeUp}>
              <div className="rounded-2xl bg-background/80 border border-border p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                <p className="text-muted-foreground">{"// Turning challenges into code."}</p>
                <p className="text-muted-foreground">{"// Portfolio.status = 'Ready for Impact';"}</p>
                <p className="mt-3">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-accent">Portfolio</span>{" "}
                  <span className="text-foreground/60">=</span>{" "}
                  <span className="text-foreground">(</span>
                  <span className="text-muted-foreground">{"{"}experience, passion{"}"}</span>
                  <span className="text-foreground">)</span>{" "}
                  <span className="text-primary">{"=>"}</span>{" "}
                  <span className="text-foreground">{"{"}</span>
                </p>
                <p className="pl-4">
                  <span className="text-primary">return</span>{" "}
                  <span className="text-foreground">{"{"}</span>
                </p>
                <p className="pl-8">
                  <span className="text-accent">design</span>
                  <span className="text-foreground/60">(</span>
                  <span className="text-primary">'Web'</span>
                  <span className="text-foreground/60">,</span>{" "}
                  <span className="text-primary">'Next'</span>{" "}
                  <span className="text-foreground/60">),</span>
                </p>
                <p className="pl-8">
                  <span className="text-accent">develop</span>
                  <span className="text-foreground/60">(</span>
                  <span className="text-primary">'API'</span>
                  <span className="text-foreground/60">)</span>{" "}
                  <span className="text-foreground/60">=&gt;</span>{" "}
                  <span className="text-accent">success</span>
                  <span className="text-foreground/60">()</span>
                </p>
                <p className="pl-4">
                  <span className="text-foreground">{"}"}</span>
                </p>
                <p>
                  <span className="text-foreground">{"}"}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
