import { Check } from "lucide-react";

interface Panel {
  title: string;
  bg: string;
  items: string[];
}

const PANELS: Panel[] = [
  {
    title: "Why Attend?",
    bg: "bg-alert",
    items: [
      "Explore breakthroughs in robotics, AI, fintech, energy, and more",
      "Hear from Africa's boldest tech leaders in an intimate setting",
      "Engage in debates on how to solve the continent's biggest challenges",
      "Learn from industry leaders through keynote speeches and fire-side chats",
      "Win prizes by pitching fresh innovations and ventures",
    ],
  },
  {
    title: "Who Should Attend?",
    bg: "bg-gold",
    items: [
      "Students, engineers, and tech enthusiasts (18+ years)",
      "Founders and creators",
      "Startup founders and entrepreneurs",
      "Tech investors and corporate leaders",
    ],
  },
];

export function WhyWho() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container-page grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {PANELS.map((p) => (
          <article
            key={p.title}
            className={`${p.bg} text-white rounded-3xl p-8 md:p-10 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1`}
          >
            <h3 className="!text-white text-2xl md:text-3xl font-bold">
              {p.title}
            </h3>
            <ul className="mt-6 space-y-4">
              {p.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-white/25 flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm md:text-[15px] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
