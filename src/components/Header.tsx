import Monogram from "./Monogram";
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
  return (
    <div className="sticky top-0 z-40">
      {/* Faixa fina superior */}
      <div className="bg-primary-deep text-center text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/85">
        <p className="wrap py-2">{topStrip}</p>
      </div>

      {/* Barra principal */}
      <header className="border-b border-card-border/70 bg-cream/85 backdrop-blur-md">
        <div className="wrap flex h-[4.25rem] items-center justify-between gap-6">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label={`${siteConfig.doctor} — início`}
          >
            <Monogram className="h-10 w-10 text-sm" />
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
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary/70 transition-colors hover:text-primary"
              >
                {item.label}
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
