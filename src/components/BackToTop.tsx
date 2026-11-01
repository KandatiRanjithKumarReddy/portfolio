import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiArrowUp } from "react-icons/hi2";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const nextShow = window.scrollY > 600;
          setShow((prev) => (prev !== nextShow ? nextShow : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          onClick={handleClick}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full gradient-bg text-primary-foreground flex items-center justify-center glow"
        >
          <HiArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
