import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { EventHighlights } from "@/components/site/EventHighlights";
import { Sponsorship } from "@/components/site/Sponsorship";
import { Countdown } from "@/components/site/Countdown";
import { About } from "@/components/site/About";
import { WhyWho } from "@/components/site/WhyWho";
import { Schedule } from "@/components/site/Schedule";
import { Blog } from "@/components/site/Blog";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EventHighlights />
      <Sponsorship />
      <Countdown />
      <About />
      <WhyWho />
      <Schedule />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
