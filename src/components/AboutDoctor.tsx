import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import ParallaxY from "./ParallaxY";
import SectionCta from "./SectionCta";
import VideoBlock from "./VideoBlock";
import { aboutDoctor, videos } from "@/config/site";

export default function AboutDoctor() {
  return (
    <section id="sobre" className="bg-cream py-20 md:py-28">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[28px] border border-card-border bg-off-white px-6 py-14 sm:px-12 md:py-16">
          <span
            aria-hidden="true"
            className="watermark absolute -right-4 bottom-2 text-[5.5rem] sm:text-[8rem]"
          >
            {aboutDoctor.watermark}
          </span>

          <div className="relative grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            {/* Fotos */}
            <Reveal className="relative mx-auto w-full max-w-[380px]">
              <ParallaxY distance={30} className="arch--soft w-4/5 shadow-[var(--shadow-lift)]">
                <Image
                  src="/images/pamilly-sobre-1.jpg"
                  alt={aboutDoctor.name}
                  width={620}
                  height={780}
                  sizes="(max-width: 768px) 70vw, 300px"
                  className="h-full w-full object-cover"
                />
              </ParallaxY>
              <ParallaxY
                distance={-24}
                className="arch--soft absolute -bottom-8 right-0 w-1/2 border-4 border-off-white shadow-[var(--shadow-lift)]"
              >
                <Image
                  src="/images/pamilly-sobre-2.jpg"
                  alt={aboutDoctor.name}
                  width={420}
                  height={520}
                  sizes="(max-width: 768px) 40vw, 170px"
                  className="h-full w-full object-cover"
                />
              </ParallaxY>
            </Reveal>

            {/* Texto */}
            <Reveal delay={120}>
              <p className="kicker">{aboutDoctor.kicker}</p>
              <h2 className="mt-5 font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                {aboutDoctor.name}
              </h2>
              <p className="mt-4 text-lg text-primary/75">{aboutDoctor.role}</p>

              <RevealGroup as="ul" className="mt-7 flex flex-wrap gap-2.5">
                {aboutDoctor.registrations.map((reg) => (
                  <RevealItem
                    as="li"
                    key={reg}
                    className="rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-sm font-medium text-primary"
                  >
                    {reg}
                  </RevealItem>
                ))}
              </RevealGroup>

              <SectionCta label={aboutDoctor.cta} className="mt-9" />
            </Reveal>
          </div>
        </div>

        {/* Vídeo 1 — apresentação da Dra. Pâmilly */}
        <div className="mx-auto mt-16 max-w-3xl md:mt-20">
          <Reveal className="text-center">
            <p className="kicker kicker--center">{videos.intro.kicker}</p>
            <h3 className="mt-4 text-2xl sm:text-3xl">{videos.intro.title}</h3>
          </Reveal>
          <Reveal delay={100} className="mt-8">
            <VideoBlock
              title={videos.intro.title}
              embedUrl={videos.intro.embedUrl}
              src={videos.intro.src}
              poster={videos.intro.poster}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
