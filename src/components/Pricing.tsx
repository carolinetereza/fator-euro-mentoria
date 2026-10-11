import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Check, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Pricing = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const includes = [
    "Sessões privadas 1:1 ao vivo",
    "Revisão de loja, oferta e comunicação",
    "Orientação sobre tráfego e SEO",
    "Acompanhamento das prioridades de execução"
  ];

  const headingRef = useScrollReveal<HTMLDivElement>({ y: 40 });
  const cardRef = useScrollReveal<HTMLDivElement>({ y: 80, delay: 0.15 });

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto space-y-16">
          <div ref={headingRef} className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Consultadoria Privada</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estratégia internacional aplicada ao e-commerce.
            </p>
          </div>

          <div ref={cardRef} className="relative group">
            <GlowingEffect spread={50} glow={true} disabled={false} proximity={120} inactiveZone={0.01} borderWidth={2} className="rounded-2xl md:rounded-[2rem]" />

            <div className="relative bg-gradient-to-br from-card/90 via-card/95 to-background/90 backdrop-blur-2xl rounded-2xl md:rounded-[2rem] border border-primary/20 overflow-hidden shadow-[0_20px_80px_-20px_rgba(114,166,191,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />

              <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-secondary px-4 py-2 md:px-8 md:py-3 rounded-bl-xl md:rounded-bl-[2rem] shadow-[0_8px_32px_rgba(114,166,191,0.3)]">
                <p className="font-bold text-xs md:text-sm text-primary-foreground flex items-center gap-1 md:gap-2">
                  <Zap className="w-3 h-3 md:w-4 md:h-4" />
                  ACOMPANHAMENTO INDIVIDUAL
                </p>
              </div>

              <div className="relative p-6 md:p-12 lg:p-16 space-y-8 md:space-y-10">
                <div className="space-y-3 md:space-y-4 pt-12 md:pt-8">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                    Consultadoria Privada FATOR EURO™
                  </h3>
                  <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                    Um acompanhamento individual para estruturar ou desenvolver sua operação em mercados internacionais.
                  </p>
                </div>


                <div className="space-y-5 md:space-y-6">
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    O que está incluso:
                  </h4>
                  <div className="grid gap-3 md:gap-4">
                    {includes.map((item, index) => (
                      <div key={index} className="group/item relative flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-r from-card/60 via-card/40 to-transparent backdrop-blur-sm rounded-xl md:rounded-2xl border border-primary/10 hover:border-primary/30 hover:from-card/80 hover:via-card/60 transition-all duration-500 md:hover:translate-x-2 hover:shadow-[0_8px_30px_rgba(114,166,191,0.2)]" style={{ transitionDelay: `${index * 50}ms` }}>
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-md opacity-50 group-hover/item:opacity-80 transition-opacity duration-500 rounded-lg md:rounded-xl" />
                          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover/item:shadow-[0_8px_30px_rgba(114,166,191,0.6)] group-hover/item:scale-110 transition-all duration-500">
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground stroke-[3]" />
                          </div>
                        </div>
                        <span className="text-base md:text-lg lg:text-xl font-medium text-foreground/90 group-hover/item:text-foreground transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <ShinyButton className="relative w-full text-sm md:text-base lg:text-xl font-bold py-6 md:py-7 lg:py-9 rounded-xl md:rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_60px_rgba(99,102,241,0.6)] transition-all duration-500" onClick={scrollToForm}>
                    CONVERSAR SOBRE A CONSULTORIA
                  </ShinyButton>
                </div>

                <div className="text-center space-y-2 pt-4">
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                    O escopo e as condições são alinhados antes da contratação.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                    A conversa começa pelo contexto do seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
