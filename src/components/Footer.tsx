import { Link } from "@tanstack/react-router";
import { socials } from "@/data/socials";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="font-display text-xl font-semibold">
            {profile.firstName}<span className="gradient-text">.dev</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            {profile.tagline}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Quick links</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {navItems.map(item => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Connect</h3>
          <div className="mt-3 flex gap-3">
            {socials.map(s => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="glass h-10 w-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-lg hover:glow transition-all duration-300"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React, Tailwind, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
