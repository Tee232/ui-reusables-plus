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

type Logo = { name: string; slug: string };

// Grayscale brand marks via Simple Icons CDN (free, no auth, monochrome).
const LOGOS: Logo[] = [
  // Primary Sponsors
  { name: "Google", slug: "google" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Amazon Web Services", slug: "amazonwebservices" },
  { name: "GitHub", slug: "github" },
  // Technology Partners
  { name: "Figma", slug: "figma" },
  { name: "Vercel", slug: "vercel" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "Notion", slug: "notion" },
  // Community Partners
  { name: "GitLab", slug: "gitlab" },
  { name: "Hashnode", slug: "hashnode" },
  { name: "Postman", slug: "postman" },
  { name: "Docker", slug: "docker" },
];

function LogoTrack() {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16">
      {LOGOS.map((l) => (
        <img
          key={l.slug}
          src={`https://cdn.simpleicons.org/${l.slug}/8a8a8a`}
          alt={`${l.name} logo`}
          loading="lazy"
          className="h-10 w-auto max-w-[140px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-110 hover:drop-shadow-md"
        />
      ))}
    </div>
  );
}

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
              <div
                className="rounded-2xl p-8 text-center flex flex-col items-center gap-4 h-full"
                style={{ background: t.gradient }}
              >
                <h3 className="text-lg font-semibold text-heading">{t.name}</h3>
                <p className="text-3xl font-bold text-heading">{t.price}</p>
                <Button variant={t.btn} size="sm" className="mt-2">
                  Become a Sponsor
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div
          className="group relative mt-14 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
          aria-label="Sponsors and partners"
        >
          <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
            <LogoTrack />
            <LogoTrack />
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button variant="brand" size="md">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}
