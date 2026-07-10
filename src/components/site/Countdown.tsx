import { useEffect, useState } from "react";
import countdownBg from "@/assets/countdown-bg.jpg";
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
  ["days", "days"],
  ["hours", "hours"],
  ["minutes", "minutes"],
  ["seconds", "seconds"],
];

export function Countdown() {
  const [t, setT] = useState(() => calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <img
        src={countdownBg}
        alt=""
        aria-hidden
        width={1600}
        height={700}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero/70" />

      <div className="relative container-page py-20 lg:py-24 text-center text-white">
        <div className="flex flex-wrap items-end justify-center gap-6 sm:gap-10">
          {LABELS.map(([key, label]) => (
            <div key={label} className="min-w-[80px]">
              <div className="text-5xl md:text-7xl font-bold text-brand tabular-nums transition-all">
                {String(t[key]).padStart(2, "0")}
              </div>
              <div className="mt-1 text-sm uppercase tracking-widest text-white/80">
                {label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-white/90">
          The Future of Tech Awaits — Reserve Your Seat
        </p>

        <div className="mt-6">
          <Button variant="brand" size="lg">Register Now</Button>
        </div>
      </div>
    </section>
  );
}
