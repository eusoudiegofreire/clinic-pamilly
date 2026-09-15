"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Monogram from "./Monogram";
import PillButton from "./PillButton";
import { WhatsApp } from "./icons";
import { hero, siteConfig, whatsappUrl, CTA_WHATSAPP } from "@/config/site";

const SPRING = { type: "spring", stiffness: 90, damping: 20, mass: 0.9 } as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: SPRING },
};

const photo: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 70, damping: 18, delay: 0.15 },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="wrap grid items-center gap-14 py-14 md:grid-cols-[1.02fr_0.98fr] md:py-20">
        {/* Texto */}
        <motion.div
          className="max-w-xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="kicker" variants={item}>
            {hero.tag}
          </motion.p>

          <motion.h1
            className="mt-6 text-[2.6rem] leading-[1.12] sm:text-5xl sm:leading-[1.1] md:text-[3.55rem]"
            variants={item}
          >
            {hero.headlineLead}{" "}
            <span className="relative inline-block">
              {hero.headlineAccent}
              <svg
                aria-hidden="true"
                viewBox="0 0 120 12"
                preserveAspectRatio="none"
                className="absolute -bottom-0.5 left-0 h-1.5 w-full text-salmon"
              >
                <motion.path
                  d="M4 7C24 3 50 3 64 5s40 3 52 1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                />
              </svg>
            </span>
            {hero.headlineRest}
          </motion.h1>

          <motion.p className="mt-7 text-lg text-primary/75" variants={item}>
            {hero.text}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            variants={item}
          >
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
          </motion.div>

          <motion.p
            className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-primary/50"
            variants={item}
          >
            {hero.meta}
          </motion.p>
        </motion.div>

        {/* Foto */}
        <motion.div
          className="relative mx-auto w-full max-w-[420px]"
          variants={photo}
          initial="hidden"
          animate="visible"
        >
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

          <Monogram className="absolute -left-5 top-8 h-16 w-16 shadow-[var(--shadow-soft)]" />

          <motion.div
            className="absolute -bottom-6 right-2 w-max max-w-[15rem] rounded-2xl border border-card-border bg-white/95 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.55 }}
          >
            <p className="text-sm font-semibold text-primary">{hero.card.role}</p>
            <p className="mt-0.5 text-xs font-medium text-primary/55">
              {hero.card.reg}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
