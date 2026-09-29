import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    let rafId: number;
    let mouseX = -100;
    let mouseY = -100;
    let isHovering = false;
    let hasMoved = false;

    document.documentElement.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (glowRef.current) glowRef.current.style.opacity = "0.4";
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const hover = Boolean(t?.closest("a, button, [role='button'], input, textarea, select"));
      if (hover !== isHovering) {
        isHovering = hover;
        if (dotRef.current) {
          dotRef.current.style.width = hover ? "36px" : "12px";
          dotRef.current.style.height = hover ? "36px" : "12px";
        }
      }
    };

    const update = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    rafId = requestAnimationFrame(update);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[90] rounded-full mix-blend-difference opacity-0 transition-[width,height] duration-200 ease-out"
        style={{
          width: 12,
          height: 12,
          background: "white",
          willChange: "transform",
        }}
      />
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[89] rounded-full opacity-0"
        style={{
          width: 40,
          height: 40,
          background: "var(--gradient-primary)",
          filter: "blur(16px)",
          willChange: "transform",
        }}
      />
    </>
  );
}
