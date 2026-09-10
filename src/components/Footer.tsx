import Image from "next/image";
import { footer } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-primary py-14 text-white">
      <div className="wrap grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Image
            src="/images/logo-life-clinic-branca.png"
            alt={footer.clinic}
            width={140}
            height={48}
            className="h-11 w-auto"
          />
          <p className="mt-5 font-heading text-lg font-semibold">
            {footer.doctor}
          </p>
          <p className="text-white/80">{footer.role}</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/70">
            {footer.registrations.map((reg) => (
              <li key={reg}>{reg}</li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-white/70 sm:text-right">
          <p>{footer.note}</p>
          <p className="mt-3">
            © {new Date().getFullYear()} {footer.clinic}
          </p>
        </div>
      </div>
    </footer>
  );
}
