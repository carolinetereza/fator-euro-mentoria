import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Smile, Shield, Gem } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Gem,
    title: "Lentes de Contato Dental",
    description: "Facetas ultrafinas que transformam seu sorriso com naturalidade e sofisticação incomparáveis.",
  },
  {
    icon: Shield,
    title: "Implantodontia",
    description: "Implantes de última geração com técnica minimamente invasiva e resultados permanentes.",
  },
  {
    icon: Sparkles,
    title: "Harmonização Orofacial",
    description: "Equilíbrio estético facial com procedimentos refinados e resultados naturais.",
  },
  {
    icon: Smile,
    title: "Reabilitação Estética",
    description: "Reabilitações complexas com planejamento digital e execução artística de alta precisão.",
  },
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".services-header > *", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".services-header", start: "top 80%" },
      });

      gsap.fromTo(".service-card", { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".service-card", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="services-header text-center mb-20 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium">Especialidades</p>
          <div className="luxury-divider mx-auto" />
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Excelência em cada
            <br />
            <span className="italic font-light">procedimento</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={i}
                className="service-card glass-card rounded-sm p-8 lg:p-10 transition-all duration-500 group"
                style={{
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHovered ? "var(--shadow-luxury)" : "var(--shadow-soft)",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-colors duration-500">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-medium text-foreground">{service.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="font-sans text-sm text-muted-foreground font-light mb-6">
            Descubra como podemos transformar sua autoestima
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="luxury-btn"
          >
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
};
