import type { Metadata } from "next";
import { company } from "@/content/company";

// metadataBase is set once in app/layout.tsx rather than here — setting it per
// page would duplicate it into every route's metadata.
export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${company.url}${input.path === "/" ? "" : input.path}`;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: company.name,
      title: input.title,
      description: input.description,
      url,
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: ["/og-default.png"],
    },
  };
}
