import { createFileRoute } from "@tanstack/react-router";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { GlassCard } from "@/components/GlassCard";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kandati Ranjith Kumar Reddy" },
      { name: "description", content: "Get in touch with Kandati Ranjith Kumar Reddy for project inquiries, collaboration, or a quick hello." },
      { property: "og:title", content: "Contact — Kandati Ranjith Kumar Reddy" },
      { property: "og:description", content: "Let's build something together." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24">
      <SectionHeading
        eyebrow="Let's talk"
        title="Get in touch"
        description="Have a project in mind, a role to discuss, or just want to say hi? Drop a message and I'll get back within a day."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <GlassCard hover={false}>
            <h3 className="font-display text-xl font-semibold">Contact info</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="h-9 w-9 rounded-lg gradient-bg flex items-center justify-center shrink-0"><HiEnvelope className="h-4 w-4 text-primary-foreground" /></span>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href={`mailto:${profile.email}`} className="hover:gradient-text">{profile.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-9 w-9 rounded-lg gradient-bg flex items-center justify-center shrink-0"><HiPhone className="h-4 w-4 text-primary-foreground" /></span>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-9 w-9 rounded-lg gradient-bg flex items-center justify-center shrink-0"><HiMapPin className="h-4 w-4 text-primary-foreground" /></span>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p>{profile.location}</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 border-t border-border pt-5">
              <p className="text-xs text-muted-foreground mb-3">Find me elsewhere</p>
              <SocialLinks size="sm" />
            </div>
          </GlassCard>

        </div>
      </div>
    </div>
  );
}
