import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** empurra o início da animação (ms aproximados -> offset no range) para escalonar itens */
  delay?: number;
};

/**
 * Wrapper de reveal on scroll. A animação é 100% CSS (ver globals.css):
 * o conteúdo é visível por padrão e só anima onde há suporte a
 * scroll-driven animations. Sem JS, sem flash, sem risco de sumir.
 */
export default function Reveal({
  children,
  as,
  className = "",
  delay = 0,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const style =
    delay > 0
      ? ({
          animationRange: `entry ${Math.min(2 + delay / 40, 14)}% cover 30%`,
        } as CSSProperties)
      : undefined;

  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
