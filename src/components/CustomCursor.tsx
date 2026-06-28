import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const handler = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, [role='button'], input, textarea, select"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed z-[90] rounded-full mix-blend-difference"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 36 : 12,
          height: hovering ? 36 : 12,
          transform: "translate(-50%, -50%)",
          background: "white",
          transition: "width .2s, height .2s",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed z-[89] rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: 40,
          height: 40,
          transform: "translate(-50%, -50%)",
          background: "var(--gradient-primary)",
          filter: "blur(16px)",
          opacity: 0.4,
          transition: "transform .1s",
        }}
      />
    </>
  );
}
