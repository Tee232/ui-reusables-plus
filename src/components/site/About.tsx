import aboutGroup from "@/assets/about-group.jpg";
import wavePattern from "@/assets/wave-pattern.png.asset.json";

export function About() {
  return (
    <section
      id="about"
      className="sticky top-0 z-0 relative bg-white py-20 lg:py-24 overflow-hidden"
    >
      <img
        src={wavePattern.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 select-none"
      />
      <div className="relative container-page grid gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-10 md:px-8 lg:gap-12 lg:px-0 items-center">
        <div className="w-full">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-brand mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            What is TechXplore Summit?
          </h2>
          <span className="block mt-3 h-[3px] w-16 bg-heading rounded-full" />

          <p className="mt-6 text-body leading-relaxed">
            TechXplore Summit is Africa's premier gathering for founders, engineers, investors, and
            creators shaping tomorrow's technology. Across three days, you'll experience keynote
            talks, hands-on workshops, product showcases, and curated networking — all designed to
            accelerate ideas from concept to reality.
          </p>
          <p className="mt-4 text-body leading-relaxed">
            Whether you build software, hardware, businesses or communities, TechXplore is where the
            continent's most ambitious minds meet to reimagine what's possible.
          </p>
        </div>

        <div className="relative mt-2 flex w-full justify-center sm:mt-0 md:justify-center">
          <div className="relative aspect-square w-[280px] max-w-full rounded-full overflow-hidden ring-4 ring-brand/30 shadow-[var(--shadow-elevated)] sm:w-[320px] md:w-[360px] lg:w-[440px]">
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
