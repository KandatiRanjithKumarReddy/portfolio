import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`glass rounded-2xl p-6 shadow-elegant ${
        hover ? "hover:-translate-y-1 hover:glow transition-all duration-200 ease-out will-change-transform" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
