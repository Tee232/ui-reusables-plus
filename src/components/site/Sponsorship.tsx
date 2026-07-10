import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

type Tier = {
  name: string;
  price: string;
  gradient: string;
  ring: string;
  btn: "brand" | "gold";
};

const TIERS: Tier[] = [
  {
    name: "Platinum Tier",
    price: "₦10,000,000",
    gradient: "linear-gradient(135deg,#e6e6e6 0%,#b8b8b8 50%,#e6e6e6 100%)",
    ring: "ring-neutral-300",
    btn: "brand",
  },
  {
    name: "Gold Tier",
    price: "₦5,000,000",
    gradient: "linear-gradient(135deg,#f6d365 0%,#c99a1f 50%,#f6d365 100%)",
    ring: "ring-gold/40",
    btn: "brand",
  },
  {
    name: "Silver Tier",
    price: "₦1,000,000",
    gradient: "linear-gradient(135deg,#d9d9d9 0%,#a3a3a3 50%,#d9d9d9 100%)",
    ring: "ring-neutral-300",
    btn: "brand",
  },
];

const LOGOS = ["tv", "NETFLIX", "S&P", "SCOTIABANK", "Capital One", "BARCLAYS"];

export function Sponsorship() {
  return (
    <section className="bg-section py-20 lg:py-24">
      <div className="container-page">
        <SectionHeading title="Sponsorship & Partnership" />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`group rounded-2xl p-[2px] ring-1 ${t.ring} shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-300`}
              style={{ background: t.gradient }}
            >
              <div className="rounded-2xl p-8 text-center flex flex-col items-center gap-4 h-full"
                   style={{ background: t.gradient }}>
                <h3 className="text-lg font-semibold text-heading">{t.name}</h3>
                <p className="text-3xl font-bold text-heading">{t.price}</p>
                <Button variant={t.btn} size="sm" className="mt-2">
                  Become a Sponsor
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {LOGOS.map((l) => (
            <span
              key={l}
              className="text-heading text-lg font-semibold tracking-wider"
            >
              {l}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="brand" size="md">Become a Sponsor</Button>
        </div>
      </div>
    </section>
  );
}
