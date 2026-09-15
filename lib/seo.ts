import type { Metadata } from "next";
import { company } from "@/content/company";

// metadataBase and the `%s — ReferTech AI` title template are set once in
// app/layout.tsx. Pages pass the bare page name as `title` and the template
// appends the brand, so nothing here should include it.
//
// Open Graph and Twitter do not go through the template, so the branded title
// is composed explicitly for those.
export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${company.url}${input.path === "/" ? "" : input.path}`;
  const socialTitle = input.title.includes(company.name)
    ? input.title
    : `${input.title} — ${company.name}`;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: company.name,
      title: socialTitle,
      description: input.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: input.description,
    },
  };
}
