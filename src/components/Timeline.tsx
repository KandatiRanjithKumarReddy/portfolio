import { motion } from "motion/react";
import type { IconType } from "react-icons";

export type TimelineItemT = {
  title: string;
  org: string;
  period: string;
  description: string;
  icon?: IconType;
  badge?: string;
};

export function Timeline({ items }: { items: TimelineItemT[] }) {
  return (
    <ol className="relative">
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px" aria-hidden />
      {items.map((it, i) => {
        const left = i % 2 === 0;
        const Icon = it.icon;
        return (
          <li key={i} className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 mb-10">
            <div className={`hidden sm:block ${left ? "sm:pr-10 sm:text-right" : "sm:col-start-2 sm:pl-10"}`}>
              <motion.div
                initial={{ opacity: 0, x: left ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-5 inline-block w-full"
              >
                <TimelineContent it={it} />
              </motion.div>
            </div>
            <span
              className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 h-8 w-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground glow"
              aria-hidden
            >
              {Icon ? <Icon className="h-4 w-4" /> : <span className="h-2 w-2 rounded-full bg-white" />}
            </span>
            <div className="sm:hidden">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass rounded-2xl p-5"
              >
                <TimelineContent it={it} />
              </motion.div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function TimelineContent({ it }: { it: TimelineItemT }) {
  return (
    <>
      {it.badge && (
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider gradient-text mb-1">
          {it.badge}
        </span>
      )}
      <h3 className="text-base font-semibold">{it.title}</h3>
      <p className="text-sm text-muted-foreground">{it.org} · {it.period}</p>
      <p className="mt-2 text-sm text-foreground/80">{it.description}</p>
    </>
  );
}
