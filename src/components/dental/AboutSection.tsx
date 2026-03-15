import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import doctorImage from "@/assets/doctor-portrait.jpg";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-image", { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: ".about-image", start: "top 80%" },
      });
      gsap.fromTo(".about-text > *", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".about-text", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="about-image relative opacity-0">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={doctorImage}
                alt="Dr. Marcel Ferreira"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-sm p-6 shadow-lg" style={{ boxShadow: "var(--shadow-luxury)" }}>
              <div className="text-center">
                <p className="font-serif text-3xl font-semibold text-foreground">+30 mil</p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-sans mt-1">Lentes aplicadas</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text space-y-8">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium">Sobre o Especialista</p>
              <div className="luxury-divider" />
            </div>

            <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
              Mais de duas décadas
              <br />
              <span className="italic font-light text-gold">de excelência</span>
            </h2>

            <p className="font-sans text-base text-muted-foreground font-light leading-relaxed">
              Com mais de duas décadas de experiência, o Dr. Marcel Ferreira é referência nacional
              em odontologia estética e especialista em lentes de contato dentais e reabilitação
              estética de alta complexidade.
            </p>

            <p className="font-sans text-base text-muted-foreground font-light leading-relaxed">
              Formado pela Universidade Cidade de São Paulo (UNICID) em 2001, possui especializações
              em implantes orais, plástica periodontal e sedação com óxido nitroso, garantindo
              tratamentos seguros e de excelência.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground">+20 mil</p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-sans mt-1">Implantes realizados</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground">UNICID</p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-sans mt-1">Formação acadêmica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
