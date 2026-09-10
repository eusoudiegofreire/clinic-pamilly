"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

const SPRING = { type: "spring", stiffness: 100, damping: 20, mass: 0.9 } as const;

/** Enter recipe (Jakub): opacity + translateY + blur, spring, bounce 0. */
const revealVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING, delay: delay / 1000 },
  }),
};

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
};

type Tag = "div" | "section" | "h2" | "h3" | "p" | "ul" | "ol" | "li" | "figure";

type BaseProps = Omit<
  ComponentProps<typeof motion.div>,
  "children" | "variants" | "custom"
>;

type RevealProps = BaseProps & {
  children: ReactNode;
  as?: Tag;
  className?: string;
  /** atraso individual em ms (quando fora de um RevealGroup) */
  delay?: number;
};

/** Revela um bloco ao entrar na viewport. Visível por padrão sem JS (ver <noscript> no layout). */
export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  ...rest
}: RevealProps) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      data-reveal
      className={className}
      variants={revealVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      {...rest}
    >
      {children}
    </M>
  );
}

/** Container que escalona os RevealItem filhos. */
export function RevealGroup({
  children,
  as = "div",
  className = "",
  ...rest
}: Omit<RevealProps, "delay">) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      data-reveal
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      {...rest}
    >
      {children}
    </M>
  );
}

/** Filho de um RevealGroup. */
export function RevealItem({
  children,
  as = "div",
  className = "",
  ...rest
}: Omit<RevealProps, "delay">) {
  const M = motion[as] as typeof motion.div;
  return (
    <M data-reveal className={className} variants={revealVariants} {...rest}>
      {children}
    </M>
  );
}
