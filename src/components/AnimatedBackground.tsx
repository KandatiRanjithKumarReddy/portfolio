export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full opacity-20 animate-blob"
        style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.492 0.072 168.0 / 0.55), transparent 60%)" }}
      />
      <div
        className="absolute top-1/4 -right-32 h-[520px] w-[520px] rounded-full opacity-20 animate-blob"
        style={{ background: "radial-gradient(circle at 70% 30%, oklch(0.42 0.06 168.0 / 0.5), transparent 60%)", animationDelay: "-4s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 h-[440px] w-[440px] rounded-full opacity-15 animate-blob"
        style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.876 0.063 165.1 / 0.35), transparent 60%)", animationDelay: "-8s" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full opacity-15 animate-blob"
        style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.55 0.08 168.0 / 0.45), transparent 60%)", animationDelay: "-12s" }}
      />
    </div>
  );
}
