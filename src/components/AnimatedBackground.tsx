export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full opacity-20 animate-blob"
        style={{ background: "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--primary) 55%, transparent), transparent 60%)" }}
      />
      <div
        className="absolute top-1/4 -right-32 h-[520px] w-[520px] rounded-full opacity-20 animate-blob"
        style={{ background: "radial-gradient(circle at 70% 30%, color-mix(in srgb, var(--primary) 50%, transparent), transparent 60%)", animationDelay: "-4s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 h-[440px] w-[440px] rounded-full opacity-15 animate-blob"
        style={{ background: "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 35%, transparent), transparent 60%)", animationDelay: "-8s" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full opacity-15 animate-blob"
        style={{ background: "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--primary) 45%, transparent), transparent 60%)", animationDelay: "-12s" }}
      />
    </div>
  );
}
