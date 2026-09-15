import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { vision, mission } from "@/content/about";

// Image left, content right — the split layout the reference sites use for
// their "who we are" block. No kicker above the heading, per the standing rule.
export function VisionMission({
  tone = "surface",
  image = {
    src: "/images/network.jpg",
    alt: "Consultants reviewing a system architecture together",
  },
  showAction = true,
}: {
  tone?: "paper" | "surface";
  image?: { src: string; alt: string };
  showAction?: boolean;
}) {
  return (
    <Section tone={tone} bordered>
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-card border border-line lg:aspect-[5/6]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-h2 text-balance">
            Fewer CVs,{" "}
            <span className="text-lime-text">better matched.</span>
          </h2>

          <div className="mt-8 flex flex-col gap-8 border-t border-line pt-8">
            <div>
              <h3 className="text-h3 font-semibold">{vision.heading}</h3>
              <p className="mt-3 leading-relaxed text-body">{vision.body}</p>
            </div>

            <div className="border-t border-line pt-8">
              <h3 className="text-h3 font-semibold">{mission.heading}</h3>
              <p className="mt-3 leading-relaxed text-body">{mission.body}</p>
            </div>
          </div>

          {showAction ? (
            <div className="mt-10">
              <Button href="/about" variant="outline">
                About ReferTech AI
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
