import PillButton from "./PillButton";
import { WhatsApp } from "./icons";
import { WHATSAPP_URL, CTA_EVALUATION, CTA_WHATSAPP } from "@/config/site";

type SectionCtaProps = {
  align?: "start" | "center";
  variant?: "primary" | "salmon" | "ghost";
  label?: string;
  className?: string;
  onDark?: boolean;
};

export default function SectionCta({
  align = "start",
  variant = "primary",
  label = CTA_EVALUATION,
  className = "",
  onDark = false,
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
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`wa-link ${
          onDark ? "!text-white/80 hover:!text-white" : ""
        }`}
      >
        <WhatsApp className="h-4 w-4" />
        {CTA_WHATSAPP}
      </a>
    </div>
  );
}
