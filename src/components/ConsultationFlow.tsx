import Reveal from "./Reveal";
import { consultationFlow } from "@/config/site";

export default function ConsultationFlow() {
  return (
    <section id="fluxo" className="bg-off-white py-20 md:py-28">
      <div className="wrap">
        <Reveal
          as="h2"
          className="text-center text-3xl text-primary sm:text-4xl"
        >
          {consultationFlow.title}
        </Reveal>

        <ol className="relative mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* linha visual contínua */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-sage/50 lg:block"
          />
          {consultationFlow.steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 60} className="relative">
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-4xl font-bold text-salmon">
                  {step.n}
                </span>
              </div>
              <p className="mt-2 text-base font-semibold text-primary">
                {step.label}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
