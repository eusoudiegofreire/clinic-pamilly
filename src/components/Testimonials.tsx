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
            <RevealItem key={item.id} className="mx-auto w-full max-w-[320px]">
              <figure className="overflow-hidden rounded-card border border-card-border bg-white shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[9/16] bg-warm-beige/60">
                  {item.youtubeId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                      title={item.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-white/92 text-primary shadow-[var(--shadow-soft)] sm:h-16 sm:w-16">
                        <Play className="ml-0.5 h-6 w-6" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/55">
                        Vídeo em breve
                      </span>
                    </span>
                  )}
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
