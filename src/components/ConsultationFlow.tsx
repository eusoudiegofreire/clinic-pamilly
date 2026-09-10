import Image from "next/image";
import Reveal from "./Reveal";
import SectionCta from "./SectionCta";
import { consultationFlow } from "@/config/site";

export default function ConsultationFlow() {
  return (
    <section id="fluxo" className="bg-warm-beige py-20 md:py-28">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="kicker">{consultationFlow.kicker}</p>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.7rem]">
            {consultationFlow.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          {/* Passos */}
          <ol className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {consultationFlow.steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 55}
                className="flex items-start gap-4 border-t border-primary/15 pt-4"
              >
                <span className="font-heading text-3xl font-extrabold text-salmon">
                  {step.n}
                </span>
                <span className="pt-1 text-base font-semibold text-primary">
                  {step.label}
                </span>
              </Reveal>
            ))}
          </ol>

          {/* Foto */}
          <Reveal delay={120} className="relative mx-auto w-full max-w-[360px]">
            <div className="arch--soft shadow-[var(--shadow-lift)]">
              <Image
                src="/images/pamilly-fluxo.jpg"
                alt="Dra. Pâmilly na Life Clinic"
                width={720}
                height={620}
                sizes="(max-width: 1024px) 70vw, 340px"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <SectionCta className="mt-12" />
        </Reveal>
      </div>
    </section>
  );
}
