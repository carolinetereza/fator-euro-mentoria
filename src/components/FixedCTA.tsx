import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const FixedCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('application-form');
      if (!formSection) {
        setIsVisible(window.scrollY > 100);
        return;
      }

      const rect = formSection.getBoundingClientRect();
      const isInFormSection = rect.top < window.innerHeight && rect.bottom > 0;
      
      // Show button after scrolling 100px but hide when in form section
      setIsVisible(window.scrollY > 100 && !isInFormSection);
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <GradientButton
        onClick={scrollToForm}
        className="group"
      >
        APLICAR AGORA
        <ArrowDown className="group-hover:translate-y-1 transition-transform" />
      </GradientButton>
    </div>
  );
};
