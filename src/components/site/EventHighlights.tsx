import {
  MessageSquare,
  Cpu,
  Rocket,
  Coffee,
  Mic,
  Network,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Tone = "green" | "red" | "gold";

interface Item {
  icon: LucideIcon;
  tone: Tone;
  title: string;
  desc: string;
}

const TONES: Record<Tone, { card: string; icon: string }> = {
  green: { card: "bg-brand/10", icon: "text-brand" },
  red: { card: "bg-alert/10", icon: "text-alert" },
  gold: { card: "bg-gold/10", icon: "text-gold" },
};

const ITEMS: Item[] = [
  {
    icon: MessageSquare,
    tone: "green",
    title: "Debates",
    desc: "Engage in thought-provoking debates on today's biggest tech questions.",
  },
  {
    icon: Cpu,
    tone: "red",
    title: "Robotics Competition",
    desc: "Showcase your innovation and compete with top African engineers for exciting prizes.",
  },
  {
    icon: Rocket,
    tone: "gold",
    title: "Business Creation Competition",
    desc: "Pitch your startup, meet investors, and win seed funding to grow your idea.",
  },
  {
    icon: Coffee,
    tone: "green",
    title: "Fire-Side Chat",
    desc: "Intimate, candid conversations with leading founders and industry executives.",
  },
  {
    icon: Mic,
    tone: "red",
    title: "Keynote Speeches",
    desc: "Hear insights from thought leaders shaping the future of technology across Africa.",
  },
  {
    icon: Network,
    tone: "gold",
    title: "Networking Opportunities",
    desc: "Connect with peers, mentors, and future collaborators in a curated setting.",
  },
  {
    icon: Layers,
    tone: "green",
    title: "Exhibition Zone",
    desc: "Explore the latest products, services and prototypes from Africa's boldest builders.",
  },
];

export function EventHighlights() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container-page">
        <SectionHeading title="Event Highlights" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ITEMS.map((item) => {
            const tone = TONES[item.tone];
            return (
              <article
                key={item.title}
                className={`${tone.card} rounded-2xl p-6 md:p-7 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 shadow-[var(--shadow-card)]`}
              >
                <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <item.icon size={22} strokeWidth={2.2} className={tone.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-heading leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-body leading-relaxed">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
