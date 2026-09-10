import { whatsappUrl } from "@/config/site";
import { WhatsApp } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-white shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
}
