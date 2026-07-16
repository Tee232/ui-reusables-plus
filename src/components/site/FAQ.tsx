import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import mascotAsset from "@/assets/faq-mascot.png.asset.json";

type Category =
  | "General Information"
  | "Registration"
  | "Activities"
  | "Preparation"
  | "Parents & Schools"
  | "Sponsors"
  | "Logistics"
  | "Volunteering";

const CATEGORIES: Category[] = [
  "General Information",
  "Registration",
  "Activities",
  "Preparation",
  "Parents & Schools",
  "Sponsors",
  "Logistics",
  "Volunteering",
];

const FAQS: Record<Category, { q: string; a: string }[]> = {
  "General Information": [
    {
      q: "What is TechXplore Summit 2025?",
      a: "TechXplore Summit is a one-day gathering of students, engineers, founders and investors exploring the future of technology in Africa through keynotes, workshops and networking.",
    },
    {
      q: "When and where will the event take place?",
      a: "Saturday, 15 November 2025, 10:00 AM – 6:00 PM WAT at The Landmark Event Centre, Victoria Island, Lagos.",
    },
    {
      q: "Who can attend?",
      a: "Students (18+), engineers, founders, investors, and anyone passionate about building the future of technology in Africa.",
    },
  ],
  Registration: [
    {
      q: "How do I register for the summit?",
      a: "Registration is available through the Register button in the top navigation. Complete the form and you'll receive a confirmation email.",
    },
    {
      q: "Is there a registration fee?",
      a: "General admission is free. Premium and VIP passes are available for purchase with additional perks.",
    },
  ],
  Activities: [
    {
      q: "What activities are planned?",
      a: "Keynotes, panels, hands-on workshops, a startup showcase and structured networking sessions throughout the day.",
    },
    {
      q: "Will there be workshops?",
      a: "Yes — dedicated workshop tracks cover AI, robotics, FinTech and career development.",
    },
  ],
  Preparation: [
    {
      q: "What should I bring?",
      a: "Bring a valid ID, your registration confirmation, a laptop for workshops, and business cards for networking.",
    },
    {
      q: "Is there a dress code?",
      a: "Smart casual is recommended.",
    },
  ],
  "Parents & Schools": [
    {
      q: "Can schools attend as a group?",
      a: "Yes — group registration is available for schools. Contact us for group rates and logistics support.",
    },
    {
      q: "Is the event suitable for minors?",
      a: "Attendees must be 18+, but supervised student groups can arrange access with prior approval.",
    },
  ],
  Sponsors: [
    {
      q: "How can my company sponsor the event?",
      a: "Visit the sponsorship section on this page or reach out through the contact form for a tailored sponsorship package.",
    },
    {
      q: "What sponsorship tiers are available?",
      a: "Bronze, Silver, Gold and Platinum tiers each with escalating brand visibility and engagement benefits.",
    },
  ],
  Logistics: [
    {
      q: "Is parking available at the venue?",
      a: "Yes, on-site parking is available on a first-come basis. Ride-share drop-off zones are also provided.",
    },
    {
      q: "Will food be provided?",
      a: "Lunch and refreshments are included with every ticket.",
    },
  ],
  Volunteering: [
    {
      q: "How can I volunteer?",
      a: "Sign up through the volunteer form linked in the footer. Volunteers receive a free pass and event swag.",
    },
    {
      q: "What do volunteers do?",
      a: "Volunteers help with check-in, session support, guest coordination and general on-day operations.",
    },
  ],
};

export function FAQ() {
  const [category, setCategory] = useState<Category>("General Information");
  const [open, setOpen] = useState<number | null>(0);

  const items = FAQS[category];

  return (
    <section id="faq" className="bg-background py-20 lg:py-24">
      <div className="grid lg:grid-cols-5 items-stretch">
        {/* Left panel ~40% */}
        <div className="lg:col-span-2 bg-[#F9F9F9] p-8 lg:p-12 xl:p-16 flex flex-col">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading leading-tight">
            Got Questions?
            <br />
            <span className="text-brand">We've Got Answers</span>
          </h2>
          <p className="mt-4 text-body text-sm md:text-base leading-relaxed max-w-md">
            Everything you need to know about TechXplore Summit — from registration to logistics.
          </p>
          <div className="mt-8 lg:mt-auto lg:pt-8 flex justify-center flex-1 items-end">
            <img
              src={mascotAsset.url}
              alt=""
              loading="lazy"
              className="h-64 sm:h-80 md:h-96 lg:h-[420px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Right panel ~60% */}
        <div className="lg:col-span-3 bg-white p-6 md:p-8 lg:p-12 xl:p-16">
          <h3 className="text-xl md:text-2xl font-bold text-heading mb-6">
            Frequently Asked Questions
          </h3>

          {/* Category tabs */}
          <div className="border-b border-border overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {CATEGORIES.map((c) => {
                const active = c === category;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setCategory(c);
                      setOpen(0);
                    }}
                    className={`relative pb-3 text-sm whitespace-nowrap transition-colors ${
                      active
                        ? "text-heading font-semibold"
                        : "text-body/70 hover:text-heading"
                    }`}
                  >
                    {c}
                    {active && (
                      <span className="absolute left-0 right-0 -bottom-px h-[3px] rounded-full bg-brand" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-border">
            {items.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-5 flex items-start gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm md:text-base font-semibold text-heading">
                      {f.q}
                    </p>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden text-sm text-body leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                  <span className="mt-1 text-heading shrink-0">
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
