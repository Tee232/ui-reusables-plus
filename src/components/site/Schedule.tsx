import { useState } from "react";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";
import bgLight from "@/assets/schedule-bg-light.png.asset.json";
import bgDark from "@/assets/schedule-bg-dark.png.asset.json";
import { SectionHeading } from "./SectionHeading";

interface Item {
  time: string;
  title: string;
  subtitle: string;
  image: string;
}

const ITEMS: Item[] = [
  { time: "Session 1", title: "Registration & Networking", subtitle: "Coffee & Introductions", image: speaker1 },
  { time: "Session 2", title: "Lunch Break & Networking", subtitle: "Refresh, Reconnect", image: speaker2 },
  { time: "Session 3", title: "Opening Keynote: The Future of AI in Africa", subtitle: "By our headline speaker", image: speaker3 },
  { time: "Session 4", title: "Strategic Roundtable: FinTech's Next Wave", subtitle: "Panel discussion", image: speaker4 },
  { time: "Session 5", title: "Robotics & Innovation: The Next Frontier", subtitle: "Live demonstrations", image: speaker1 },
  { time: "Session 6", title: "Tech Careers of the Future — Reinvent Your Path", subtitle: "For students & switchers", image: speaker3 },
  { time: "Session 7", title: "Workshop: Building Your First AI Product", subtitle: "Hands-on session", image: speaker2 },
  { time: "Session 8", title: "Closing Keynote & Awards", subtitle: "Celebrate builders", image: speaker4 },
];

export function Schedule() {
  const [hover, setHover] = useState(false);

  return (
    <section
      id="schedule"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative py-20 lg:py-24 transition-colors duration-500 bg-cover bg-center"
      style={{
        backgroundColor: hover ? "var(--hero)" : "var(--brand)",
        backgroundImage: `url(${hover ? bgDark.url : bgLight.url})`,
      }}
    >
      <div className="container-page relative">
        <SectionHeading
          tone="dark"
          title="Event Schedule"
          subtitle="Explore our full-day programme packed with insight, innovation, and inspiration"
        />

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {ITEMS.map((it) => (
            <article
              key={it.title}
              className="flex gap-4 rounded-xl p-3 pr-5 transition-colors backdrop-blur-sm"
              style={{
                backgroundColor: hover
                  ? "rgba(255,255,255,0.30)"
                  : "rgba(255,255,255,0.40)",
              }}
            >
              <img
                src={it.image}
                alt=""
                width={600}
                height={600}
                loading="lazy"
                className="h-24 w-32 rounded-lg object-cover shrink-0"
              />
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-white/80">
                  {it.time}
                </p>
                <h3 className="mt-1 !text-white text-sm md:text-base font-semibold leading-snug">
                  {it.title}
                </h3>
                <p className="mt-1 text-xs text-white/85">{it.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
