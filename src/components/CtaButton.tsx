import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "salmon";

const base =
  "btn-press btn-magnet inline-flex items-center justify-center gap-2 rounded-button px-7 py-4 text-center text-sm font-semibold uppercase tracking-wide leading-tight min-h-12";

const variants: Record<Variant, string> = {
  // CTA principal — fundo petróleo, texto branco
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-[var(--shadow-soft)]",
  // CTA secundário — fundo branco, borda petróleo
  secondary:
    "border border-primary bg-white text-primary hover:bg-off-white",
  // CTA sobre fundo escuro — fundo salmão, texto petróleo
  salmon: "bg-salmon text-primary hover:brightness-[0.97]",
};

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
