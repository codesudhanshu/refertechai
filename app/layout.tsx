import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { company } from "@/content/company";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s — ${company.name}`,
  },
  description:
    "ReferTech AI is an IT recruitment and staffing firm — permanent, contract and executive hiring for technology teams.",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.legalName,
  url: company.url,
  slogan: company.tagline,
  email: company.email,
  ...(company.phone ? { telephone: company.phone } : {}),
  ...(company.social.length
    ? { sameAs: company.social.map((link) => link.href) }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-lime focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </body>
    </html>
  );
}
