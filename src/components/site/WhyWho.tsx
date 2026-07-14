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
      "Exhibit their projects in robotics, AI, renewable energy, and more",
      "Pitch business ideas to judges in a competitive startup challenge",
      "Engage in debates on hot topics like AI's impact on jobs and the digital divide",
      "Learn from industry leaders through keynote speeches and fireside chats.",
      "Win prizes to fund their innovations and ventures",
    ],
  },
  {
    title: "Who Should Attend?",
    bg: "bg-gold",
    items: [
      "Students & Young Tech Enthusiasts (13-19 years)",
      "Developers & Engineers",
      "Startup Founders & Entrepreneurs",
      "Tech Investors & Corporate Leaders",
    ],
  },
];

export function WhyWho() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: "#F1F2F0", height: "180vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-[var(--shadow-card)] p-4 sm:p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {PANELS.map((p) => (
              <article
                key={p.title}
                className={`${p.bg} text-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 min-h-[420px] md:min-h-[520px] flex flex-col`}
              >
                <h3 className="!text-white text-2xl md:text-4xl font-bold leading-tight">
                  {p.title}
                </h3>
                <ul className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-3 md:gap-4">
                      <span className="mt-2 shrink-0 h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-white" />
                      <span className="text-sm md:text-lg leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
