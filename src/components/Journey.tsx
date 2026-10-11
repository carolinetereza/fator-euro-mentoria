import { Target, Route, Wrench, TrendingUp } from "lucide-react";
import { Card3D } from "@/components/ui/Card3D";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

export const Journey = () => {
  const steps = [
    { icon: Target, number: "01", title: "Conversa e diagnóstico", description: "Entendemos o contexto do negócio, os mercados de interesse e os principais desafios." },
    { icon: Route, number: "02", title: "Planejamento Estratégico", description: "Definimos prioridades e um plano adequado à operação." },
    { icon: Wrench, number: "03", title: "Execução Guiada", description: "Acompanhamos as decisões e a implementação do plano." },
    { icon: TrendingUp, number: "04", title: "Análise e Otimização", description: "Revisamos os indicadores para orientar os próximos passos." }
  ];

  const headingRef = useScrollReveal<HTMLDivElement>({ y: 40 });
  const gridRef = useStaggerReveal<HTMLDivElement>("[data-step]", { y: 80, stagger: 0.15 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(202,36%,20%,0.15),transparent_70%)]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div ref={headingRef} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Etapas da <span className="bg-gradient-accent bg-clip-text text-transparent">Consultadoria</span>
            </h2>
            <p className="text-xl text-muted-foreground">Do contexto do negócio às prioridades de execução</p>
          </div>

          <div ref={gridRef} className="relative">
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card3D key={index} className="rounded-2xl" intensity={12}>
                    <div data-step className="relative group">
                      <div className="relative p-8 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(202,36%,60%,0.2)] space-y-4">
                        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-sm font-bold text-primary">
                          {step.number}
                        </div>
                        <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_20px_hsl(202,36%,60%,0.4)] transition-all duration-300">
                          <Icon className="w-8 h-8 text-background stroke-[1.5]" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card3D>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
