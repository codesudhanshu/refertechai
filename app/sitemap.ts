import type { MetadataRoute } from "next";
import { company } from "@/content/company";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { path: "/hire", priority: 0.8, changeFrequency: "monthly" },
    { path: "/jobs", priority: 0.9, changeFrequency: "weekly" },
    { path: "/work", priority: 0.7, changeFrequency: "monthly" },
    { path: "/technologies", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.5, changeFrequency: "yearly" },
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];

  return routes.map((route) => ({
    url: `${company.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
