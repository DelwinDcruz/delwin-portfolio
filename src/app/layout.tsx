import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/portfolio";
import ScrollProgress from "@/components/animations/ScrollProgress";
import CustomCursor from "@/components/animations/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import { ThemeProvider, themeInitScript } from "@/components/providers/ThemeProvider";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://delwindcruz.dev"; // TODO: replace with your deployed domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Delwin Dcruz | Full Stack Developer in Kerala",
    template: "%s | Delwin Dcruz",
  },
  description:
    "Delwin Dcruz is a Full Stack Developer in Ernakulam, Kerala building RESTful APIs and full-stack applications with Java, Spring Boot, React, Next.js, TypeScript and MySQL.",
  keywords: [
    "Delwin Dcruz",
    "Full Stack Developer in Kerala",
    "Java Developer in Kochi",
    "React Developer",
    "Next.js Developer",
    "Spring Boot Developer",
    "Software Developer in Ernakulam",
    "MySQL Developer",
    "Full Stack Portfolio",
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  alternates: { canonical: siteUrl }, // TODO: update after deployment
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Delwin Dcruz | Full Stack Developer",
    description:
      "Full Stack Developer building responsive frontend interfaces and reliable backend systems with Java, Spring Boot, React, Next.js and MySQL.",
    siteName: "Delwin Dcruz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delwin Dcruz | Full Stack Developer",
    description:
      "Full Stack Developer building responsive frontend interfaces and reliable backend systems with Java, Spring Boot, React, Next.js and MySQL.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffef2" },
    { media: "(prefers-color-scheme: dark)", color: "#222325" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.role,
  email: personal.email,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ernakulam",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: [personal.github],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "MySQL",
    "REST APIs",
    "Prisma ORM",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Delwin Dcruz Portfolio",
  url: siteUrl,
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: personSchema,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${jakarta.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
  <Script
    id="theme-init"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{ __html: themeInitScript }}
  />
</head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus-ring"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
