import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "brand" | "brand-outline" | "gold" | "outline" | "hero" | "ghost";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  brand:
    "bg-brand text-brand-foreground hover:brightness-110 active:brightness-95 shadow-[0_4px_14px_-4px_rgba(99,191,19,0.6)]",
  "brand-outline":
    "border border-brand text-brand bg-transparent hover:bg-brand hover:text-brand-foreground",
  gold:
    "bg-gold text-gold-foreground hover:brightness-105 active:brightness-95",
  outline:
    "border border-white/70 text-white hover:bg-white hover:text-hero",
  hero:
    "bg-hero text-hero-foreground hover:bg-hero/90",
  ghost:
    "text-heading hover:bg-secondary",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "brand", size = "md", className, children, ...rest }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  ),
);
Button.displayName = "Button";
