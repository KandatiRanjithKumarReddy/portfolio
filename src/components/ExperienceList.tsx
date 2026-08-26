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
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <motion.li
            key={`${it.title}-${i}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group relative rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md gradient-border overflow-hidden"
          >
            <div className="flex items-start gap-4">
              {Icon && (
                <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {kindLabel[it.kind] || it.kind}
                      </span>
                      {it.location && (
                        <span className="text-xs text-muted-foreground">
                          • {it.location}
                        </span>
                      )}
                    </div>

                    <h4 className="mt-1.5 text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {it.title}
                    </h4>
                    <p className="text-sm font-medium text-foreground/80 mt-0.5">
                      {it.org}
                    </p>
                  </div>

                  <div className="shrink-0 text-left sm:text-right mt-1 sm:mt-0">
                    <span className="inline-flex items-center rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium text-muted-foreground border border-border/60">
                      {it.period}
                    </span>
                  </div>
                </div>

                <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                  {it.description}
                </p>
              </div>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
