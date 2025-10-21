import { CheckCircle2 } from "lucide-react";
import mentorImage from "@/assets/mentor-authority.png";

export const Authority = () => {
  const highlights = [
    "Resultados reais",
    "Prática diária",
    "Estratégias que vendem todos os dias",
    "Mentoria exclusiva e individual"
  ];

  return (
    <section id="authority" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Conheça <span className="bg-gradient-accent bg-clip-text text-transparent">Caroline Morette</span>
            </h2>
          </div>

          {/* Photo - Desktop centered below title */}
          <div className="hidden lg:flex flex-col items-center mb-12 space-y-6">
            <div className="relative w-[400px]">
              <div className="absolute inset-0 bg-gradient-accent blur-3xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
                <img 
                  src={mentorImage} 
                  alt="Caroline Morette" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-2xl font-semibold text-center">
              Não sou guru. Nem influencer. <span className="bg-gradient-accent bg-clip-text text-transparent">Sou operadora.</span>
            </p>
          </div>

          {/* Mobile/Tablet Layout - Image on left */}
          <div className="lg:hidden mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-accent blur-3xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
                <img 
                  src={mentorImage} 
                  alt="Caroline Morette" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Statement - Only for mobile/tablet */}
            <div className="space-y-6 lg:hidden">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-center">
                Não sou guru.<br />
                Nem influencer.<br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">Sou operadora.</span>
              </h3>
            </div>
              
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Enquanto muitos falam, eu opero e-commerces reais em múltiplos países. 
                Onde tem internet, tem mercado. E eu sei como escalar.
              </p>
              
              <p>
                Estudei Business Management na Irlanda e Estratégia Corporativa em Londres 
                e hoje vendo todos os dias em euro, dólar e libra.
              </p>
            </div>

            {/* What matters section */}
            <div className="space-y-6 pt-8">
              <h3 className="text-2xl md:text-3xl font-bold">
                Mas o que <span className="bg-gradient-accent bg-clip-text text-transparent">realmente importa?</span>
              </h3>
              
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(114,166,191,0.3)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[0_8px_30px_rgba(114,166,191,0.5)] transition-all duration-300 group-hover:scale-110">
                      <CheckCircle2 className="w-5 h-5 text-background stroke-[1.5]" />
                    </div>
                    <span className="font-semibold">{highlight}</span>
                  </div>
                ))}
              </div>
              
              <p className="bg-gradient-accent bg-clip-text text-transparent font-semibold text-xl pt-6">
                Essa mentoria não veio de livro. Veio da prática. Veio da pressão de quem 
                precisa fazer dar certo, sem desculpa. E agora, posso te guiar nesse mesmo caminho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
