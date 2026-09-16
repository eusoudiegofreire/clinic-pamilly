import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import SectionCta from "./SectionCta";
import { Play } from "./icons";
import { testimonials } from "@/config/site";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-off-white py-20 md:py-28">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="kicker">{testimonials.kicker}</p>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.5rem]">
            {testimonials.title}
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <RevealItem key={item.id}>
              <figure className="group overflow-hidden rounded-card border border-card-border bg-white shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.poster}
                    alt="Depoimento de família atendida pela Dra. Pâmilly"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-white/92 text-primary shadow-[var(--shadow-soft)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110">
                      <Play className="ml-0.5 h-6 w-6" />
                    </span>
                  </span>
                </div>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={200}>
          <SectionCta label={testimonials.cta} className="mt-12" />
        </Reveal>
      </div>
    </section>
  );
}
