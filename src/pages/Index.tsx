import { CustomCursor } from "@/components/dental/CustomCursor";
import { LuxuryNav } from "@/components/dental/LuxuryNav";
import { HeroSection } from "@/components/dental/HeroSection";
import { AboutSection } from "@/components/dental/AboutSection";
import { TransformationsSection } from "@/components/dental/TransformationsSection";
import { ServicesSection } from "@/components/dental/ServicesSection";
import { TestimonialsSection } from "@/components/dental/TestimonialsSection";
import { ClinicSection } from "@/components/dental/ClinicSection";
import { ContactSection } from "@/components/dental/ContactSection";
import { LuxuryFooter } from "@/components/dental/LuxuryFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <LuxuryNav />
      <HeroSection />
      <AboutSection />
      <TransformationsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ClinicSection />
      <ContactSection />
      <LuxuryFooter />
    </main>
  );
};

export default Index;
