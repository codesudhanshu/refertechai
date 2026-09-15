// Single source of truth for company identity. Read by Footer, /contact and
// the Organization JSON-LD.
//
// CONFIRM BEFORE LAUNCH: `phone`, `offices` and `responseTime`. They are left
// empty or conservative on purpose — nothing here asserts a fact that has not
// been verified. Empty values are handled by the UI and simply do not render.

export interface Office {
  city: string;
  country: string;
  address: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Company {
  name: string;
  legalName: string;
  tagline: string;
  email: string;
  phone: string;
  url: string;
  responseTime: string;
  offices: readonly Office[];
  social: readonly SocialLink[];
}

// Annotated rather than `as const`: with a const assertion, `phone: ""` narrows
// to the literal type `""`, and every `company.phone ? ...` branch in the UI
// collapses to `never`.
export const company: Company = {
  name: "ReferTech AI",
  legalName: "ReferTech AI",
  tagline: "Technology that moves business forward",
  email: "sales@refertechai.com",
  phone: "",
  url: "https://refertechai.com",
  responseTime: "within one business day",
  offices: [],
  social: [],
};
