import Image from "next/image";
import Reveal from "./Reveal";
import { aboutDoctor, siteConfig } from "@/config/site";

export default function AboutDoctor() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-warm-beige py-20 md:py-28">
      <div className="wrap grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative">
          <div
            className="blob -left-10 -top-10 h-56 w-56 bg-salmon/50"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-card shadow-[var(--shadow-lift)]">
            <Image
              src="/images/pamilly-sobre.jpg"
              alt={`${siteConfig.doctor}`}
              width={640}
              height={760}
              sizes="(max-width: 768px) 90vw, 400px"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">
            {aboutDoctor.title}
          </h2>
          <p className="mt-3 font-heading text-3xl font-bold text-primary sm:text-4xl">
            {aboutDoctor.name}
          </p>
          <p className="mt-3 text-lg text-primary/80">{aboutDoctor.role}</p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {aboutDoctor.registrations.map((reg) => (
              <li
                key={reg}
                className="rounded-full border border-primary/20 bg-white/70 px-3.5 py-1.5 text-sm font-medium text-primary"
              >
                {reg}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
