import Reveal from "./Reveal";
import Monogram from "./Monogram";
import SectionCta from "./SectionCta";
import { finalCta } from "@/config/site";

export default function FinalCta() {
  return (
    <section className="bg-primary-deep py-20 text-white md:py-24">
      <Reveal className="wrap max-w-3xl text-center">
        <Monogram
          tone="white"
          className="mx-auto h-14 w-14 border-white/40 !bg-white/10"
        />
        <h2 className="mt-6 text-3xl text-white sm:text-4xl">{finalCta.title}</h2>
        <SectionCta align="center" variant="salmon" onDark className="mt-9" />
      </Reveal>
    </section>
  );
}
