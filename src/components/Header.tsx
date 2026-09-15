"use client";

import { useState } from "react";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import PillButton from "./PillButton";
import { WhatsApp } from "./icons";
import {
  nav,
  topStrip,
  siteConfig,
  whatsappUrl,
  CTA_WHATSAPP,
} from "@/config/site";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 80;
    if (next !== scrolled) setScrolled(next);
  });

  return (
    <div className="sticky top-0 z-40">
      {/* Faixa fina superior — recolhe ao rolar */}
      <div
        data-scrolled={scrolled}
        className="overflow-hidden bg-primary-deep text-center text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/85 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] data-[scrolled=true]:max-h-0 data-[scrolled=true]:opacity-0 max-h-10 opacity-100"
      >
        <p className="wrap py-2">{topStrip}</p>
      </div>

      {/* Barra principal */}
      <header
        data-scrolled={scrolled}
        className="group border-b border-card-border/70 bg-cream/85 backdrop-blur-md transition-shadow duration-300 data-[scrolled=true]:shadow-[var(--shadow-soft)]"
      >
        <div className="wrap flex items-center justify-between gap-6 py-3.5 transition-[padding] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[scrolled=true]:py-2">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label={`${siteConfig.doctor} — início`}
          >
            <Image
              src="/images/logo-life-clinic.png"
              alt={siteConfig.name}
              width={140}
              height={104}
              priority
              className="h-10 w-auto"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block font-heading text-sm font-bold text-primary">
                {siteConfig.doctor}
              </span>
              <span className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-primary/55">
                {siteConfig.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-primary/70 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <PillButton
            href={whatsappUrl()}
            variant="ghost"
            external
            icon={<WhatsApp className="h-4 w-4" />}
            className="pill--compact"
          >
            <span className="hidden sm:inline">{CTA_WHATSAPP}</span>
            <span className="sm:hidden">WhatsApp</span>
          </PillButton>
        </div>
      </header>
    </div>
  );
}
