import Image from "next/image";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { hero, CHECKOUT_URL, siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="wrap grid items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        {/* Coluna de texto */}
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            {hero.tag}
          </p>

          <h1 className="mt-5 text-4xl text-primary sm:text-5xl md:text-[3.35rem]">
            Seu filho vive{" "}
            <span className="relative inline-block">
              doente
              <svg
                aria-hidden="true"
                viewBox="0 0 120 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-2 w-full text-salmon"
              >
                <path
                  d="M3 8C22 3 46 3 62 6s40 3 55 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            ? {hero.headlineRest}
          </h1>

          <p className="mt-6 text-lg text-primary/80">{hero.text}</p>

          <div className="mt-8">
            <CtaButton href={CHECKOUT_URL}>{hero.cta}</CtaButton>
          </div>

          <p className="mt-4 text-sm font-medium text-primary/60">{hero.meta}</p>
        </Reveal>

        {/* Coluna da foto */}
        <Reveal delay={120} className="relative">
          <div
            className="blob -right-10 -top-10 h-72 w-72 bg-warm-beige"
            aria-hidden="true"
          />
          <div
            className="blob -bottom-8 -left-6 h-28 w-28 bg-salmon/70"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-card shadow-[var(--shadow-lift)]">
            <Image
              src="/images/pamilly-hero.jpg"
              alt={`${siteConfig.doctor}, ${siteConfig.role}`}
              width={720}
              height={860}
              priority
              sizes="(max-width: 768px) 90vw, 440px"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
