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
    "The engineering, cloud, data, security, product and leadership roles we recruit for.",
  path: "/technologies",
});

export default function Technologies() {
  return (
    <>
      <Header />
      <main id="main">
        <PageHero
          title={
            <>
              The roles we{" "}
              <span className="text-lime-text">actually recruit for.</span>
            </>
          }
          lead="Our recruiters specialise by area rather than covering the whole market. If a skill is not here, we will say so instead of taking the mandate anyway."
        />

        <TechStack groups={technologyGroups} tone="paper" heading={false} />

        <CtaBand
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
