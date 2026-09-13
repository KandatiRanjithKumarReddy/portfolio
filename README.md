<div align="center">

# ⚡ Kandati Ranjith Kumar Reddy — Developer Portfolio

<p align="center">
  <b>A production-grade, performance-first developer portfolio engineered with React 19, TanStack Start, TypeScript 5.8, and Tailwind CSS 4 — featuring SSR/SSG rendering, theme-aware design tokens, silky-smooth Lenis scrolling, and Framer Motion micro-interactions.</b>
</p>

<p align="center">
  <a href="https://github.com/KandatiRanjithKumarReddy/portfolio">
    <img src="https://img.shields.io/github/stars/KandatiRanjithKumarReddy/portfolio?style=for-the-badge&logo=github&color=0d9488" alt="Stars" />
  </a>
  <a href="https://github.com/KandatiRanjithKumarReddy/portfolio/network/members">
    <img src="https://img.shields.io/github/forks/KandatiRanjithKumarReddy/portfolio?style=for-the-badge&logo=github&color=0891b2" alt="Forks" />
  </a>
  <a href="https://github.com/KandatiRanjithKumarReddy/portfolio/issues">
    <img src="https://img.shields.io/github/issues/KandatiRanjithKumarReddy/portfolio?style=for-the-badge&logo=github&color=7c3aed" alt="Issues" />
  </a>
  <a href="https://react.dev">
    <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.2-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  </a>
  <a href="https://vitejs.dev">
    <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  </a>
</p>

---

[🌐 Live Demo](https://doctor-frontend-eosin.vercel.app/) • [📫 Contact Me](mailto:kandatiranjithkumarreddy@gmail.com) • [📄 Resume](https://drive.google.com/file/d/1M1QBFg4H610xwnUPB0VSv2uz014AQFRv/view?usp=sharing) • [💼 LinkedIn](https://www.linkedin.com/in/kandati-ranjith-kumar-reddy/)

</div>

<br />

## 📖 Table of Contents

- [Overview](#-overview)
- [Architecture & Design Philosophy](#-architecture--design-philosophy)
- [Features & Highlights](#-features--highlights)
- [Tech Stack & Dependencies](#-tech-stack--dependencies)
- [Design System & Theming](#-design-system--theming)
- [Project Structure](#-project-structure)
- [Featured Projects](#-featured-projects)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Performance & Optimization](#-performance--optimization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Contact & Connect](#-contact--connect)
- [License](#-license)

---

## 🌟 Overview

This repository houses the source code for my **personal developer portfolio** — a comprehensive, production-quality web application that goes far beyond a static résumé page.

I'm **Kandati Ranjith Kumar Reddy**, a Computer Science graduate (B.Tech, GPA: 9.1/10) from Sri Venkateswara College of Engineering with deep expertise across the **MERN stack**, **Angular**, and **TypeScript** ecosystem. I specialize in building performant, maintainable, and scalable full-stack applications with a strong emphasis on **clean architecture**, **real-time systems**, and **delightful user experiences**.

### What This Portfolio Demonstrates

| Competency | Implementation |
| :--- | :--- |
| **Frontend Architecture** | React 19 with TanStack Start SSR, file-based routing, and code-splitting |
| **Type Safety** | End-to-end TypeScript with strict mode, zero `any` types |
| **Design Systems** | Theme-aware CSS custom properties, dual-accent color palette |
| **Motion & UX** | Framer Motion orchestrated animations, Lenis smooth scroll |
| **Component Design** | Headless UI primitives (Radix UI) + composable patterns (CVA + clsx) |
| **Form Engineering** | Schema-validated forms with react-hook-form + Zod |
| **Performance** | Vite 8 HMR, tree-shaking, lazy loading, optimized asset pipeline |
| **Accessibility** | WCAG-compliant Radix primitives, semantic HTML, keyboard navigation |

---

## 🏗️ Architecture & Design Philosophy

This portfolio is deliberately over-engineered (relative to its scope) to serve as a living reference architecture for modern React applications.

### Key Architectural Decisions

**1. TanStack Start + Vite 8 over Next.js / Remix**
> Chose TanStack Start for its superior type-safe routing, first-class Vite integration, and lean runtime. The file-based routing convention via `@tanstack/router-plugin` eliminates boilerplate while preserving full TypeScript inference across route params, loaders, and search params.

**2. Radix UI Primitives + CVA over Fully-Styled Component Libraries**
> Rather than importing heavyweight component libraries (MUI, Chakra, Ant), I use unstyled Radix UI primitives for accessible behavior and compose visual styles with `class-variance-authority` and `tailwind-merge`. This keeps the bundle lean while achieving pixel-perfect design control.

**3. Framer Motion (`motion`) for Declarative Animations**
> All animations are declarative, orchestrated, and GPU-accelerated. Scroll-triggered reveals, staggered card entrances, and page transitions are handled via `motion` (the v12+ package) — avoiding imperative animation code entirely.

**4. CSS Custom Properties for Theming over JS-based Theme Providers**
> The theme system is CSS-native. Light and dark modes swap via `:root` / `.dark` CSS custom property overrides, enabling instant theme switches with zero React re-renders. Tailwind v4's native CSS variable integration makes this seamless.

**5. Data-Driven Content Layer**
> All portfolio content (profile, projects, skills, experience, socials) lives in structured TypeScript modules under `src/data/`. This decouples content from presentation, making updates trivial and enabling future CMS migration without touching component code.

### Rendering Strategy

```
┌──────────────────────────────────────────────────────────┐
│  Client Request                                          │
│        ↓                                                 │
│  TanStack Start (SSR)  →  Hydration  →  SPA Navigation  │
│        ↓                                                 │
│  Vite 8 Dev Server (HMR) / Production Build (Nitro)     │
│        ↓                                                 │
│  Vercel Edge Deployment (vercel.json)                    │
└──────────────────────────────────────────────────────────┘
```

---

## ✨ Features & Highlights

### 🎯 Core Features
- **🚀 SSR + Client Hydration** — TanStack Start delivers server-rendered HTML with seamless client-side hydration for optimal FCP/LCP metrics
- **🎨 Dual-Accent Theme System** — Sky Blue (Light) ↔ Vibrant Orange (Dark) with CSS custom property-driven transitions that are instant and flicker-free
- **💫 60fps Motion Design** — GPU-accelerated Framer Motion animations: scroll-triggered reveals, staggered layouts, parallax effects, and smooth page transitions
- **🌊 Lenis Smooth Scrolling** — Buttery-smooth scroll behavior across the entire viewport with configurable lerp and duration
- **📱 Fully Responsive** — Mobile-first Tailwind CSS v4 layout that adapts gracefully from 320px to 4K displays

### 🛠️ Engineering Quality
- **Type-Safe Routing** — TanStack Router with full TypeScript inference for route params, search params, and loaders
- **Schema-Validated Forms** — Contact form built with `react-hook-form` + `zod` for runtime type-safe validation
- **Accessible by Default** — Radix UI primitives ensure WCAG 2.1 AA compliance with proper ARIA attributes, focus management, and keyboard navigation
- **Component Composition** — CVA (Class Variance Authority) + `clsx` + `tailwind-merge` for conflict-free, variant-driven component APIs
- **Custom React Hooks** — Encapsulated scroll behavior, theme management, and intersection observer logic

### 🎨 UI/UX Polish
- **Interactive Project Showcase** — Spotlight cards with hover effects, live demo links, GitHub repos, and animated tech stack badges
- **Dynamic Skills Grid** — Categorized skill cards across 7 categories (Languages, Frontend, Backend, Databases, Core Concepts, DevOps, Testing)
- **Experience Timeline** — Interactive career milestone timeline with work experience, certifications, and education
- **Custom Cursor** — Bespoke cursor interaction layer for desktop viewports
- **Loading Screen** — Branded loading animation for initial app hydration
- **Scroll Progress Indicator** — Visual progress bar tracking viewport position
- **Back-to-Top Navigation** — Smooth-scroll-to-top with animated visibility toggle

---

## 🛠️ Tech Stack & Dependencies

### Frontend & Framework

| Technology | Version | Purpose |
| :--- | :---: | :--- |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) | `19.2` | Core UI library with concurrent features, Server Components readiness |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | `5.8` | Static type safety across the entire codebase |
| ![TanStack Start](https://img.shields.io/badge/TanStack_Start-FF4154?style=flat-square&logo=reactrouter&logoColor=white) | `1.168` | Full-stack React framework with SSR/SSG and type-safe file routing |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | `8.0` | Next-gen build tool — sub-second HMR, optimized production bundles |

### Styling & UI Components

| Technology | Version | Purpose |
| :--- | :---: | :--- |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white) | `4.2` | Utility-first CSS framework with native CSS variable theming |
| ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radix-ui&logoColor=white) | `latest` | Headless, accessible UI primitives (Dialog, Tooltip, Select, Accordion, etc.) |
| ![Framer Motion](https://img.shields.io/badge/Motion-0055FF?style=flat-square&logo=framer&logoColor=white) | `12.42` | Production-grade animation library — declarative, GPU-accelerated |
| ![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square&logo=lucide&logoColor=white) | `0.575` | Modern, tree-shakeable icon library |

### Form & Validation

| Technology | Purpose |
| :--- | :--- |
| `react-hook-form` | Performant form state management with minimal re-renders |
| `zod` v4 | Schema-first runtime validation with TypeScript type inference |
| `@hookform/resolvers` | Bridges zod schemas into react-hook-form validation |

### Animation & Scroll

| Technology | Purpose |
| :--- | :--- |
| `motion` (Framer Motion v12) | Declarative animations, layout transitions, scroll-triggered reveals |
| `lenis` | Smooth, momentum-based scrolling with configurable easing |

### Utilities

| Technology | Purpose |
| :--- | :--- |
| `class-variance-authority` | Type-safe component variant API builder |
| `clsx` | Conditional className composition |
| `tailwind-merge` | Intelligent Tailwind class conflict resolution |
| `date-fns` | Lightweight, tree-shakeable date utility library |
| `sonner` | Elegant toast notification system |
| `react-icons` | Comprehensive icon sets (FontAwesome, Heroicons, Simple Icons) |

---

## 🎨 Design System & Theming

The portfolio implements a **theme-dependent accent color system** using CSS custom properties. Theme switching is handled at the CSS layer (zero JS re-renders) with smooth `transition` properties on color values.

### ☀️ Light Theme — Sky Blue Palette

| Token | Value | Usage |
| :--- | :--- | :--- |
| `--background` | `#ffffff` | Page background |
| `--foreground` | `#09090b` | Primary text (Zinc 950) |
| `--primary` | `#87CEFA` | Sky Blue — buttons, links, accents |
| `--accent` | `#3a9fd8` | Deeper Sky Blue — text-safe contrast |
| `--card` | `#ffffff` | Card surfaces |
| Gradient | `#87CEFA → #3a9fd8` | Hero section, CTA highlights |

### 🌙 Dark Theme — Vibrant Orange Palette

| Token | Value | Usage |
| :--- | :--- | :--- |
| `--background` | `#09090b` | Page background (Zinc 950) |
| `--foreground` | `#fafafa` | Primary text (Zinc 50) |
| `--primary` | `#F97415` | Vibrant Orange — buttons, links, accents |
| `--accent` | `#fb923c` | Orange 400 — text-safe contrast |
| `--card` | `#18181b` | Card surfaces (Zinc 900) |
| Gradient | `#F97415 → #fb923c` | Hero section, CTA highlights |

### Why Two Distinct Accent Colors?

Most portfolios use the same accent color in both themes. I deliberately chose **complementary** accent palettes — cool Sky Blue for light mode, warm Vibrant Orange for dark mode — to create a dramatically different _emotional tone_ per theme while maintaining consistent visual hierarchy and contrast ratios.

---

## 📁 Project Structure

```
Ranjith_Portfolio/
├── public/                         # Static assets (favicon, resume PDF, social previews)
├── src/
│   ├── assets/                     # Profile images & project screenshots (import-resolved by Vite)
│   ├── components/
│   │   ├── sections/               # Page-level section modules
│   │   │   ├── AboutSection.tsx        # Bio, interests, currently-learning tags
│   │   │   ├── ContactSection.tsx      # Contact form with validation
│   │   │   ├── ExperienceSection.tsx   # Work, certifications & education timeline
│   │   │   ├── ProjectsSection.tsx     # Project grid with spotlight & cards
│   │   │   └── SkillsSection.tsx       # Categorized technical skills grid
│   │   ├── ui/                     # Shadcn/Radix primitive components
│   │   │   ├── button.tsx, card.tsx, dialog.tsx, input.tsx, ...
│   │   │   └── (20+ accessible UI primitives)
│   │   ├── AnimatedBackground.tsx  # Ambient particle/gradient background
│   │   ├── BackToTop.tsx           # Scroll-to-top FAB with visibility animation
│   │   ├── ContactForm.tsx         # react-hook-form + zod validated form
│   │   ├── CustomCursor.tsx        # Bespoke cursor interaction layer
│   │   ├── ExperienceList.tsx      # Timeline card list renderer
│   │   ├── Footer.tsx              # Site footer with social links
│   │   ├── GlassCard.tsx           # Glassmorphism card component
│   │   ├── LoadingScreen.tsx       # Branded loading/hydration screen
│   │   ├── Navbar.tsx              # Responsive navigation with mobile drawer
│   │   ├── ProjectCard.tsx         # Individual project card with hover effects
│   │   ├── ProjectSpotlight.tsx    # Featured project hero spotlight
│   │   ├── ScrollProgress.tsx      # Viewport scroll progress indicator
│   │   ├── SectionHeading.tsx      # Reusable animated section header
│   │   ├── SkillCard.tsx           # Individual skill category card
│   │   ├── SmoothScroll.tsx        # Lenis smooth scroll provider
│   │   ├── SocialLinks.tsx         # Social media icon links
│   │   ├── ThemeProvider.tsx       # Dark/light theme context provider
│   │   ├── ThemeToggle.tsx         # Theme switcher toggle button
│   │   ├── Timeline.tsx            # Vertical timeline component
│   │   └── TypingEffect.tsx        # Typewriter animation for role titles
│   ├── data/                       # Structured content layer (decoupled from UI)
│   │   ├── profile.ts              # Bio, contact info, role tags, resume URL
│   │   ├── projects.ts             # All project entries with metadata & types
│   │   ├── skills.ts               # 7-category technical skills taxonomy
│   │   ├── experience.ts           # Work experience, certifications, education
│   │   ├── socials.ts              # Social links with icons & labels
│   │   └── navigation.ts           # Nav menu items & route mappings
│   ├── hooks/                      # Custom React hooks (theme, scroll, observers)
│   ├── routes/                     # TanStack file-based route definitions
│   └── styles.css                  # Root CSS — theme tokens, custom utilities, Tailwind directives
├── components.json                 # Shadcn UI configuration & path aliases
├── vite.config.ts                  # Vite + TanStack + Tailwind plugin configuration
├── tsconfig.json                   # TypeScript strict mode configuration
├── vercel.json                     # Vercel deployment & routing configuration
├── eslint.config.js                # ESLint flat config with React + Prettier
├── .prettierrc                     # Prettier code formatting rules
└── package.json                    # Dependencies, scripts & project metadata
```

---

## 💼 Featured Projects

### 🏥 Prescripto — Smart Healthcare Management Platform

> Full-stack healthcare platform that **reduced appointment booking time from ~15 minutes to under 2 minutes**.

| Attribute | Detail |
| :--- | :--- |
| **Stack** | React · Node.js · Express · MongoDB · JWT · Razorpay · Cloudinary · Tailwind |
| **Architecture** | RESTful API backend (15+ endpoints), role-based JWT auth (Patient/Doctor/Admin) |
| **Key Impact** | 87% reduction in booking flow time, integrated payment gateway, cloud media management |
| **Links** | [🔗 Live Demo](https://doctor-frontend-eosin.vercel.app/) · [🐙 GitHub](https://github.com/KandatiRanjithKumarReddy/doctor-frontend) |

---

### 💬 Chatty — Real-Time Communication Platform

> Real-time messaging platform achieving **sub-second delivery with ~40% latency reduction** via event-driven Socket.IO architecture.

| Attribute | Detail |
| :--- | :--- |
| **Stack** | React · Node.js · Express · MongoDB · Socket.IO · JWT · Tailwind |
| **Architecture** | WebSocket event-driven messaging, real-time connection tracking, presence system |
| **Key Impact** | Sub-second P2P message delivery, live online/offline status, secure JWT sessions |
| **Links** | [🔗 Live Demo](https://chatapplication-8q6x.onrender.com/) · [🐙 GitHub](https://github.com/KandatiRanjithKumarReddy/ChatApplication) |

---

### ✈️ TripNest — Tourism Booking Platform

> Angular-based booking platform supporting **100+ destinations** with **50% faster initial load** via pagination strategy.

| Attribute | Detail |
| :--- | :--- |
| **Stack** | Angular · TypeScript · Firebase · Firestore · Razorpay · CSS · HTML |
| **Architecture** | Firebase Auth with Angular Route Guards, Firestore real-time data, paginated queries |
| **Key Impact** | 50% load time improvement, dynamic pricing engine, search/filter/sort pipeline |
| **Context** | Developed during **Infosys Springboard** internship |

---

### 🔍 GitHub User Finder — React Testing Reference Implementation

> Modern React 19 app doubling as a **comprehensive testing reference** with 9 Playwright E2E tests, 4 RTL suites, and full coverage.

| Attribute | Detail |
| :--- | :--- |
| **Stack** | React 19 · TypeScript · Vite · Vitest · Testing Library · Playwright |
| **Testing Strategy** | Multi-layer: unit → hook → component → E2E browser tests |
| **Key Impact** | 9 automated E2E flows, custom hook lifecycle tests, @vitest/coverage-v8 pipeline |
| **Links** | [🔗 Live Demo](https://testing-react-sigma.vercel.app/) · [🐙 GitHub](https://github.com/KandatiRanjithKumarReddy/testing-react) |

---

### 💰 Borrower Copilot — Privacy-First Loan Advisor

> A **100% client-side** loan assessment tool exposing the gap between bank sanctions and safe repayment capacity.

| Attribute | Detail |
| :--- | :--- |
| **Stack** | React 19 · TypeScript · Vite · Tailwind CSS |
| **Algorithms** | Newton-Raphson APR solver, dual-shock stress testing engine |
| **Key Impact** | Honest BORROW / BORROW LESS / DON'T BORROW decisions, printable negotiation card, zero PII collection |
| **Links** | [🔗 Live Demo](https://borrower-copilot-seven.vercel.app/) · [🐙 GitHub](https://github.com/KandatiRanjithKumarReddy/Borrower-Copilot) |

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Minimum Version |
| :--- | :--- |
| **Node.js** | `≥ 18.0.0` (LTS recommended) |
| **Package Manager** | `npm` ≥ 9 / `bun` ≥ 1.0 / `yarn` ≥ 1.22 |
| **Git** | `≥ 2.30` |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/KandatiRanjithKumarReddy/portfolio.git
cd portfolio

# 2. Install dependencies
npm install
# — or, using Bun (significantly faster) —
bun install

# 3. Start the development server
npm run dev
# Server starts at http://localhost:3000 with HMR enabled
```

### Quick Verification

After starting the dev server, verify the setup:
- Navigate to `http://localhost:3000` — you should see the portfolio landing page
- Toggle the theme (sun/moon icon) — accent colors should switch between Sky Blue and Orange
- Scroll through sections — smooth scrolling and animations should be active
- Check the browser console — zero errors expected in a clean install

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Vite dev server with HMR at `localhost:3000` |
| `npm run build` | Production build — generates SSR-optimized output via Nitro |
| `npm run build:dev` | Development-mode build (for debugging production issues) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint (flat config) with React Hooks + Prettier rules |
| `npm run format` | Format entire codebase with Prettier |

---

## ⚡ Performance & Optimization

### Build-Time Optimizations
- **Vite 8 Tree-Shaking** — Dead code elimination across all dependencies
- **Code Splitting** — TanStack Router automatic route-based code splitting
- **Asset Pipeline** — Image imports resolved at build time, optimized by Vite's asset handling
- **Tailwind v4 Lightning CSS** — Native CSS compilation (replaces PostCSS), dramatically faster builds

### Runtime Optimizations
- **CSS-Layer Theming** — Theme switches via CSS custom property toggling with zero React re-renders
- **GPU-Accelerated Animations** — Framer Motion leverages `transform` and `opacity` for compositor-only animations
- **Lazy Hydration** — TanStack Start's progressive hydration minimizes Time-to-Interactive
- **Smooth Scroll Debouncing** — Lenis scroll events are lerp-interpolated, preventing jank on high-frequency scroll input

### Bundle Composition
- **React 19** core (~40KB gzipped)
- **TanStack Router** (~12KB gzipped)
- **Framer Motion** (~30KB gzipped, tree-shaken)
- **Radix UI** primitives — individually imported, minimal overhead per component
- **Tailwind CSS** — atomic CSS, only used classes ship to production

---

## 🚢 Deployment

The portfolio is deployed on **Vercel** with the following configuration:

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".output"
}
```

### Deployment Workflow

1. Push to the `main` branch
2. Vercel detects the push and triggers a build via Nitro
3. SSR output is deployed to Vercel's Edge Network
4. Custom domain + HTTPS auto-configured

> **Note:** This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history (force pushing, rebasing/amending/squashing pushed commits) as it rewrites history on Lovable's side.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Here's how to contribute:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feat/your-feature`
3. **Commit** your changes with conventional commits: `git commit -m "feat: add new section"`
4. **Push** to your branch: `git push origin feat/your-feature`
5. **Open** a Pull Request against `main`

### Code Style

- All code is formatted with **Prettier** (see `.prettierrc`)
- **ESLint** flat config enforces React Hooks rules and code quality
- TypeScript **strict mode** is enabled — no `any` types, no implicit returns
- Conventional commit messages preferred (`feat:`, `fix:`, `docs:`, `refactor:`, etc.)

---

## 📞 Contact & Connect

| Channel | Link |
| :--- | :--- |
| 👨‍💻 **Name** | Kandati Ranjith Kumar Reddy |
| 📧 **Email** | [kandatiranjithkumarreddy@gmail.com](mailto:kandatiranjithkumarreddy@gmail.com) |
| 📞 **Phone** | +91 75693 77080 |
| 📍 **Location** | Venkatagiri, Andhra Pradesh, India |
| 🐙 **GitHub** | [@KandatiRanjithKumarReddy](https://github.com/KandatiRanjithKumarReddy) |
| 💼 **LinkedIn** | [Kandati Ranjith Kumar Reddy](https://www.linkedin.com/in/kandati-ranjith-kumar-reddy/) |
| 🧩 **LeetCode** | [ranjith568](https://leetcode.com/u/ranjith568/) |

---

## 📄 License

This project is open source and available for reference and learning purposes.

---

<div align="center">

  **If this portfolio impressed you, consider giving it a ⭐ — it helps!**

  <sub>Engineered with ❤️ and relentless attention to detail by <b>Kandati Ranjith Kumar Reddy</b></sub>

</div>
