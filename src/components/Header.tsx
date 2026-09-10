import Image from "next/image";
import CtaButton from "./CtaButton";
import { CHECKOUT_URL, siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border/70 bg-white/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/logo-life-clinic.png"
            alt={siteConfig.name}
            width={132}
            height={44}
            priority
            className="h-9 w-auto"
          />
        </a>
        <div className="hidden sm:block">
          <CtaButton
            href={CHECKOUT_URL}
            variant="secondary"
            className="px-5 py-2.5 text-xs"
          >
            Avaliar imunidade
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
