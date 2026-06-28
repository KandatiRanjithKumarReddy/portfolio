import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { navItems } from "@/data/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center gap-3">
          {/* Brand segment */}
          <Link to="/" className="group relative">
            <div className="absolute -inset-0.5 rounded-2xl gradient-bg opacity-20 blur-sm group-hover:opacity-50 transition duration-500" />
            <div className="relative flex h-14 items-center gap-3 rounded-2xl border border-border bg-card/90 px-4 backdrop-blur-2xl transition-all">
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl gradient-bg text-primary-foreground font-display font-bold">
                R
              </span>
              <span className="hidden sm:block font-display font-semibold text-base tracking-tight">
                ranjith<span className="gradient-text">.dev</span>
              </span>
            </div>
          </Link>

          {/* Navigation segment */}
          <nav
            className="relative hidden md:flex h-14 items-center gap-1 rounded-2xl border border-border bg-card/60 p-1.5 backdrop-blur-2xl shadow-elegant"
            aria-label="Primary"
          >
            {/* Subtle grid pattern overlay */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
              aria-hidden="true"
            />

            <ul className="relative z-10 flex items-center gap-1">
              {navItems.map((item) => {
                const active = pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                        active ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-xl gradient-bg opacity-20"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      {item.label === "Contact" && !active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Utility segment */}
          <div className="relative flex h-14 items-center gap-2 rounded-2xl border border-border bg-card/90 px-2 backdrop-blur-2xl">

            <div className="flex items-center gap-1">
              <ThemeToggle />
              <button
                className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(o => !o)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-3 glass-strong rounded-2xl p-2 shadow-elegant"
            >
              <ul className="flex flex-col">
                {navItems.map(item => {
                  const active = pathname === item.to;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={`block rounded-xl px-4 py-3 text-sm ${
                          active ? "gradient-bg text-primary-foreground" : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
