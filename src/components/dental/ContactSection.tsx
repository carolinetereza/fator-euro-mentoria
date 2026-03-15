import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_URL = "https://wa.me/5511999199200?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const contactInfo = [
  { icon: MapPin, label: "Endereço", value: "Av. Nove de Julho, 3624\nJardim Paulista — São Paulo/SP", href: "https://www.google.com/maps/dir//Av.+Nove+de+Julho,+3624+-+Jardim+Paulista" },
  { icon: Phone, label: "Telefone", value: "(11) 3068-9947", href: "tel:+551130689947" },
  { icon: Phone, label: "WhatsApp", value: "(11) 9.9919-9200", href: WHATSAPP_URL },
  { icon: Mail, label: "E-mail", value: "dentalboutiqueadm@gmail.com", href: "mailto:dentalboutiqueadm@gmail.com" },
  { icon: Clock, label: "Horário", value: "Seg a Sex: 09h — 18h", href: undefined },
];

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-content > *", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-content", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="dark-section section-padding bg-charcoal">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="contact-content max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-medium">Contato</p>
            <div className="luxury-divider mx-auto" />
            <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
              Agende sua consulta
              <br />
              <span className="italic font-light">particular</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-colors">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-gold/60 font-sans mb-1">{item.label}</p>
                      <p className="font-sans text-sm text-primary-foreground/70 font-light whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:translate-x-1 transition-transform duration-300">
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            <div className="flex flex-col justify-center items-center text-center space-y-8">
              <p className="font-serif text-2xl text-primary-foreground/80 italic">
                Seu sorriso merece o melhor
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-btn-filled text-sm"
              >
                Solicitar Avaliação Personalizada
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
