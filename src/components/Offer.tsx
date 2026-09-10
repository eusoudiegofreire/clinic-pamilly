import { Check } from "lucide-react";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { offer, CHECKOUT_URL } from "@/config/site";

export default function Offer() {
  return (
    <section id="oferta" className="bg-white py-20 md:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl overflow-hidden rounded-card bg-primary px-7 py-12 text-white shadow-[var(--shadow-lift)] sm:px-12">
          <p className="font-heading text-2xl font-bold sm:text-3xl">
            {offer.title}
          </p>

          <p className="mt-4 font-heading text-5xl font-bold text-salmon sm:text-6xl">
            {offer.price}
          </p>

          <ul className="mt-8 space-y-3.5">
            {offer.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-salmon"
                  aria-hidden="true"
                />
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <CtaButton href={CHECKOUT_URL} variant="salmon" className="w-full sm:w-auto">
              {offer.cta}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
