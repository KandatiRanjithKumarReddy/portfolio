# Premium Developer Portfolio — Implementation Plan

## Heads-up on stack

You asked for **Vite + React Router DOM**. This Lovable project is scaffolded on **TanStack Start (Vite + React 19 + Tailwind v4)**, which is the only supported stack here — swapping to React Router DOM would break the template's build/SSR/preview pipeline. I'll deliver the **same outcome** using:

- **Vite + React 19** ✅ (already in place)
- **TanStack Router** instead of React Router DOM (file-based routing under `src/routes/`, same mental model: `<Link to>`, nested layouts, 404 page)
- **Tailwind CSS v4** ✅
- **Framer Motion (`motion`)** ✅
- **React Icons** ✅

Everything else in your brief stays exactly as specified. If you'd rather I scaffold a fresh non-Lovable Vite + React Router DOM project zip instead, tell me and I'll switch.

I'll use your uploaded Stitch references (glacier home, alex_rivera variants for about/skills/projects/experience/contact) as the visual direction: dark, glassy, blue→purple gradient accents.

## Pages (routes)

| Route | File | Purpose |
|---|---|---|
| `/` | `src/routes/index.tsx` | Hero, typing effect, CTAs, social, intro |
| `/about` | `src/routes/about.tsx` | Bio, education timeline, info cards, resume DL |
| `/skills` | `src/routes/skills.tsx` | Grouped icon cards, hover glow |
| `/projects` | `src/routes/projects.tsx` | Filterable project cards |
| `/experience` | `src/routes/experience.tsx` | Timeline + certs/achievements |
| `/contact` | `src/routes/contact.tsx` | Validated form + contact info |
| 404 | `__root.tsx` notFoundComponent | Custom 404 |

Each leaf route gets its own SEO `head()` (title, description, og:*).

## Component breakdown (`src/components/`)

**Layout**
- `Navbar.tsx` — sticky, blurs on scroll, active-route highlight, mobile hamburger
- `Footer.tsx` — quick links, socials, copyright
- `BackToTop.tsx`
- `ScrollProgress.tsx` — top progress bar
- `LoadingScreen.tsx` — initial mount splash
- `CustomCursor.tsx` — desktop-only (pointer media query)
- `ThemeToggle.tsx` + `ThemeProvider` — dark default, persisted in localStorage
- `PageTransition.tsx` — Framer Motion route transitions
- `AnimatedBackground.tsx` — gradient blobs

**Primitives / sections**
- `GlassCard.tsx` — reusable glassmorphism panel
- `GradientText.tsx`
- `SectionHeading.tsx`
- `TypingEffect.tsx` — cycles roles
- `SocialLinks.tsx`
- `Timeline.tsx` + `TimelineItem.tsx` — used by About & Experience
- `SkillCategory.tsx` + `SkillCard.tsx`
- `ProjectCard.tsx` + `ProjectFilters.tsx`
- `ContactForm.tsx` (zod-validated) + `ContactInfo.tsx`
- `LazyImage.tsx`

## Data files (`src/data/`)

- `profile.ts` — name, roles[], intro, email/phone/location, resume URL
- `socials.ts` — GitHub, LinkedIn, Email, X
- `skills.ts` — categories → `{ name, icon }[]` (react-icons)
- `projects.ts` — `{ id, title, desc, image, tech[], features[], category, github, demo }[]`
- `experience.ts` — internships, certifications, achievements, workshops
- `education.ts` — timeline entries
- `navigation.ts` — nav items

## Folder structure

```text
src/
  routes/           # TanStack file-based routes + __root.tsx
  components/       # listed above
  data/             # listed above
  hooks/            # useScrollProgress, useMediaQuery, useTheme
  lib/              # cn(), constants
  assets/           # generated profile image + project thumbs
  styles.css        # design tokens: gradients, glass, shadows
public/
  resume.pdf        # placeholder
  favicon.svg
```

## Design system (`src/styles.css`)

- Dark mode default (`.dark` on `<html>`), light mode via toggle
- Tokens: `--background` (near-black navy), `--primary` (blue), `--accent` (purple), `--gradient-primary` (blue→purple), `--shadow-glow`, `--glass-bg`, `--glass-border`
- Custom utilities via `@utility`: `glass`, `glass-strong`, `gradient-text`, `glow-on-hover`
- Fonts via `<link>` in `__root.tsx`: Space Grotesk (display) + Inter (body)

## Motion conventions

- Page entrances: fade + slide-up, staggered children
- Cards: `whileHover={{ y: -4, scale: 1.02 }}` + glow
- Hero profile image: gentle float loop
- Scroll reveal: `useInView` + `whileInView`
- Route transitions: AnimatePresence wrapping `<Outlet />`

## Accessibility & SEO

- Semantic landmarks (`<header> <main> <nav> <footer>`), single H1 per page
- Focus-visible rings, keyboard-operable nav + form
- Meta tags per route, JSON-LD Person schema on `/`
- Lazy images via native `loading="lazy"` + blur-up

## Out of scope (per your brief)

No backend, no CMS, no auth, no analytics, no deployment scripts. Contact form shows success state client-side only.

---

**Reply "go" to build it** (or tell me to switch to a standalone Vite + React Router DOM zip instead).
