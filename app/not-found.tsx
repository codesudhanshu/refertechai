import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";

const DESTINATIONS = [
  { label: "Services", href: "/services", detail: "What we build" },
  { label: "Industries", href: "/industries", detail: "Where we work" },
  { label: "Work", href: "/work", detail: "Selected engagements" },
  { label: "Contact", href: "/contact", detail: "Start a conversation" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="gradient-wash border-b border-line">
          <Container className="py-24 lg:py-32">
            <div className="max-w-2xl">
              <Eyebrow>Error 404</Eyebrow>
              <h1 className="mt-6 text-h1 text-balance">
                That page isn&apos;t{" "}
                <span className="text-primary">here.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-body">
                The link may be out of date, or the page may have moved. Here is
                where most people are going.
              </p>
              <div className="mt-10">
                <Button href="/" size="lg">
                  Back to home
                </Button>
              </div>
            </div>

            <ul className="mt-16 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {DESTINATIONS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group/btn flex h-full flex-col bg-paper p-6 transition-colors duration-150 hover:bg-surface"
                  >
                    <span className="font-display text-base font-semibold text-ink transition-colors duration-150 group-hover/btn:text-primary">
                      {item.label}
                    </span>
                    <span className="mt-2 text-sm text-body">
                      {item.detail}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
