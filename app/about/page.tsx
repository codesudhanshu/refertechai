import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { stats } from "@/content/stats";

export const metadata = buildMetadata({
  title: "About",
  description:
    "ReferTech AI is an independent technology partner for companies creating meaningful digital change.",
  path: "/about",
});

const VALUES = [
  {
    name: "Useful over novel",
    detail: "We choose technology for the value it creates, not the buzz it generates.",
  },
  {
    name: "Clear is kind",
    detail: "Direct communication, visible progress and decisions you can understand.",
  },
  {
    name: "Built to last",
    detail: "Thoughtful architecture gives your next good idea room to grow.",
  },
];

export default function About() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="About ReferTech AI"
          title={
            <>
              Ambitious ideas need{" "}
              <span className="text-primary">solid ground.</span>
            </>
          }
          lead="ReferTech AI is an independent technology partner for companies creating meaningful digital change."
        />

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              eyebrow="Our point of view"
              title={
                <>
                  Great technology should feel{" "}
                  <span className="text-primary">inevitable</span> — not
                  complicated.
                </>
              }
            />
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-body">
                Our work lives at the intersection of emerging technology and
                practical delivery. We help founders and established teams turn
                a hard question into a product, a platform, or an intelligent
                way of working.
              </p>
              <p className="mt-5 leading-relaxed text-body">
                That means we pair sharp product thinking with serious
                engineering. Most of what we do is not inventing something
                nobody has seen; it is making complex technology useful,
                reliable and ready for the real world — and then handing it over
                in a state your team can actually own.
              </p>
              <div className="mt-8">
                <Button href="/services" variant="outline">
                  See what we do
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <StatsBand items={stats} tone="surface" eyebrow="Where we stand" />

        <Section bordered>
          <SectionHeading
            eyebrow="What guides us"
            title={
              <>
                Three things we{" "}
                <span className="text-primary">do not trade away.</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {VALUES.map((value, index) => (
              <div
                key={value.name}
                className="rounded-card border border-line bg-paper p-7"
              >
                <span className="font-display text-sm font-semibold tabular-nums text-accent-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-h3 font-semibold">{value.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {value.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="surface" bordered>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              eyebrow="How we are set up"
              title={
                <>
                  Senior people,{" "}
                  <span className="text-primary">on the actual work.</span>
                </>
              }
            />
            <div className="max-w-2xl">
              <p className="leading-relaxed text-body">
                There is no layer of account managers between you and the
                people building your system. The engineers and designers on your
                project are the ones in the room, and the person who scoped the
                work is the person accountable for delivering it.
              </p>
              <p className="mt-5 leading-relaxed text-body">
                Teams are staffed small and kept stable. That is partly about
                quality and partly about honesty — a small team cannot quietly
                absorb a bad decision, so problems surface while they are still
                cheap to fix.
              </p>
            </div>
          </div>
        </Section>

        <CtaBand
          eyebrow="Have a hard problem?"
          title={
            <>
              Worth <span className="text-primary">solving properly?</span>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
