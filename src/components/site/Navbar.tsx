import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

const LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Speakers", href: "#schedule" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container-page flex items-center justify-between py-5">
        <a href="#" className="flex items-center gap-2 text-white font-bold text-lg">
          <span className="inline-block h-8 w-8 rounded-full bg-brand" />
          <span>vatebra</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/90 text-sm hover:text-brand transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="brand" size="sm">Register Now</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-hero/95 backdrop-blur border-t border-white/10">
          <div className="container-page py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 py-2 text-sm"
              >
                {l.label}
              </a>
            ))}
            <Button variant="brand" size="sm" className="w-full">Register Now</Button>
          </div>
        </div>
      )}
    </header>
  );
}
