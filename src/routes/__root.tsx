import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import React, { useEffect, type ReactNode, Suspense } from "react";


import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../components/ThemeProvider";
import { Navbar } from "../components/Navbar";
import { ScrollProgress } from "../components/ScrollProgress";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { LoadingScreen } from "../components/LoadingScreen";
import { SmoothScroll } from "../components/SmoothScroll";

const Footer = React.lazy(() => import("../components/Footer").then(m => ({ default: m.Footer })));
const BackToTop = React.lazy(() => import("../components/BackToTop").then(m => ({ default: m.BackToTop })));
const CustomCursor = React.lazy(() => import("../components/CustomCursor").then(m => ({ default: m.CustomCursor })));

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <AnimatedBackground />
      <div className="glass-strong rounded-3xl p-10 max-w-md text-center shadow-elegant">
        <p className="text-7xl font-display font-bold gradient-text">404</p>
        <h1 className="mt-4 text-xl font-semibold">Page not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has wandered off into the void.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl gradient-bg px-5 py-2.5 text-sm font-medium text-primary-foreground glow"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="glass-strong rounded-3xl p-8 max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-lg gradient-bg px-4 py-2 text-sm font-medium text-primary-foreground glow"
          >
            Try again
          </button>
          <a href="/" className="rounded-lg glass px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kandati Ranjith Kumar Reddy — Full Stack Developer" },
      { name: "description", content: "Portfolio of Kandati Ranjith Kumar Reddy — full stack developer building fast, accessible, beautifully animated web experiences." },
      { name: "author", content: "Kandati Ranjith Kumar Reddy" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:site_name", content: "Kandati Ranjith Kumar Reddy" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Kandati Ranjith Kumar Reddy — Full Stack Developer" },
      { property: "og:description", content: "Premium developer portfolio: React, Node, modern UI engineering." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "/#person",
              name: "Kandati Ranjith Kumar Reddy",
              givenName: "Ranjith",
              familyName: "Kandati",
              jobTitle: "Full Stack Developer",
              description:
                "I turn ideas into production-ready web apps. From real-time chat systems to payment-integrated booking platforms, I build with React, Angular, Node.js, TypeScript, and Java — fast, secure, and built to scale",
              email: "mailto:kandatiranjithkumarreddy@gmail.com",
              telephone: "+91-75693-77080",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tirupati",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Sri Venkateswara College of Engineering",
              },
              knowsAbout: [
                "JavaScript", "TypeScript", "Java", "React.js", "Angular",
                "Node.js", "Express.js", "MongoDB", "Firebase", "Socket.IO",
                "REST APIs", "JWT Authentication", "Tailwind CSS", "Razorpay",
              ],
              sameAs: [
                "https://github.com/",
                "https://www.linkedin.com/",
              ],
              url: "/",
            },
            {
              "@type": "WebSite",
              "@id": "/#website",
              name: "Kandati Ranjith Kumar Reddy — Portfolio",
              url: "/",
              author: { "@id": "/#person" },
              inLanguage: "en",
            },
            {
              "@type": "ProfilePage",
              "@id": "/#profile",
              mainEntity: { "@id": "/#person" },
              url: "/",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SmoothScroll />
        <LoadingScreen />
        <ScrollProgress />
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
        <AnimatedBackground />
        <Navbar />
        <main className="pt-28 sm:pt-32">
          <Outlet />
        </main>
        <Suspense fallback={null}>
          <Footer />
          <BackToTop />
        </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
