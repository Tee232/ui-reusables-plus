import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  underline?: boolean;
  className?: string;
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  underline = true,
  className,
  tone = "light",
}: Props) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs uppercase tracking-[0.2em] font-semibold mb-3",
            tone === "dark" ? "text-white/70" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold inline-block relative",
          tone === "dark" ? "!text-white" : "",
        )}
      >
        {title}
        {underline && (
          <span
            className={cn(
              "block h-[3px] mt-2 mx-auto w-16 rounded-full",
              tone === "dark" ? "bg-white/80" : "bg-heading",
            )}
          />
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-white/80" : "text-body",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
