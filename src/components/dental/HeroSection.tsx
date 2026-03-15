import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "@/assets/hero-clinic.jpg";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(overlayRef.current, { opacity: 1 }, { opacity: 0.65, duration: 2 })
      .fromTo(lineRef.current, { width: 0, opacity: 0 }, { width: 60, opacity: 1, duration: 1 }, "-=1.2")
      .fromTo(headingRef.current, { y: 60, opacity: 0, clipPath: "inset(0 0 100% 0)" }, { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1.2 }, "-=0.8")
      .fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3");

    // Parallax on scroll
    const onScroll = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY;
      const img = sectionRef.current.querySelector(".hero-bg") as HTMLElement;
      if (img) img.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)`;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      tl.kill();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dental Boutique - Clínica de excelência"
          className="hero-bg w-full h-full object-cover scale-110"
          loading="eager"
        />
      </div>

      {/* Dark cinematic overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div ref={lineRef} className="luxury-divider mx-auto opacity-0" />

          <h1
            ref={headingRef}
            className="luxury-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground opacity-0"
          >
            Criando sorrisos
            <br />
            <span className="italic font-light">com arte</span>
          </h1>

          <p
            ref={subRef}
            className="font-sans text-lg md:text-xl text-primary-foreground/60 font-light tracking-wide max-w-2xl mx-auto opacity-0"
          >
            Referência em odontologia estética e especialista em lentes de contato dental.
            Sofisticação e naturalidade em cada sorriso.
          </p>

          <div ref={ctaRef} className="pt-6 opacity-0">
            <button onClick={scrollToContact} className="luxury-btn !text-primary-foreground/80 !border-primary-foreground/20 hover:!border-gold hover:!text-gold">
              Agende Sua Consulta Particular
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/30 font-sans">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
    </section>
  );
};
