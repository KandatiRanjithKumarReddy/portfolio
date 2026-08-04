import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kandati Ranjith Kumar Reddy" },
      {
        name: "description",
        content:
          "Get in touch with Kandati Ranjith Kumar Reddy for project inquiries, collaboration, or a quick hello.",
      },
      { property: "og:title", content: "Contact — Kandati Ranjith Kumar Reddy" },
      { property: "og:description", content: "Let's build something together." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactSection,
});
