import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ParticleBackground } from "@/components/ParticleBackground";
import mentorImage from "@/assets/mentor-caroline-new.png";

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(h1Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(pRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo(btnRef.current, { y: 30, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.7 }, "-=0.4")
      .fromTo(badgeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3");
    return () => { tl.kill(); };
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      <ParticleBackground />

      {/* Background mentor image */}
      <div className="absolute inset-0 opacity-10">
        <img src={mentorImage} alt="Caroline Morette" className="w-full h-full object-cover object-center" loading="lazy" />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(202,36%,20%,0.2),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 blur-[120px] rounded-full" />

      {/* Lamp glow effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0.4, width: "10rem" }}
            animate={{ opacity: 1, width: "28rem" }}
            transition={{ delay: 0.3, duration: 1.4, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 h-[28rem] bg-accent/20 blur-[120px] rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, width: "12rem" }}
            animate={{ opacity: 0.7, width: "20rem" }}
            transition={{ delay: 0.4, duration: 1.4, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 h-[18rem] bg-accent/30 blur-[80px] rounded-full"
          />
          <motion.div
            initial={{ width: "8rem" }}
            animate={{ width: "18rem" }}
            transition={{ delay: 0.5, duration: 1.4, ease: "easeInOut" }}
            className="absolute top-[28%] h-[2px] bg-accent/60 blur-sm"
          />
          <motion.div
            initial={{ width: "8rem" }}
            animate={{ width: "18rem" }}
            transition={{ delay: 0.5, duration: 1.4, ease: "easeInOut" }}
            className="absolute top-[28%] h-px bg-accent"
          />
        </div>
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <h1 ref={h1Ref} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0">
              Estratégia para Operações
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Internacionais
              </span>
            </h1>
            <p ref={pRef} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto opacity-0">
              Transforme sua operação em uma operação global. Fature em euro, dólar e libra.
            </p>
          </div>

          <div ref={btnRef} className="opacity-0">
            <ShinyButton onClick={scrollToForm} className="group">
              APLICAR AGORA
            </ShinyButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
