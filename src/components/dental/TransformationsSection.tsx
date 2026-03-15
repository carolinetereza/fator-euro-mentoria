import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import t1 from "@/assets/transformation-1.jpg";
import t2 from "@/assets/transformation-2.jpg";
import t3 from "@/assets/transformation-3.jpg";
import t4 from "@/assets/transformation-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const transformations = [
  { image: t1, label: "Lentes de Contato" },
  { image: t2, label: "Reabilitação Estética" },
  { image: t3, label: "Harmonização" },
  { image: t4, label: "Implantes" },
];

export const TransformationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".transform-header > *", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".transform-header", start: "top 80%" },
      });

      // Horizontal scroll
      const track = trackRef.current;
      if (!track) return;

      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="transformations" ref={sectionRef} className="dark-section bg-charcoal overflow-hidden">
      <div className="h-screen flex flex-col justify-center">
        {/* Header */}
        <div className="transform-header container mx-auto px-6 lg:px-12 mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium mb-4">Transformações</p>
          <div className="luxury-divider mb-6" />
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
            Sorrisos que
            <br />
            <span className="italic font-light">contam histórias</span>
          </h2>
        </div>

        {/* Horizontal track */}
        <div ref={trackRef} className="flex gap-8 px-6 lg:px-12 will-change-transform">
          {transformations.map((item, i) => (
            <div
              key={i}
              className="transform-card flex-shrink-0 w-[70vw] md:w-[45vw] lg:w-[35vw] group relative overflow-hidden rounded-sm"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs tracking-[0.2em] uppercase text-gold font-sans">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
