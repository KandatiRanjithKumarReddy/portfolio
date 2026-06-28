import { socials } from "@/data/socials";

export function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const sz = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const ic = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <ul className="flex items-center gap-2">
      {socials.map(s => (
        <li key={s.name}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`glass ${sz} rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow transition-all`}
          >
            <s.icon className={ic} />
          </a>
        </li>
      ))}
    </ul>
  );
}
