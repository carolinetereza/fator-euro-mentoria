import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clinicImage from "@/assets/clinic-interior.jpg";
import treatmentImage from "@/assets/clinic-treatment.jpg";

gsap.registerPlugin(ScrollTrigger);

export const ClinicSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".clinic-header > *", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".clinic-header", start: "top 80%" },
      });

      gsap.fromTo(".clinic-img-1", { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".clinic-img-1", start: "top 80%" },
      });

      gsap.fromTo(".clinic-img-2", { x: 40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".clinic-img-2", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="clinic" ref={sectionRef} className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="clinic-header text-center mb-20 space-y-4">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium">A Clínica</p>
          <div className="luxury-divider mx-auto" />
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Dental Boutique
          </h2>
          <p className="font-sans text-base text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Um ambiente criado para proporcionar conforto, acolhimento e a melhor experiência
            em odontologia estética. Tecnologia de ponta, design moderno e atendimento humanizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="clinic-img-1 overflow-hidden rounded-sm opacity-0">
            <img
              src={clinicImage}
              alt="Recepção Dental Boutique"
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="clinic-img-2 overflow-hidden rounded-sm opacity-0">
            <img
              src={treatmentImage}
              alt="Sala de tratamento"
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
