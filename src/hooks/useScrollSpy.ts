import { useEffect, useState } from "react";

/**
 * Custom hook to track active section in view using IntersectionObserver.
 * Does NOT use scroll event polling (onScroll + getBoundingClientRect).
 *
 * @param sectionIds Array of section identifiers (e.g., ["/", "/about", "/skills", ...])
 * @param options IntersectionObserver options
 */
export function useScrollSpy(
  sectionIds: string[],
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: "-25% 0px -40% 0px",
    threshold: [0, 0.25, 0.5, 0.75, 1.0],
  }
): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const visibleSections = new Map<string, number>();

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id =
          entry.target.getAttribute("data-section") ||
          entry.target.getAttribute("id");

        if (!id) return;

        // Map section id back to path format
        const sectionKey = id.startsWith("/") ? id : `/${id === "home" ? "" : id}`;
        const normalizedKey = sectionKey === "/home" ? "/" : sectionKey;

        if (entry.isIntersecting) {
          visibleSections.set(normalizedKey, entry.intersectionRatio);
        } else {
          visibleSections.delete(normalizedKey);
        }
      });

      if (visibleSections.size > 0) {
        let maxRatio = -1;
        let bestSection: string | null = null;

        visibleSections.forEach((ratio, key) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestSection = key;
          }
        });

        if (bestSection) {
          setActiveSection(bestSection);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const elementsToObserve: Element[] = [];

    sectionIds.forEach((id) => {
      const cleanId = id === "/" ? "home" : id.replace(/^\//, "");
      const el =
        document.getElementById(cleanId) ||
        document.querySelector(`[data-section="${id}"]`) ||
        document.querySelector(`section#${cleanId}`);
      if (el) elementsToObserve.push(el);
    });

    document.querySelectorAll("section[id], section[data-section]").forEach((el) => {
      if (!elementsToObserve.includes(el)) {
        elementsToObserve.push(el);
      }
    });

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, JSON.stringify(options)]);

  return activeSection;
}
