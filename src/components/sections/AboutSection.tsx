import { motion } from "motion/react";
import { HiArrowDownTray, HiAcademicCap, HiSparkles } from "react-icons/hi2";
import { HiOutlineDesktopComputer, HiOutlineLightBulb } from "react-icons/hi";
import { FaCode, FaPlane } from "react-icons/fa";
import { profile } from "@/data/profile";
import { education, currentlyLearning } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { downloadResumeFile } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const interestItems = [
  { icon: HiOutlineLightBulb, label: "System Design", desc: "Clean architecture & scalable APIs" },
  { icon: FaCode, label: "Full-Stack Building", desc: "Creating apps from idea to deployment" },
  { icon: HiOutlineDesktopComputer, label: "Modern Web Tech", desc: "Exploring React 19, Angular & APIs" },
  { icon: FaPlane, label: "Travel & Gaming", desc: "Exploring new places & strategy games" },
];

export function AboutSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 space-y-24" id="about" data-section="/about">
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
          Full Stack Developer
          <br />
          <span className="text-muted-foreground font-normal">
            Building dependable web applications from idea to production
          </span>
        </motion.h1>
      </motion.section>

      {/* ─── Career Narrative (Jargon-free & grounded) ─── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto"
        >
          <div className="space-y-3 max-w-3xl">
            <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">
              <strong className="text-foreground">2026 B.Tech Computer Science graduate</strong> with 3 months of Software Engineer internship experience in full-stack web development. Hands-on experience in <strong className="text-foreground">Java, React, Node.js, Angular, TypeScript, JavaScript, OOP, and SQL</strong>.
            </p>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              Proven track record of building production-ready projects like <strong className="text-foreground">Borrower Copilot</strong> (AI-powered loan advisor) and <strong className="text-foreground">Prescripto</strong> (healthcare management platform) — focused on building clean, fast, and user-centric software.
            </p>
          </div>

          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            onClick={downloadResumeFile}
            className="inline-flex items-center gap-2 rounded-xl gradient-bg text-primary-foreground px-6 py-3 text-sm font-medium glow hover:opacity-95 transition-opacity w-fit mt-2 cursor-pointer"
          >
            <HiArrowDownTray className="h-4 w-4" /> Download My Resume
          </a>
        </motion.div>
      </motion.section>

      {/* ─── Education & Academic Highlights ─── */}
      <section>
        <SectionHeading eyebrow="Education" title="Academic Background" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex justify-center flex-wrap gap-5"
        >
          {education.map((e, i) => (
            <motion.div key={i} variants={fadeUp} className="w-full max-w-xl">
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-9 w-9 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <HiAcademicCap className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {e.period}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">{e.title}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/85">{e.org}</p>
                {e.description && (
                  <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{e.description}</p>
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
          description="A few things that keep me curious, energized, and constantly learning outside of my daily development work."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {interestItems.map((it) => (
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
            <div
              className="absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-10 gradient-bg blur-3xl pointer-events-none"
              aria-hidden
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-9 w-9 rounded-lg gradient-bg flex items-center justify-center">
                  <HiSparkles className="h-4 w-4 text-primary-foreground" />
                </span>
                <h3 className="font-display text-xl font-semibold">Currently Exploring & Learning</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {currentlyLearning.map((t) => (
                  <li key={t} className="rounded-full glass px-4 py-1.5 text-sm font-medium">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* ─── Engineering Principles & Profile Snapshot ─── */}
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
                How I Approach Engineering
              </h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                I believe good software is built by focusing on the fundamentals, writing predictable code, and putting user experience first.
              </p>
              <ul className="mt-6 space-y-3.5">
                {[
                  "Full-stack delivery from responsive React/Angular UIs to Node.js & MySQL/MongoDB backends",
                  "Strong core fundamentals in data structures, OOP, DBMS, and system design",
                  "Secure auth flows with JWT, Google OAuth 2.0, and role-based permissions",
                  "Practical integrations including Razorpay payments, Gemini AI, and Cloud Firestore",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span className="h-5 w-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="h-3 w-3 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Realistic Developer Code Card */}
            <motion.div variants={fadeUp}>
              <div className="rounded-2xl bg-background/90 border border-border/80 p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto shadow-inner">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border/60 text-muted-foreground text-xs">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 font-sans font-medium text-muted-foreground/80">developer.ts</span>
                </div>
                <p className="text-muted-foreground">{"// Profile snapshot"}</p>
                <p className="mt-2">
                  <span className="text-primary font-semibold">export const</span>{" "}
                  <span className="text-accent font-semibold">ranjith</span> = {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-foreground/70">name:</span>{" "}
                  <span className="text-emerald-400">"Kandati Ranjith Kumar Reddy"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-foreground/70">education:</span>{" "}
                  <span className="text-emerald-400">"B.Tech CSE, 2026 (CGPA: 9.1)"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-foreground/70">internship:</span>{" "}
                  <span className="text-emerald-400">"Software Engineer Intern @ Infosys"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-foreground/70">focus:</span>{" "}
                  <span className="text-emerald-400">"Full-Stack Web & Scalable APIs"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-foreground/70">certifications:</span> [
                  <span className="text-amber-300">"AWS Cloud Practitioner"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-foreground/70">coreStack:</span> [
                  <span className="text-amber-300">"React 19"</span>,{" "}
                  <span className="text-amber-300">"TypeScript"</span>,{" "}
                  <span className="text-amber-300">"Node.js"</span>,{" "}
                  <span className="text-amber-300">"MySQL"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-foreground/70">status:</span>{" "}
                  <span className="text-emerald-400">"Open to Full-Time Roles"</span>
                </p>
                <p className="text-foreground">{"};"}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
