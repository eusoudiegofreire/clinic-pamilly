"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import PillButton from "./PillButton";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import Monogram from "./Monogram";
import ParallaxY from "./ParallaxY";
import { Check, WhatsApp } from "./icons";
import { offer, whatsappUrl, CTA_WHATSAPP } from "@/config/site";

export default function Offer() {
  const reduce = useReducedMotion();

  return (
    <section id="oferta" className="bg-primary py-20 text-white md:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <p className="kicker !text-white/65">{offer.kicker}</p>

          <h2 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl">
            {offer.title}
          </h2>

          <motion.p
            className="mt-6 font-heading text-6xl font-extrabold text-salmon sm:text-7xl"
            initial={reduce ? false : { opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
          >
            {offer.price}
          </motion.p>

          <RevealGroup as="ul" className="mt-9 grid gap-3.5 sm:grid-cols-2">
            {offer.items.map((item) => (
              <RevealItem as="li" key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-salmon/25 text-salmon">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-white/90">{item}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PillButton href={whatsappUrl()} variant="salmon" external>
              {offer.cta}
            </PillButton>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-link !text-white/80 hover:!text-white"
            >
              <WhatsApp className="h-4 w-4" />
              {CTA_WHATSAPP}
            </a>
          </div>
        </Reveal>

        {/* Foto */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-[360px]">
          <ParallaxY distance={32} className="arch relative shadow-[var(--shadow-lift)]">
            <Image
              src="/images/pamilly-oferta.jpg"
              alt="Dra. Pâmilly"
              width={620}
              height={780}
              sizes="(max-width: 1024px) 70vw, 340px"
              className="h-full w-full object-cover"
            />
          </ParallaxY>
          <Monogram
            tone="white"
            className="absolute -right-4 top-6 h-14 w-14 border-white/50 !bg-primary-deep"
          />
        </Reveal>
      </div>
    </section>
  );
}
