import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "../lib/i18n";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { StickyMobileCTA } from "../components/site/StickyMobileCTA";
import { SITE } from "../lib/site-config";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
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
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
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
      { title: "Shaam Kabul · Authentic Afghan Restaurant in Kabul" },
      {
        name: "description",
        content:
          "Shaam Kabul serves authentic Afghan cuisine — Kabuli Pulao, charcoal kebabs, mantu and more — in a warm, elegant setting in the heart of Kabul.",
      },
      {
        name: "keywords",
        content:
          "Shaam Kabul, Shame Kabul, Afghan restaurant Kabul, Kabuli Pulao, kebab, mantu, Afghan food, reservation Kabul",
      },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Shaam Kabul · Authentic Afghan Restaurant in Kabul" },
      {
        property: "og:description",
        content:
          "Authentic Afghan cuisine — Kabuli Pulao, charcoal kebabs, mantu — in a warm, elegant setting in Kabul.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shaam Kabul · Authentic Afghan Restaurant in Kabul" },
      {
        name: "twitter:description",
        content: "Authentic Afghan cuisine in the heart of Kabul.",
      },
      { name: "theme-color", content: "#C65D3A" },
      { name: "description", content: "Shame Kabul Elegance is a premium restaurant website showcasing a luxurious, modern, and elegant dining experience." },
      { property: "og:description", content: "Shame Kabul Elegance is a premium restaurant website showcasing a luxurious, modern, and elegant dining experience." },
      { name: "twitter:description", content: "Shame Kabul Elegance is a premium restaurant website showcasing a luxurious, modern, and elegant dining experience." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e8053c3b-799e-4fa1-9f8e-0aac11100216/id-preview-a18a93c7--2d1c7bff-9815-4639-84a5-b1c12bddafb7.lovable.app-1782985274972.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e8053c3b-799e-4fa1-9f8e-0aac11100216/id-preview-a18a93c7--2d1c7bff-9815-4639-84a5-b1c12bddafb7.lovable.app-1782985274972.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Vazirmatn:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: SITE.name,
          servesCuisine: ["Afghan", "Middle Eastern"],
          priceRange: "$$",
          telephone: SITE.phones,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kabul",
            addressCountry: "AF",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "11:00",
              closes: "23:00",
            },
          ],
          sameAs: [SITE.facebook].filter(Boolean),
          url: `https://${SITE.domain}`,
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
    <html lang="fa" dir="rtl">
      <head>
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
      <I18nProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-[60vh]">
          <Outlet />
        </main>
        <Footer />
        <StickyMobileCTA />
      </I18nProvider>
    </QueryClientProvider>
  );
}
