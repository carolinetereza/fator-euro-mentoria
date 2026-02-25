import { TrendingUp, Target, Zap, Users } from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

export const Method = () => {
  const steps = [
    { letter: "V", title: "Visão Estratégica", description: "Diagnóstico profundo de mercado, produto e potencial de escala." },
    { letter: "E", title: "Estruturação Executiva", description: "Arquitetura de loja, posicionamento e oferta para conversão global." },
    { letter: "N", title: "Normalização de Performance", description: "Otimização de copy, tráfego e SEO para previsibilidade de receita." },
    { letter: "D", title: "Domínio de Mercado", description: "Escala estruturada com controle de margem e crescimento sustentável." }
  ];

  const highlights = [
    { text: "Estruturar um negócio para crescer com previsibilidade.", icon: TrendingUp },
    { text: "Direção estratégica e execução supervisionada.", icon: Target },
    { text: "Sem fórmulas mágicas. Sem atalhos ilusórios.", icon: Zap },
    { text: "Ter alguém que te guie, não que te iluda.", icon: Users }
  ];

  const headingRef = useScrollReveal<HTMLDivElement>({ y: 40 });
  const gridRef = useStaggerReveal<HTMLDivElement>("[data-card]", { y: 80, stagger: 0.12 });
  const promiseRef = useScrollReveal<HTMLDivElement>({ y: 50 });
  const highlightsRef = useStaggerReveal<HTMLDivElement>("[data-highlight]", { y: 40, stagger: 0.1 });

  return (
    <section id="method" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Heading */}
          <div ref={headingRef} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              O Método <span className="bg-gradient-accent bg-clip-text text-transparent">V.E.N.D.®</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Criado na prática. Refinado em operações internacionais.
            </p>
          </div>

          {/* Method steps */}
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card3D key={index} className="rounded-2xl" intensity={12}>
                <div data-card className="group relative p-8 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(202,36%,60%,0.2)]">
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.letter}
                    </div>
                  </div>
                  <div className="pt-8 space-y-3">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                </div>
              </Card3D>
            ))}
          </div>

          {/* Promise section */}
          <div ref={promiseRef} className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-center">
                Esse acompanhamento não nasceu de <span className="bg-gradient-accent bg-clip-text text-transparent">teoria. Nasceu de operação real.</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Você não precisa de mais conteúdo. Precisa de direção estratégica e execução supervisionada.
              </p>
              
              <div ref={highlightsRef} className="grid gap-4">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div
                      data-highlight
                      key={index}
                      className="group flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(114,166,191,0.3)]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[0_8px_30px_rgba(114,166,191,0.5)] transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5 text-background stroke-[1.5]" />
                      </div>
                      <span className="font-semibold">{highlight.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
