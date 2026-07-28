import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./Button";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section
      id="contact"
      className="relative bg-[#F7FBF4] pt-14 lg:pt-16 pb-16 lg:pb-20 overflow-visible"
    >
      <div className="container-page">
        <div className="relative mx-auto w-full max-w-[1240px] rounded-[2rem] bg-white shadow-[var(--shadow-elevated)] overflow-hidden z-20 md:translate-y-[18%] lg:translate-y-[20%] md:h-[665px]">
          <div className="grid md:grid-cols-[0.43fr_0.57fr] gap-6 md:h-[665px]">
            {/* Info panel */}
            <div className="bg-hero text-white p-6 md:p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-2 font-semibold text-lg md:text-xl">
                <span className="inline-block h-6 w-6 rounded-full bg-brand" />
                <span>Get in touch</span>
              </div>

              <div className="mt-10 space-y-6 text-sm md:text-base">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                  <p className="text-white/80 leading-relaxed">
                    Plot 118, Landmark Event Centre,
                    <br />
                    Victoria Island, Lagos State.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone size={18} className="text-brand shrink-0 mt-0.5" />
                  <p className="text-white/80 leading-relaxed">+2349022234567</p>
                </div>
                <div className="flex gap-3">
                  <Mail size={18} className="text-brand shrink-0 mt-0.5" />
                  <p className="text-white/80 leading-relaxed">info@techxploresummit.com</p>
                </div>
              </div>

              <div className="mt-auto pt-8 flex flex-wrap gap-3">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="h-10 w-10 rounded-full bg-white/10 hover:bg-brand transition-colors flex items-center justify-center"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-background p-6 md:p-8 lg:p-10 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-heading">
                Have questions? Fill the form below
              </h3>

              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <Field label="Name" name="name" placeholder="Your full name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
                <Field
                  label="Message"
                  name="message"
                  placeholder="How can we help?"
                  as="textarea"
                />

                <Button type="submit" variant="brand" size="lg" className="w-full sm:w-auto">
                  {sent ? "Message sent ✓" : "Send message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea";
}

function Field({ label, name, type = "text", placeholder, as = "input" }: FieldProps) {
  const base =
    "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-heading placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition";
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} rows={4} placeholder={placeholder} className={base} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
