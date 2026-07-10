import {
  MessageSquare,
  Cpu,
  Rocket,
  Coffee,
  Mic,
  Network,
  Layers,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  {
    icon: MessageSquare,
    color: "text-brand",
    title: "Debates",
    desc: "Engage in thought-provoking debates on today's biggest tech questions.",
  },
  {
    icon: Cpu,
    color: "text-alert",
    title: "Robotics Competition (Technology Displays)",
    desc: "Showcase your innovation and compete with top African engineers for exciting prizes.",
  },
  {
    icon: Rocket,
    color: "text-alert",
    title: "Business Creation Competition",
    desc: "Pitch your startup, meet investors, and win seed funding to grow your idea.",
  },
  {
    icon: Coffee,
    color: "text-brand",
    title: "Fire-Side Chat",
    desc: "Intimate, candid conversations with leading founders and industry executives.",
  },
  {
    icon: Mic,
    color: "text-alert",
    title: "Keynote Speeches",
    desc: "Hear insights from thought leaders shaping the future of technology across Africa.",
  },
  {
    icon: Network,
    color: "text-brand",
    title: "Networking Opportunities",
    desc: "Connect with peers, mentors, and future collaborators in a curated setting.",
  },
  {
    icon: Layers,
    color: "text-alert",
    title: "Exhibition Zone",
    desc: "Explore the latest products, services and prototypes from Africa's boldest builders.",
  },
];

export function EventHighlights() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container-page">
        <SectionHeading title="Event Highlights" />

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className={`shrink-0 mt-1 ${item.color}`}>
                <item.icon size={26} strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
