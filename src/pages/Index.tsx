import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Authority } from "@/components/Authority";
import { Method } from "@/components/Method";
import { Benefits } from "@/components/Benefits";
import { Journey } from "@/components/Journey";
import { ForWho } from "@/components/ForWho";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Footer } from "@/components/Footer";
import { FixedCTA } from "@/components/FixedCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Authority />
      <Method />
      <Benefits />
      <Journey />
      <ForWho />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ApplicationForm />
      <Footer />
      <FixedCTA />
    </main>
  );
};

export default Index;
