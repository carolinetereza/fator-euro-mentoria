import { X, Check } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

export const ForWho = () => {
  const isFor = [
    "Já tentou vender globalmente e quer estruturar corretamente",
    "Busca faturar em moeda forte e expandir",
    "Quer orientação firme e estratégica",
    "Está disposto(a) a executar"
  ];

  const notFor = [
    "Busca fórmula mágica",
    "Quer resultado sem aplicar",
    "Procura entretenimento digital",
    "Não está pronto(a) para jogar em nível global"
  ];

  const headingRef = useScrollReveal<HTMLDivElement>({ y: 40 });
  const leftRef = useStaggerReveal<HTMLDivElement>("[data-item]", { x: -40, y: 0, stagger: 0.1 });
  const rightRef = useStaggerReveal<HTMLDivElement>("[data-item]", { x: 40, y: 0, stagger: 0.1, delay: 0.2 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-16">
          <div ref={headingRef} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Essa Consultadoria É <span className="bg-gradient-accent bg-clip-text text-transparent">Para Você Se:</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div ref={leftRef} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-lg">
                  <Check className="w-6 h-6 text-background stroke-[2]" />
                </div>
                <h3 className="text-2xl font-bold">É Para Você</h3>
              </div>
              <div className="space-y-4">
                {isFor.map((item, index) => (
                  <div data-item key={index} className="p-4 bg-gradient-card rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:translate-x-1">
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div ref={rightRef} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
                  <X className="w-6 h-6 text-muted-foreground stroke-[2]" />
                </div>
                <h3 className="text-2xl font-bold">Não É Para Você</h3>
              </div>
              <div className="space-y-4">
                {notFor.map((item, index) => (
                  <div data-item key={index} className="p-4 bg-card/30 rounded-xl border-2 border-primary/50 opacity-60 hover:opacity-80 transition-opacity">
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
