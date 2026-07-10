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
    <section id="contact" className="bg-section py-20 lg:py-24">
      <div className="container-page">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
          {/* Info panel */}
          <div className="bg-hero text-white p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="inline-block h-6 w-6 rounded-full bg-brand" />
              <span>Get in touch</span>
            </div>

            <div className="mt-8 space-y-5 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                <p className="text-white/85">
                  Landmark Event Centre,<br />Victoria Island, Lagos
                </p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-brand shrink-0 mt-0.5" />
                <p className="text-white/85">+234 (0) 800 000 0000</p>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-brand shrink-0 mt-0.5" />
                <p className="text-white/85">hello@techxploresummit.com</p>
              </div>
            </div>

            <div className="mt-auto pt-10 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-brand transition-colors flex items-center justify-center"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-background p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-heading">
              Have questions? Fill the form below
            </h3>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
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
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          className={base}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}
