import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { TechStack } from "@/components/sections/TechStack";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { technologyGroups } from "@/content/technologies";

export const metadata = buildMetadata({
  title: "Technologies",
  description:
    "The AI, frontend, backend, cloud, data and Web3 stack we build production systems on.",
  path: "/technologies",
});

export default function Technologies() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          eyebrow="What we build on"
          title={
            <>
              A stack chosen for the job,{" "}
              <span className="text-lime-text">not for the CV.</span>
            </>
          }
          lead="We are deliberately conventional about infrastructure and deliberately current about AI. Boring where boring is a feature, new where new actually buys something."
        />

        <TechStack groups={technologyGroups} tone="paper" heading={false} />

        <CtaBand
          eyebrow="Using something else?"
          title={
            <>
              We work in{" "}
              <span className="text-lime-text">your stack, not ours.</span>
            </>
          }
          lead="This is what we reach for on a clean slate. On an existing system we work with what is already there, and only propose a change when there is a specific reason."
        />
      </main>
      <Footer />
    </>
  );
}
