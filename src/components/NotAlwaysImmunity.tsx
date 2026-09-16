import Reveal from "./Reveal";
import SectionCta from "./SectionCta";
import { notAlwaysImmunity } from "@/config/site";

export default function NotAlwaysImmunity() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <span
        aria-hidden="true"
        className="watermark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[7rem] sm:text-[10rem]"
      >
        imunidade
      </span>

      <div className="wrap relative max-w-3xl text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-salmon/35 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            {notAlwaysImmunity.badge}
          </span>
        </Reveal>

        <Reveal
          as="h2"
          delay={90}
          className="mt-7 text-3xl sm:text-4xl md:text-[2.9rem]"
        >
          {notAlwaysImmunity.headline}
        </Reveal>

        <Reveal delay={180}>
          <SectionCta
            align="center"
            label={notAlwaysImmunity.cta}
            className="mt-10"
          />
        </Reveal>
      </div>
    </section>
  );
}
