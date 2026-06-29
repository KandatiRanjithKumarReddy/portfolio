import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { HiArrowDownTray, HiArrowRight, HiEnvelope } from "react-icons/hi2";
import { profile } from "@/data/profile";
import { TypingEffect } from "@/components/TypingEffect";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ranjith-Portfolio" },
      { name: "description", content: "Portfolio of Kandati Ranjith Kumar Reddy, a full stack developer crafting premium, animated web experiences with React and Node." },
      { property: "og:title", content: "Kandati Ranjith Kumar Reddy — Full Stack Developer Portfolio" },
      { property: "og:description", content: "Premium developer portfolio: React, Node, modern UI engineering." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

function HomePage() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 md:grid-cols-2"
        >
          <div className="order-2 md:order-1">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to full time roles
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Hi, I'm <span className="gradient-text">{profile.firstName}</span>.
              <br />
              <span className="text-foreground/90">
                <TypingEffect words={profile.roles} />
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
              I turn ideas into production-ready web apps. From{" "}
              <span className="text-accent">real-time chat systems</span> to{" "}
              <span className="text-accent">payment-integrated booking platforms</span>, I build with{" "}
              <span className="text-accent"> MERN, Angualr,TypeScript, and Java</span>{" "}
              - fast, secure, and built to scale.
            </motion.p>

            <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl gradient-bg text-primary-foreground px-5 py-3 text-sm font-medium glow hover:opacity-95 transition-opacity"
              >
                View projects <HiArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                <HiArrowDownTray className="h-4 w-4" /> Download resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                <HiEnvelope className="h-4 w-4" /> Contact me
              </Link>
            </motion.div>

            <motion.div variants={item} className="mt-8">
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div variants={item} className="order-1 md:order-2 relative flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-6 gradient-bg rounded-full blur-3xl opacity-30" aria-hidden />
              {/* Gradient border wrapper */}
              <div className="relative rounded-full p-[2px] gradient-bg shadow-elegant">
                <div className="rounded-full overflow-hidden bg-background">
                  <img
                    src={profile.image}
                    alt={`Portrait of ${profile.name}`}
                    width={420}
                    height={420}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
