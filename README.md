<div align="center">

# ⚡ Kandati Ranjith Kumar Reddy
### Full-Stack Software Engineer • Distributed Web Systems • AI Integration

<p align="center">
  Engineering high-performance, resilient, and user-centric web applications from ground zero to production.
</p>

<p align="center">
  <a href="https://github.com/KandatiRanjithKumarReddy/portfolio">
    <img src="https://img.shields.io/github/stars/KandatiRanjithKumarReddy/portfolio?style=flat-square&logo=github&color=2563eb" alt="Stars" />
  </a>
  <a href="https://github.com/KandatiRanjithKumarReddy/portfolio/network/members">
    <img src="https://img.shields.io/github/forks/KandatiRanjithKumarReddy/portfolio?style=flat-square&logo=github&color=3b82f6" alt="Forks" />
  </a>
  <a href="https://react.dev">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5.8" />
  </a>
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  </a>
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/badge/Node.js-18+-5FA04E?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
  </a>
  <a href="https://vercel.com">
    <img src="https://img.shields.io/badge/Deploy-Vercel_Edge-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel Edge" />
  </a>
</p>

---

**[🌐 Live Portfolio](https://ranjith-portfolio-six.vercel.app/)** • **[📄 Direct Resume Download](https://ranjith-portfolio-six.vercel.app/ranjith-k.pdf)** • **[☁️ Google Drive Resume](https://drive.google.com/file/d/1q4ITrXmJYsaiBsRkeyhszDPHQn3q6A4M/view?usp=drive_link)** • **[💼 LinkedIn](https://www.linkedin.com/in/kandati-ranjith-kumar-reddy/)** • **[🐙 GitHub](https://github.com/KandatiRanjithKumarReddy)** • **[🧩 LeetCode](https://leetcode.com/u/ranjith568/)**

</div>

<br />

## 📑 Table of Contents

- [Executive Summary](#-executive-summary)
- [Architecture & Performance Engineering](#-architecture--performance-engineering)
- [Technical Competency Matrix](#-technical-competency-matrix)
- [Production Systems & Case Studies](#-production-systems--case-studies)
  - [1. Borrower Copilot — AI-Powered Loan Advisor](#1-borrower-copilot--ai-powered-loan-advisor)
  - [2. Prescripto — Smart AI-Healthcare Platform](#2-prescripto--smart-ai-healthcare-platform)
  - [3. Chatty — Real-Time Communication Platform](#3-chatty--real-time-communication-platform)
  - [4. TripNest — Enterprise Tourism Booking Engine](#4-tripnest--enterprise-tourism-booking-engine)
  - [5. GitHub User Finder — Automated Testing Harness](#5-github-user-finder--automated-testing-harness)
- [Engineering Principles & Code Quality](#-engineering-principles--code-quality)
- [Local Development & Verification](#-local-development--verification)
- [Contact & Professional Profiles](#-contact--professional-profiles)

---

## 🏛️ Executive Summary

I am **Kandati Ranjith Kumar Reddy**, a full-stack software engineer (2026 B.Tech Computer Science graduate) with internship experience at **Infosys**. 

I approach software engineering with a product-first, systems-driven perspective:
- **Full Lifecycle Delivery:** Architecting systems from relational/document schema design and secure RESTful APIs to hardware-accelerated, accessible frontend interfaces.
- **Resilience & Fault Tolerance:** Building with automated LLM fallback strategies, transactional consistency, and graceful degradation under high concurrency.
- **Performance by Design:** Eliminating layout reflows, batching render cycles, isolating compositor layers, and ensuring direct in-memory binary asset delivery.

---

## ⚡ Architecture & Performance Engineering

This portfolio application serves as a benchmark for modern, production-grade frontend engineering:

```
┌────────────────────────────────────────────────────────┐
│                   Vercel / Cloudflare Edge             │
│   (Nitro Engine SSR + Custom Content-Disposition)      │
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│       TanStack Router Engine (File-Based Routes)       │
└──────┬───────────────────┬───────────────────┬─────────┘
       │                   │                   │
┌──────▼──────┐     ┌──────▼──────┐     ┌──────▼────────┐
│  Compositor │     │    Lenis    │     │  Memory-Blob  │
│ Layer Blobs │     │  RAF Scroll │     │ Direct Stream │
│(contain:str)│     │(Snappy 0.75)│     │(Instant Cache)│
└─────────────┘     └─────────────┘     └───────────────┘
```

### Key Technical Implementations:
1. **Coordinated Momentum Scrolling (Lenis):**
   - Configured with calibrated duration (`0.75s`) and custom exponential easing (`1.001 - 2^(-10t)`).
   - Touch-only coarse devices (`(pointer: coarse) and (hover: none)`) are automatically decoupled from software smoothing to preserve native 120Hz display refresh momentum.
   - Anchor clicks are intercepted and synchronized via `window.__lenis.scrollTo(element, { offset: -70 })`, preventing native `scrollIntoView` thread fighting.
2. **GPU Layer Isolation & Backdrop Fill-Rate Optimization:**
   - Background animated blobs are completely isolated via `transform-gpu`, `will-change: transform`, and CSS `contain: strict`.
   - Tuned `.glass` blur filters to `12px` / `16px` saturation thresholds, reducing GPU fragment shader re-rasterization load by >50% during scrolling.
3. **On-Demand RAF Lifecycle (Custom Cursor):**
   - Eliminated the common continuous `requestAnimationFrame` loop that drains CPU cycles when idle.
   - Position updates and element hover states are batched via event-driven RAF scheduling with zero layout reflow (`transform: scale(...)` instead of `width/height` mutations).
4. **Instant In-Memory Direct Asset Streaming:**
   - Implemented an asynchronous Blob stream (`fetch` with `{ cache: "no-store" }` + `URL.createObjectURL(blob)`) for resume downloading (`ranjith-k.pdf`).
   - Paired with server-side `Content-Disposition: attachment; filename="ranjith-k.pdf"` rules in both `vercel.json` and `_headers` to eliminate unwanted redirects or Google Drive interstitials.

---

## 🛠️ Technical Competency Matrix

| Domain | Technologies & Methodologies |
| :--- | :--- |
| **Languages** | Java, JavaScript (ES6+), TypeScript, SQL |
| **Frontend Engineering** | React 19, Angular, Tailwind CSS v4, DaisyUI, HTML5, CSS3, Responsive Design |
| **Backend & Microservices** | Node.js, Express.js, RESTful Architecture, JWT Authentication, WebSockets (Socket.IO) |
| **Databases & Persistence** | MongoDB, MySQL, Google Cloud Firestore, Relational Schema Modeling |
| **System Design & Core CS** | Data Structures & Algorithms, Object-Oriented Design (OOP), DBMS, OS, Computer Networks, SDLC |
| **AI Systems & LLMs** | Google Gemini AI, Groq LLM Triage, Automated Multi-Model Fallbacks, Prompt Optimization |
| **DevOps & Tooling** | Git, GitHub Actions, Postman, CI/CD, Vercel Edge, Cursor, Antigravity, Claude |

---

## 💼 Production Systems & Case Studies

### 1. [Borrower Copilot](https://borrower-copilot-pi.vercel.app/) — AI-Powered Loan Advisor
> **Architectural Focus:** Financial risk assessment engine with multi-tier failover LLM integration.

- **Stack:** React 19, TypeScript, Node.js, Express, MySQL (Aiven Cloud), Google Gemini AI, Tailwind CSS, Vercel
- **Engineered Core:**
  - Designed a deterministic financial assessment engine calculating tiered FOIR (Fixed Obligation to Income Ratio) limits between **25%–55%** across 3 employment categories.
  - Implemented stress-testing algorithms simulating repayment survival under simulated **15% income reductions**.
  - Built an automated **3-model fallback strategy** around Google Gemini AI to guarantee 99.9% uptime for AI loan advice during API rate limits.
  - Normalized schema across 5 relational MySQL tables on Aiven Cloud, secured with Google OAuth 2.0 & JWT.
- **Artifacts:** [Live Platform](https://borrower-copilot-pi.vercel.app/) • [Source Code](https://github.com/KandatiRanjithKumarReddy/Borrower-Copilot)

---

### 2. [Prescripto](https://doctor-frontend-eosin.vercel.app/) — Smart AI-Healthcare Platform
> **Architectural Focus:** High-throughput appointment scheduling, RBAC portal isolation, and Groq LLM clinical routing.

- **Stack:** React, Node.js, Express, MongoDB, Groq LLMs, Razorpay, Cloudinary, Google OAuth, Tailwind CSS
- **Engineered Core:**
  - Reduced appointment scheduling turnaround from **15 minutes to under 2 minutes** via streamlined booking workflows.
  - Architected **Vaidya AI** powered by ultra-low-latency Groq LLMs to perform automated symptom triage and medical specialty routing with failover model redundancy.
  - Enforced strict Role-Based Access Control (RBAC) and JWT validation across 3 dedicated portals: Patient, Doctor, and Administrative Console.
  - Designed **16+ transactional REST endpoints** in Express, handling atomic scheduling, Cloudinary image pipelines, and Razorpay webhook payment reconciliation.
- **Artifacts:** [Live Platform](https://doctor-frontend-eosin.vercel.app/) • [Source Code](https://github.com/KandatiRanjithKumarReddy/doctor-frontend)

---

### 3. [Chatty](https://chatapplication-8q6x.onrender.com/) — Real-Time Communication Platform
> **Architectural Focus:** Sub-second bidirectional WebSocket event streaming and distributed presence tracking.

- **Stack:** React, Node.js, Express, MongoDB, Socket.IO, JWT, Tailwind CSS, Render
- **Engineered Core:**
  - Implemented bidirectional Socket.IO event buses, achieving **sub-second messaging** with a **~40% latency reduction** compared to traditional polling.
  - Built live heartbeat presence monitoring for instant online/offline state broadcasts across active rooms.
  - Secured connection handshakes with stateless JWT token verification and MongoDB persistent chat history.
- **Artifacts:** [Live Platform](https://chatapplication-8q6x.onrender.com/) • [Source Code](https://github.com/KandatiRanjithKumarReddy/ChatApplication)

---

### 4. TripNest — Enterprise Tourism Booking Engine
> **Architectural Focus:** Reactive Angular component architecture with real-time Cloud Firestore persistence.

- **Stack:** Angular, TypeScript, Firebase, Cloud Firestore, Razorpay, CSS3, HTML5
- **Context:** Built during Software Engineer internship at **Infosys Springboard**.
- **Engineered Core:**
  - Designed an end-to-end holiday package marketplace supporting **100+ global destinations** with instantaneous client-side filtering.
  - Leveraged Angular reactive forms with strict type validation, coupled with Firestore real-time snapshots for synchronized itinerary bookings.
  - Integrated secure Razorpay checkout flows with client/server transaction reconciliation.

---

### 5. [GitHub User Finder](https://testing-react-sigma.vercel.app/) — Automated Testing Harness
> **Architectural Focus:** Test-Driven Development (TDD), end-to-end browser automation, and strict CI validation.

- **Stack:** React 19, TypeScript, Vite, Vitest, React Testing Library, Playwright, Tailwind CSS
- **Engineered Core:**
  - Established a comprehensive testing harness integrating **9 automated Playwright headless browser E2E test scenarios** covering edge cases, network delays, and API errors.
  - Wrote modular unit tests using Vitest and React Testing Library, validating component contracts and API mock adapters.
- **Artifacts:** [Live Platform](https://testing-react-sigma.vercel.app/) • [Source Code](https://github.com/KandatiRanjithKumarReddy/testing-react)

---

## 🎯 Engineering Principles & Code Quality

1. **Predictability Over Cleverness:** Write explicit, self-documenting code with comprehensive TypeScript type coverage. Avoid esoteric abstractions that impede team onboarding.
2. **Defensive API Contracts:** All client-side inputs are sanitized and validated with Zod schemas before transmission; backend endpoints enforce strict schema adherence and sanitized error envelopes.
3. **Compositor-First Animations:** Prioritize CSS `transform` and `opacity` to keep transitions off the main JavaScript thread, ensuring consistent 60–120 FPS render performance.
4. **Git Hygiene & History Integrity:** Atomic commits following the Conventional Commits specification, zero tracked credentials or build artifacts, and strict `.gitignore` maintenance.

---

## 💻 Local Development & Verification

### Prerequisites
- Node.js `>= 18.0.0`
- npm `>= 9.0.0`

### 1. Clone & Install
```bash
git clone https://github.com/KandatiRanjithKumarReddy/portfolio.git
cd portfolio
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to preview.

### 3. Verification & Type Checking
```bash
# Type check without emitting files
npx tsc --noEmit

# Production build and asset generation
npm run build
```

---

## 📬 Contact & Professional Profiles

I am actively open to **Software Engineer** and **Full-Stack Developer** opportunities.

| Medium | Details |
| :--- | :--- |
| 👨‍💻 **Engineer** | **Kandati Ranjith Kumar Reddy** |
| 📧 **Direct Email** | [kandatiranjithkumarreddy@gmail.com](mailto:kandatiranjithkumarreddy@gmail.com) |
| 📞 **Direct Phone** | [+91 75693 77080](tel:+917569377080) |
| 📍 **Location** | Andhra Pradesh, India |
| 🌐 **Live Portfolio** | [ranjith-portfolio-six.vercel.app](https://ranjith-portfolio-six.vercel.app/) |
| 📄 **Direct Resume** | [Download `ranjith-k.pdf`](https://ranjith-portfolio-six.vercel.app/ranjith-k.pdf) • [Google Drive Mirror](https://drive.google.com/file/d/1q4ITrXmJYsaiBsRkeyhszDPHQn3q6A4M/view?usp=drive_link) |
| 💼 **LinkedIn** | [linkedin.com/in/kandati-ranjith-kumar-reddy](https://www.linkedin.com/in/kandati-ranjith-kumar-reddy/) |
| 🐙 **GitHub** | [github.com/KandatiRanjithKumarReddy](https://github.com/KandatiRanjithKumarReddy) |
| 🧩 **LeetCode** | [leetcode.com/u/ranjith568](https://leetcode.com/u/ranjith568/) |
| 🏆 **HackerRank** | [hackerrank.com/profile/ranjithreddywo1](https://www.hackerrank.com/profile/ranjithreddywo1) |

---

<div align="center">

Engineered with architectural discipline, performance obsession, and clean code principles.  
**© Kandati Ranjith Kumar Reddy**

</div>
