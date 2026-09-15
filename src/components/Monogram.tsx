import Image from "next/image";
import { siteConfig } from "@/config/site";

type MonogramProps = {
  className?: string;
  /** cor do símbolo — "petrol" para fundos claros, "white" para fundos escuros */
  tone?: "petrol" | "white";
};

/** Círculo de marca com o símbolo da Life Clinic (o "l" de life, recortado do logo). */
export default function Monogram({ className = "", tone = "petrol" }: MonogramProps) {
  return (
    <span className={`monogram ${className}`}>
      <Image
        src={tone === "white" ? "/images/mark-white.png" : "/images/mark-petrol.png"}
        alt={`Símbolo ${siteConfig.name}`}
        width={200}
        height={330}
        className="h-[55%] w-auto"
      />
    </span>
  );
}
