import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Nicole Rocha",
    text: "Desde a primeira consulta, ficou evidente que ele se destaca pela excelência no atendimento e pelo cuidado que proporciona.",
  },
  {
    name: "Julia Vieira",
    text: "Gratidão ao Dr. Marcel e Dra. Carol pelo trabalho impecável na realização das minhas lentes de porcelana. O talento da equipe garantiu um resultado extremamente natural.",
  },
  {
    name: "Carol Valença",
    text: "Minhas expectativas foram superadas. Achei que meu resultado ficou bem melhor do que eu esperava. Estou muito feliz e amando meu sorriso.",
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-header > *", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".testimonial-header", start: "top 80%" },
      });
      gsap.fromTo(".testimonial-card", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".testimonial-card", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="dark-section section-padding bg-charcoal">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="testimonial-header text-center mb-20 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium">Depoimentos</p>
          <div className="luxury-divider mx-auto" />
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
            O que dizem nossos
            <br />
            <span className="italic font-light">pacientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card glass-card-dark rounded-sm p-8 space-y-6 opacity-0">
              <Quote size={24} className="text-gold/40" />
              <p className="font-serif text-lg text-primary-foreground/80 italic leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <div className="luxury-divider mb-3" style={{ width: 30 }} />
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
