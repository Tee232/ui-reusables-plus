import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import mascot from "@/assets/faq-mascot.png";

const FAQS = [
  {
    q: "When is the TechXplore Summit 2025?",
    a: "Saturday, 15 November 2025, from 10:00 AM to 6:00 PM WAT.",
  },
  {
    q: "Where and when will there be a future event?",
    a: "The Landmark Event Centre, Victoria Island, Lagos. Future editions will be announced through our newsletter.",
  },
  {
    q: "Who can attend?",
    a: "Students (18+), engineers, founders, investors, and anyone passionate about building the future of technology in Africa.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-section py-20 lg:py-24">
      <div className="container-page grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-heading">
            Have questions?
            <br />
            <span className="text-brand">We have answers</span>
          </h2>
          <img
            src={mascot}
            alt=""
            width={700}
            height={700}
            loading="lazy"
            className="mt-6 mx-auto md:mx-0 h-64 w-auto"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold text-heading mb-6">
            Frequently Asked Questions
          </h3>
          <div className="divide-y divide-border rounded-xl bg-background shadow-[var(--shadow-card)]">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-start gap-4"
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-heading">{f.q}</p>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden text-sm text-body leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                  <span className="mt-1 text-brand shrink-0">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
