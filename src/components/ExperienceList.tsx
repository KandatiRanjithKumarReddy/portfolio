import { motion } from "motion/react";
import type { TimelineEntry } from "@/data/experience";

const kindLabel: Record<string, string> = {
  internship: "Internship",
  certification: "Certification",
  achievement: "Achievement",
  workshop: "Workshop",
};

export function ExperienceList({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="flex flex-col gap-4">
      {items.map((it, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
          className="group rounded-xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-colors hover:border-primary/40"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {kindLabel[it.kind]}
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-snug text-foreground">
                {it.title}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-foreground/80">{it.org}</p>
            </div>
            <div className="shrink-0 text-left sm:text-right text-xs text-muted-foreground sm:pl-4">
              <p>{it.period}</p>
              {it.location && <p className="mt-0.5">{it.location}</p>}
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {it.description}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
