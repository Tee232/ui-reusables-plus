import { useEffect, useState } from "react";
import { Button } from "./Button";

// Single source of truth for the event date.
const EVENT_DATE = new Date("2025-11-15T10:00:00+01:00").getTime();

function calc() {
  const diff = Math.max(0, EVENT_DATE - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}

const LABELS: [keyof ReturnType<typeof calc>, string][] = [
  ["days", "Days"],
  ["hours", "Hours"],
  ["minutes", "Minutes"],
  ["seconds", "Seconds"],
];

// Wedge anchored at the top-left corner of the square, radiating along
// the diagonal — matches the Figma "Component 151" reference. Rotating
// the whole element 90° at a time walks the wedge around all four corners:
// TL → TR → BR → BL → TL.
const WEDGE_BG =
  "conic-gradient(from 0deg at 0% 0%, rgba(10,60,10,0.95) 0deg, rgba(10,60,10,0.6) 20deg, rgba(255,255,255,0) 60deg, rgba(255,255,255,0) 360deg), linear-gradient(135deg, #e8efe8 0%, #ffffff 55%, #e8efe8 100%)";


export function Countdown() {
  const [t, setT] = useState(() => calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-hero">
      {/* Decorative rotating wedge background — behind everything. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 aspect-square w-[140vmax] -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-screen"
          style={{
            background: WEDGE_BG,
            animation: "countdown-corner-cycle 14s linear infinite",
          }}
        />
        {/* Soft dark overlay to keep the countdown legible */}
        <div className="absolute inset-0 bg-hero/70" />
      </div>

      <div className="relative container-page py-20 lg:py-28 text-center text-white">
        <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-5">
          {LABELS.map(([key, label]) => (
            <div
              key={label}
              className="min-w-[86px] sm:min-w-[120px] rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md px-4 py-5 sm:px-6 sm:py-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
            >
              <div className="text-4xl sm:text-6xl md:text-7xl font-bold text-brand tabular-nums leading-none">
                {String(t[key]).padStart(2, "0")}
              </div>
              <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80">
                {label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-white/90 text-base sm:text-lg">
          The Future of Tech Awaits — Reserve Your Seat
        </p>

        <div className="mt-6">
          <Button variant="brand" size="lg">Register Now</Button>
        </div>
      </div>
    </section>
  );
}
