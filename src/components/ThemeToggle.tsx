import { HiSun, HiMoon } from "react-icons/hi2";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="glass relative h-10 w-10 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === "dark" ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
      </motion.span>
    </button>
  );
}
