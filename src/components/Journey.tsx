import { Target, Route, Wrench, TrendingUp } from "lucide-react";

export const Journey = () => {
  const steps = [
    {
      icon: Target,
      number: "01",
      title: "Aplicação e Diagnóstico",
      description: "Entendemos seu momento, sua loja e seus desafios."
    },
    {
      icon: Route,
      number: "02",
      title: "Planejamento Estratégico",
      description: "Traçamos metas realistas e um plano sob medida."
    },
    {
      icon: Wrench,
      number: "03",
      title: "Execução Acompanhada",
      description: "Mão na massa com meu acompanhamento pessoal."
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Análise e Otimização",
      description: "Ajustes em tempo real para performance máxima."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(202,36%,20%,0.15),transparent_70%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16 animate-fade-in">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Etapas da <span className="text-primary">Mentoria</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Um processo estruturado do zero ao lucro
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative group"
                  >
                    {/* Card */}
                    <div className="relative p-8 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(202,36%,60%,0.2)] space-y-4">
                      {/* Number badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-sm font-bold text-primary">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_20px_hsl(202,36%,60%,0.4)] transition-all duration-300">
                        <Icon className="w-8 h-8 text-background stroke-[1.5]" />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
