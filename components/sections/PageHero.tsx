import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function PageHero({
  title,
  lead,
  image,
  children,
}: {
  title: ReactNode;
  lead?: string;
  // A background photograph for the band. Decorative by definition — it sits
  // behind the copy and says nothing the copy does not, so it carries an empty
  // alt rather than a description a screen reader would read out.
  image?: string;
  children?: ReactNode;
}) {
  // With a photograph behind it the band flips to the brand navy and white
  // copy. White has far more contrast headroom than the body colour does, so
  // the picture can show through properly instead of being washed out to a
  // texture — on a light ground the same photograph would have to sit under a
  // near-opaque scrim to keep the copy legible.
  //
  // Pages write their accent word as `text-lime-text`, which is tuned for a
  // light ground and measures only 3.3:1 on navy. Rather than edit that span
  // on every page, the descendant override below swaps it for `lime` (12.5:1)
  // wherever this band carries an image. It outranks the plain utility on
  // specificity, so no page needs to know which ground it is on.
  const onPhoto = Boolean(image);

  return (
    <section
      className={
        onPhoto
          ? "on-dark relative isolate overflow-hidden bg-teal [&_.text-lime-text]:text-lime"
          : "border-b border-line bg-surface"
      }
    >
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          {/* Darker on the left, where the copy sits, easing off across the
              band so the photograph is not flattened to a single grey. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-teal/92 via-teal/85 to-teal/70"
          />
        </>
      ) : null}

      <Container className="py-16 lg:py-24">
        <div className="max-w-3xl">
          <h1 className={`text-h1 text-balance ${onPhoto ? "text-paper" : ""}`}>
            {title}
          </h1>
          {lead ? (
            <p
              className={`mt-6 max-w-2xl text-lg leading-relaxed ${
                onPhoto ? "text-body-invert" : "text-body"
              }`}
            >
              {lead}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
