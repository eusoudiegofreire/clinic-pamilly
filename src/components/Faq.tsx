"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/config/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="wrap max-w-3xl">
        <h2 className="text-center text-3xl text-primary sm:text-4xl">
          {faq.title}
        </h2>

        <div className="mt-10 space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                data-open={isOpen}
                className="acc-item overflow-hidden rounded-card border border-card-border bg-white data-[open=true]:bg-off-white"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-heading text-base font-semibold text-primary">
                      {item.q}
                    </span>
                    <ChevronDown
                      className="acc-chevron h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="acc-panel">
                  <div>
                    <p className="px-5 pb-5 text-primary/80">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
