import aboutGroup from "@/assets/about-group.jpg";

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-24">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-brand mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            What is TechXplore Summit?
          </h2>
          <span className="block mt-3 h-[3px] w-16 bg-heading rounded-full" />

          <p className="mt-6 text-body leading-relaxed">
            TechXplore Summit is Africa's premier gathering for founders, engineers,
            investors, and creators shaping tomorrow's technology. Across three days,
            you'll experience keynote talks, hands-on workshops, product showcases,
            and curated networking — all designed to accelerate ideas from concept
            to reality.
          </p>
          <p className="mt-4 text-body leading-relaxed">
            Whether you build software, hardware, businesses or communities,
            TechXplore is where the continent's most ambitious minds meet to
            reimagine what's possible.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="relative h-[360px] w-[360px] md:h-[440px] md:w-[440px] rounded-full overflow-hidden ring-4 ring-brand/30 shadow-[var(--shadow-elevated)]">
            <img
              src={aboutGroup}
              alt="Attendees engaging with tech at TechXplore Summit"
              width={900}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -top-2 right-4 text-gold text-2xl">✦</span>
          <span className="absolute bottom-2 -left-2 text-brand text-xl">✦</span>
        </div>
      </div>
    </section>
  );
}
