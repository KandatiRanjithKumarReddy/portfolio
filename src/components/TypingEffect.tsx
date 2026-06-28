import { useEffect, useState } from "react";

export function TypingEffect({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1400,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting && sub === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && sub === "") {
      setDeleting(false);
      setIndex(i => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setSub(s => deleting ? current.slice(0, s.length - 1) : current.slice(0, s.length + 1));
    }, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text">{sub}</span>
      <span className="ml-1 inline-block w-[2px] h-[1em] bg-foreground/70 animate-pulse" aria-hidden />
    </span>
  );
}
