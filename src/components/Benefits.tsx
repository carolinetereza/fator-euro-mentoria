import { Check, Video, Target, FileText, Search, Store, MessageSquare, Shield, Award } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Video,
      title: "Sessões 1:1 comigo (Zoom/Meet)",
      description: "Mentoria personalizada. Olho no olho. Nada de vídeo gravado."
    },
    {
      icon: Target,
      title: "Campanhas Reais em Funcionamento",
      description: "Veja e use campanhas que estão no ar, com dados reais de vendas."
    },
    {
      icon: FileText,
      title: "Copy, Oferta e Criativos Supervisionados",
      description: "Eu reviso, melhoro e aprovo. Comunicação que converte."
    },
    {
      icon: Search,
      title: "Loja Otimizada com SEO Estratégico",
      description: "Atrai tráfego qualificado sem gastar mais."
    },
    {
      icon: Store,
      title: "Seu Shopify Sob Minha Mentoria Direta",
      description: "Nada de genérico. Estratégia personalizada para sua loja real."
    },
    {
      icon: MessageSquare,
      title: "Suporte VIP por WhatsApp",
      description: "Respostas rápidas, direção clara, ajustes certeiros."
    },
    {
      icon: Shield,
      title: "Vender em até 15 dias ou Refaço Tudo Com Você",
      description: "Simples assim. Comprometimento com resultado."
    },
    {
      icon: Award,
      title: "Modelo de Loja Campeã",
      description: "Receba estrutura validada para conversão máxima."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto space-y-16 animate-fade-in">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              O Que Você <span className="bg-gradient-accent bg-clip-text text-transparent">Realmente Recebe</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sem estoque • Sem enrolação • Sem fórmula mágica
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(202,36%,60%,0.2)]"
              >
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
            ))}
          </div>

          {/* Exclusivity callout */}
          <div className="relative p-8 md:p-12 bg-background/30 backdrop-blur-sm rounded-2xl text-center space-y-4 overflow-hidden border-2 border-primary/50 hover:shadow-[0_8px_40px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Exclusividade Absoluta
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Apenas 4 mentorados por mês. Foco total. Resultado rápido.
                Quem não entra, vai para a Lista de Espera VIP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
