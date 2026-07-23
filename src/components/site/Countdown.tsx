import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import conferenceImage from "../../assets/images/conference image.jpg";
import rotatingOverlay from "../../assets/graphics/countdown-rotating-overlay.svg";

const COUNTDOWN_START_SECONDS = 5 * 24 * 60 * 60 + 12 * 60 * 60 + 56 * 60 + 45;

function calc(remainingSeconds: number) {
  const safeRemainingSeconds = Math.max(0, remainingSeconds);
  const days = Math.floor(safeRemainingSeconds / 86_400);
  const hours = Math.floor((safeRemainingSeconds % 86_400) / 3_600);
  const minutes = Math.floor((safeRemainingSeconds % 3_600) / 60);
  const seconds = safeRemainingSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

const LABELS = [
  { key: "days", label: "Days", color: "#6CD400" },
  { key: "hours", label: "Hours", color: "#FFC107" },
  { key: "minutes", label: "Minutes", color: "#E31B23" },
  { key: "seconds", label: "Seconds", color: "#6CD400" },
] as const;
export function Countdown() {
  const [remainingSeconds, setRemainingSeconds] = useState(COUNTDOWN_START_SECONDS);
  const [secondsAnimating, setSecondsAnimating] = useState(false);
  const previousSecondsRef = useRef(remainingSeconds % 60);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemainingSeconds((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  const t = calc(remainingSeconds);

  useEffect(() => {
    const currentSeconds = t.seconds;

    if (currentSeconds !== previousSecondsRef.current) {
      previousSecondsRef.current = currentSeconds;
      setSecondsAnimating(true);

      const timeoutId = window.setTimeout(() => setSecondsAnimating(false), 320);
      return () => window.clearTimeout(timeoutId);
    }
  }, [t.seconds]);

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundImage: `url(${conferenceImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Designer artwork rotated as a single centered layered element. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
          <img
            src={rotatingOverlay}
            alt=""
            className="block"
            style={{
              width: "250vmax",
              height: "250vmax",
              maxWidth: "none",
              maxHeight: "none",
              animation: "countdown-corner-cycle 15s linear infinite",
              transformOrigin: "center center",
              willChange: "transform",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 container-page flex min-h-[500px] flex-col items-center justify-center py-16 text-center text-white sm:min-h-[540px] sm:py-20 lg:min-h-[580px] lg:py-28">
        <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {LABELS.map(({ key, label, color }) => {
            const isSeconds = key === "seconds";

            return (
              <div
                key={label}
                className="flex min-w-[72px] flex-col items-center sm:min-w-[96px] md:min-w-[110px]"
              >
                <div
                  className="font-display text-[2.75rem] font-black leading-none tracking-[-0.04em] tabular-nums sm:text-[4.5rem] md:text-[5.75rem] lg:text-[7rem]"
                  style={{
                    color,
                    animation:
                      isSeconds && secondsAnimating
                        ? "countdown-seconds-pop 320ms ease-out"
                        : "none",
                    transformOrigin: "center center",
                  }}
                >
                  {String(t[key]).padStart(2, "0")}
                </div>
                <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white sm:text-xs">
                  {label}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-base text-white sm:text-lg">
          The Future of Tech Awaits — Reserve Your Seat
        </p>

        <div className="mt-6">
          <Button variant="brand" size="lg">
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
}
