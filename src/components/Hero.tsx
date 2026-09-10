import Image from "next/image";
import Monogram from "./Monogram";
import PillButton from "./PillButton";
import { WhatsApp } from "./icons";
import {
  hero,
  siteConfig,
  whatsappUrl,
  CTA_WHATSAPP,
} from "@/config/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="wrap grid items-center gap-14 py-14 md:grid-cols-[1.02fr_0.98fr] md:py-20">
        {/* Texto */}
        <div className="reveal max-w-xl">
          <p className="kicker">{hero.tag}</p>

          <h1 className="mt-6 text-[2.6rem] leading-[1.12] sm:text-5xl sm:leading-[1.1] md:text-[3.55rem]">
            {hero.headlineLead}{" "}
            <span className="relative inline-block">
              {hero.headlineAccent}
              <svg
                aria-hidden="true"
                viewBox="0 0 120 12"
                preserveAspectRatio="none"
                className="absolute -bottom-0.5 left-0 h-1.5 w-full text-salmon"
              >
                <path
                  d="M4 7C24 3 50 3 64 5s40 3 52 1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {hero.headlineRest}
          </h1>

          <p className="mt-7 text-lg text-primary/75">{hero.text}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PillButton href={whatsappUrl()} external>
              {hero.cta}
            </PillButton>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-link"
            >
              <WhatsApp className="h-4 w-4" />
              {CTA_WHATSAPP}
            </a>
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-primary/50">
            {hero.meta}
          </p>
        </div>

        {/* Foto */}
        <div className="reveal relative mx-auto w-full max-w-[420px]">
          <div
            className="blob -right-12 -top-10 h-64 w-64 bg-warm-beige"
            aria-hidden="true"
          />
          <div
            className="blob -bottom-10 -left-10 h-28 w-28 bg-salmon/60"
            aria-hidden="true"
          />

          <div className="arch relative shadow-[var(--shadow-lift)]">
            <Image
              src="/images/pamilly-hero.jpg"
              alt={`${siteConfig.doctor}, ${siteConfig.role}`}
              width={760}
              height={950}
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Monograma */}
          <Monogram className="absolute -left-5 top-8 h-16 w-16 text-lg shadow-[var(--shadow-soft)]" />

          {/* Card de credencial flutuante */}
          <div className="absolute -bottom-6 right-2 w-max max-w-[15rem] rounded-2xl border border-card-border bg-white/95 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-sm">
            <p className="text-sm font-semibold text-primary">
              {hero.card.role}
            </p>
            <p className="mt-0.5 text-xs font-medium text-primary/55">
              {hero.card.reg}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
