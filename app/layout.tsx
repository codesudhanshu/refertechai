import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReferTech AI — Technology that moves business forward",
  description: "ReferTech AI builds AI systems, software products, cloud infrastructure and blockchain applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
