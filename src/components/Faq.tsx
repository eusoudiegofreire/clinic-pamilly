"use client";

import { useState } from "react";
import { Plus } from "./icons";
import { faq } from "@/config/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="kicker">{faq.kicker}</p>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[2.5rem]">
            {faq.title}
          </h2>
        </div>

        <div className="mt-11 grid gap-4 md:grid-cols-2">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                data-open={isOpen}
                className="acc-item h-max rounded-card border border-card-border bg-white transition-colors data-[open=true]:bg-off-white"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="font-heading text-base font-bold text-primary">
                      {item.q}
                    </span>
                    <span className="acc-chevron grid h-8 w-8 shrink-0 place-items-center rounded-full bg-salmon/30 text-primary">
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div className="acc-panel">
                  <div>
                    <p className="px-5 pb-5 text-primary/75">{item.a}</p>
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
