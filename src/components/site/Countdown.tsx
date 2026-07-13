import { useEffect, useState } from "react";
import { Button } from "./Button";

const TARGET = new Date("2025-11-15T10:00:00+01:00").getTime();

function calc() {
  const now = Date.now();
  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

const LABELS: [keyof ReturnType<typeof calc>, string][] = [
  ["days", "Days"],
  ["hours", "Hours"],
  ["minutes", "Minutes"],
  ["seconds", "Seconds"],
];

export function Countdown() {
  const [t, setT] = useState(() => calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-hero">
      {/* Rotating decorative gradient shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/3 -left-1/4 h-[900px] w-[900px] rounded-[38%] opacity-25 will-change-transform"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(99,191,19,0.55), rgba(234,173,17,0.15), rgba(214,12,33,0.35), rgba(99,191,19,0.55))",
            filter: "blur(40px)",
            animation: "spin-slow 40s linear infinite",
          }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/4 h-[820px] w-[820px] rounded-[42%] opacity-20 will-change-transform"
          style={{
            background:
              "conic-gradient(from 120deg, rgba(234,173,17,0.5), rgba(99,191,19,0.2), rgba(214,12,33,0.3), rgba(234,173,17,0.5))",
            filter: "blur(50px)",
            animation: "spin-reverse 60s linear infinite",
          }}
        />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-[45%] opacity-15 will-change-transform"
          style={{
            background:
              "conic-gradient(from 45deg, rgba(99,191,19,0.4), transparent 40%, rgba(214,12,33,0.35), transparent 80%, rgba(99,191,19,0.4))",
            filter: "blur(60px)",
            animation: "spin-slow 90s linear infinite",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-hero/40" />

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
