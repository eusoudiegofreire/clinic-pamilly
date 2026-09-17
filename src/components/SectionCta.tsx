import PillButton from "./PillButton";
import { WHATSAPP_URL, CTA_EVALUATION } from "@/config/site";

type SectionCtaProps = {
  align?: "start" | "center";
  variant?: "primary" | "salmon" | "ghost";
  label?: string;
  className?: string;
};

export default function SectionCta({
  align = "start",
  variant = "primary",
  label = CTA_EVALUATION,
  className = "",
}: SectionCtaProps) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${
        align === "center" ? "sm:justify-center" : ""
      } ${className}`}
    >
      <PillButton href={WHATSAPP_URL} variant={variant} external>
        {label}
      </PillButton>
    </div>
  );
}
