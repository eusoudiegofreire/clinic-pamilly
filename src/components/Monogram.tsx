import { siteConfig } from "@/config/site";

export default function Monogram({ className = "" }: { className?: string }) {
  return (
    <span className={`monogram ${className}`} aria-hidden="true">
      {siteConfig.initials}
    </span>
  );
}
