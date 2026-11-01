import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    let rafId: number = 0;
    let scheduled = false;
    let mouseX = -100;
    let mouseY = -100;
    let isHovering = false;
    let hasMoved = false;

    document.documentElement.classList.add("has-custom-cursor");

    const applyPosition = () => {
      scheduled = false;
      const scale = isHovering ? " scale(2.5)" : " scale(1)";
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)${scale}`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const scheduleUpdate = () => {
      if (!scheduled) {
        scheduled = true;
        rafId = requestAnimationFrame(applyPosition);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (glowRef.current) glowRef.current.style.opacity = "0.4";
      }
      scheduleUpdate();
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const hover = Boolean(t?.closest("a, button, [role='button'], input, textarea, select"));
      if (hover !== isHovering) {
        isHovering = hover;
        scheduleUpdate();
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      if (scheduled) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[90] h-3 w-3 rounded-full mix-blend-difference opacity-0 transition-transform duration-150 ease-out"
        style={{
          background: "white",
          willChange: "transform",
        }}
      />
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[89] h-10 w-10 rounded-full opacity-0"
        style={{
          background: "var(--gradient-primary)",
          filter: "blur(16px)",
          willChange: "transform",
        }}
      />
    </>
  );
}
