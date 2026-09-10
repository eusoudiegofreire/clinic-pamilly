import Reveal from "./Reveal";
import { painPoints } from "@/config/site";

export default function PainPoints() {
  return (
    <section className="bg-off-white py-20 md:py-24">
      <div className="wrap">
        <Reveal
          as="h2"
          className="text-center text-3xl text-primary sm:text-4xl"
        >
          {painPoints.title}
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {painPoints.quotes.map((quote, i) => (
            <Reveal key={quote} delay={i * 90}>
              <figure className="relative h-full rounded-card border border-card-border bg-white p-7 shadow-[var(--shadow-soft)]">
                <span
                  aria-hidden="true"
                  className="font-heading text-5xl leading-none text-salmon"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-lg font-medium text-primary">
                  {quote}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
