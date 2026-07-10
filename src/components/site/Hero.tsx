import heroVr from "@/assets/hero-vr.jpg";
import { Button } from "./Button";
import { Calendar, MapPin, Users } from "lucide-react";

const META = [
  {
    icon: Calendar,
    label: "Date & Time",
    value: "Sat, 15 November 2025\n10:00 AM – 6:00 PM WAT",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Landmark Event Centre\nVictoria Island, Lagos",
  },
  {
    icon: Users,
    label: "Attendance",
    value: "2,000+ delegates\nFrom across Africa",
  },
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] !text-white">
              Unleash the Future of
              <br />
              Tech at <span className="text-brand">TechXplore</span>
              <br />
              Summit 2025
            </h1>

            <div className="mt-6">
              <Button variant="brand" size="lg">Register</Button>
            </div>

            <p className="mt-8 max-w-lg text-white/80 leading-relaxed">
              Join us for 3 days of insight, innovation and unstoppable ambition —
              the continent's biggest gathering for tech's next chapter.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {META.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-white/15 bg-white/5 backdrop-blur p-4"
                >
                  <div className="flex items-center gap-2 text-brand">
                    <m.icon size={16} />
                    <span className="text-[11px] uppercase tracking-wider font-semibold">
                      {m.label}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-white/85 whitespace-pre-line leading-snug">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-brand/20 blur-3xl" />
              <div className="relative h-[340px] w-[340px] md:h-[440px] md:w-[440px] rounded-full overflow-hidden ring-4 ring-brand/40 shadow-2xl">
                <img
                  src={heroVr}
                  alt="Woman wearing futuristic VR headset"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* corner stars */}
              <span className="absolute -top-4 -right-4 text-brand text-2xl">✦</span>
              <span className="absolute bottom-2 -left-6 text-brand text-xl">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
