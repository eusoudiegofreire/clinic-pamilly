import Image from "next/image";
import Reveal from "./Reveal";
import ParallaxY from "./ParallaxY";
import SectionCta from "./SectionCta";
import { painPoints } from "@/config/site";

export default function PainPoints() {
  return (
    <section id="sintomas" className="bg-off-white py-20 md:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        {/* Colagem de fotos */}
        <Reveal className="relative mx-auto w-full max-w-[380px]">
          <ParallaxY distance={34} className="arch--soft w-3/4 shadow-[var(--shadow-lift)]">
            <Image
              src="/images/pamilly-sintomas-1.jpg"
              alt="Dra. Pâmilly em atendimento"
              width={560}
              height={700}
              sizes="(max-width: 1024px) 60vw, 280px"
              className="h-full w-full object-cover"
            />
          </ParallaxY>
          <ParallaxY
            distance={-28}
            className="arch--soft absolute -bottom-10 right-0 w-1/2 border-4 border-off-white shadow-[var(--shadow-lift)]"
          >
            <Image
              src="/images/pamilly-sintomas-2.jpg"
              alt="Consultório da Life Clinic"
              width={420}
              height={520}
              sizes="(max-width: 1024px) 40vw, 180px"
              className="h-full w-full object-cover"
            />
          </ParallaxY>
        </Reveal>

        {/* Texto + citações */}
        <div>
          <Reveal>
            <p className="kicker">{painPoints.kicker}</p>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.7rem]">
              {painPoints.title}
            </h2>
          </Reveal>

          <div className="mt-9 space-y-4">
            {painPoints.quotes.map((quote, i) => (
              <Reveal key={quote} delay={i * 90}>
                <figure className="flex items-start gap-4 rounded-card border border-card-border bg-white p-5 shadow-[var(--shadow-soft)]">
                  <span
                    aria-hidden="true"
                    className="font-heading text-4xl leading-none text-salmon"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="pt-1.5 text-lg font-medium text-primary">
                    {quote}
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <p className="mt-10 font-heading text-xl font-bold text-primary sm:text-2xl">
              {painPoints.question}
            </p>
            <SectionCta label={painPoints.cta} className="mt-6" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
