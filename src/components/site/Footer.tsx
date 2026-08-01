export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-hero pt-28 lg:pt-32 pb-24 lg:pb-28">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#d9ffca] via-[#d9ffca]/30 to-transparent blur-3xl opacity-80" />

      <div className="relative text-center select-none pt-16 lg:pt-24">
        <span
          className="block mx-auto font-extrabold text-white/10"
          style={{
            fontSize: "clamp(2.5rem, 15vw, 11rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.06em",
          }}
        >
          TechXplore Summit
        </span>
      </div>
      <div className="relative container-page mt-16 lg:mt-20 text-center">
        <p className="text-white/70 text-sm md:text-base">
          © {new Date().getFullYear()} Vatebra Academy — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
