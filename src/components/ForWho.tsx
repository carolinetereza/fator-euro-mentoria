import { X, Check } from "lucide-react";

export const ForWho = () => {
  const isFor = [
    "Já tentou vender online e falhou",
    "Está cansado(a) de fórmulas vazias",
    "Precisa de alguém experiente que te oriente com firmeza",
    "Quer escalar com inteligência, não com ansiedade"
  ];

  const notFor = [
    "Busca fórmula mágica",
    "Quer resultado sem esforço",
    "Não está disposto(a) a aplicar",
    "Procura conteúdo genérico"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-16 animate-fade-in">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Essa Mentoria É <span className="text-primary">Para Você Se...</span>
            </h2>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Is for you */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-lg">
                  <Check className="w-6 h-6 text-background stroke-[2]" />
                </div>
                <h3 className="text-2xl font-bold">É Para Você</h3>
              </div>
              
              <div className="space-y-4">
                {isFor.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-card rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:translate-x-1"
                  >
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not for you */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
                  <X className="w-6 h-6 text-muted-foreground stroke-[2]" />
                </div>
                <h3 className="text-2xl font-bold">Não É Para Você</h3>
              </div>
              
              <div className="space-y-4">
                {notFor.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card/30 rounded-xl border border-muted/30 opacity-60"
                  >
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
