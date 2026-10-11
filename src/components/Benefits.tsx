import { Video, Target, Store, Shield } from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

export const Benefits = () => {
  const benefits = [
    { icon: Video, title: "Acompanhamento privado 1:1 ao vivo", description: "Sessões individuais para revisar decisões e definir prioridades." },
    { icon: Target, title: "Revisão da operação", description: "Revisão de loja, oferta e comunicação; orientação sobre tráfego e SEO." },
    { icon: Store, title: "Estrutura para mercados internacionais", description: "Alinhamento da estrutura digital ao mercado de interesse." },
    { icon: Shield, title: "Prioridades de execução", description: "Acompanhamento das prioridades e dos indicadores da operação." }
  ];

  const headingRef = useScrollReveal<HTMLDivElement>({ y: 40 });
  const gridRef = useStaggerReveal<HTMLDivElement>("[data-benefit]", { y: 60, stagger: 0.12 });
  const calloutRef = useScrollReveal<HTMLDivElement>({ y: 50, delay: 0.2 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div ref={headingRef} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              O acompanhamento <span className="bg-gradient-accent bg-clip-text text-transparent">individual</span>
            </h2>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card3D key={index} className="rounded-xl" intensity={10}>
                <div data-benefit className="group relative p-6 bg-gradient-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(202,36%,60%,0.2)]">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_hsl(202,36%,60%,0.4)] transition-all duration-300 group-hover:scale-110">
                        <benefit.icon className="w-6 h-6 text-background stroke-[1.5]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <div ref={calloutRef} className="relative p-8 md:p-12 bg-background/30 backdrop-blur-sm rounded-2xl text-center space-y-4 overflow-hidden border-2 border-primary/50 hover:shadow-[0_8px_40px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Consultoria Fator Euro
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Estratégia internacional aplicada ao e-commerce, com diagnóstico, direção e supervisão da execução.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
