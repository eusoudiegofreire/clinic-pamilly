import Image from "next/image";
import { WhatsApp } from "./icons";
import { footer, WHATSAPP_URL } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-primary py-16 text-white">
      <div className="wrap grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Image
            src="/images/logo-life-clinic-branca.png"
            alt={footer.clinic}
            width={150}
            height={52}
            className="h-12 w-auto"
          />
          <p className="mt-6 font-heading text-lg font-bold">{footer.doctor}</p>
          <p className="text-white/80">{footer.role}</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/65">
            {footer.registrations.map((reg) => (
              <li key={reg}>{reg}</li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-white/70 sm:text-right">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-white transition-opacity hover:opacity-80"
          >
            <WhatsApp className="h-4 w-4" />
            Falar no WhatsApp
          </a>
          <p className="mt-3">{footer.note}</p>
          <p className="mt-3">
            © {new Date().getFullYear()} {footer.clinic}
          </p>
        </div>
      </div>
    </footer>
  );
}
