export const Method = () => {
  const steps = [
    {
      letter: "V",
      title: "Visão Estratégica",
      description: "Análise profunda do seu nicho, produto e estrutura."
    },
    {
      letter: "E",
      title: "Execução Guiada",
      description: "Criação e montagem da sua loja comigo, sem achismos."
    },
    {
      letter: "N",
      title: "Negócio Otimizado",
      description: "SEO, layout, copy e técnica afinados pra escala."
    },
    {
      letter: "D",
      title: "Disparo de Vendas",
      description: "Campanha validada e suporte até as vendas acontecerem."
    }
  ];

  return (
    <section id="method" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">{/* Added id */}
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16 animate-fade-in">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Criadora do método <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">V.E.N.D.®</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Criei esse método operando lojas reais. Ele não vem de livro.
              Vem do campo de batalha.
            </p>
          </div>

          {/* Method steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(202,36%,60%,0.2)]"
              >
                {/* Letter badge */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.letter}
                  </div>
                </div>

                <div className="pt-8 space-y-3">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto leading-relaxed">
              Esse é o passo a passo que transforma loja travada em operação lucrativa.
              <br />
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">E agora é a sua vez de aplicar ele comigo.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
