import Reveal from "./Reveal";
import { notAlwaysImmunity } from "@/config/site";

export default function NotAlwaysImmunity() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="wrap max-w-3xl text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-salmon/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {notAlwaysImmunity.badge}
          </span>
        </Reveal>

        <Reveal
          as="h2"
          delay={90}
          className="mt-6 text-balance text-3xl text-primary sm:text-4xl md:text-[2.75rem]"
        >
          {notAlwaysImmunity.headline}
        </Reveal>
      </div>
    </section>
  );
}
