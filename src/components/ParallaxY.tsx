"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type ParallaxYProps = {
  children: ReactNode;
  className?: string;
  /** deslocamento total em px ao longo da passagem pela viewport (padrão 40) */
  distance?: number;
};

/**
 * Parallax vertical sutil, ligado ao scroll. Desativado sob
 * prefers-reduced-motion (parallax é gatilho vestibular).
 */
export default function ParallaxY({
  children,
  className = "",
  distance = 40,
}: ParallaxYProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [distance / 2, -distance / 2]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
