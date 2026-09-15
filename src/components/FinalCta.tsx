import Reveal from "./Reveal";
import SectionCta from "./SectionCta";
import { finalCta } from "@/config/site";

export default function FinalCta() {
  return (
    <section className="bg-primary-deep py-20 text-white md:py-24">
      <Reveal className="wrap max-w-3xl text-center">
        <h2 className="text-3xl text-white sm:text-4xl">{finalCta.title}</h2>
        <SectionCta align="center" variant="salmon" onDark className="mt-9" />
      </Reveal>
    </section>
  );
}
