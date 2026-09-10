import Image from "next/image";
import { Play } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/config/site";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 md:py-28">
      <div className="wrap">
        <Reveal
          as="h2"
          className="mx-auto max-w-2xl text-center text-3xl text-primary sm:text-4xl"
        >
          {testimonials.title}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 90}>
              <figure className="overflow-hidden rounded-card border border-card-border bg-off-white shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={item.poster}
                    alt="Depoimento de família atendida pela Dra. Pâmilly"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-primary shadow-[var(--shadow-soft)]">
                      <Play className="ml-0.5 h-6 w-6 fill-current" />
                    </span>
                  </span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
