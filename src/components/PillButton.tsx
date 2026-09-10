import type { ReactNode } from "react";
import { ArrowUpRight } from "./icons";

type Variant = "primary" | "ghost" | "salmon";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
};

export default function PillButton({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  external = false,
}: PillButtonProps) {
  return (
    <a
      href={href}
      className={`pill pill--${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <span className="pill__disc" aria-hidden="true">
        {icon ?? <ArrowUpRight className="h-4 w-4" />}
      </span>
    </a>
  );
}
