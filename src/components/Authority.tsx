import { TrendingUp, Target, Zap, Users } from "lucide-react";
import mentorImage from "@/assets/mentor-caroline-new.png";

export const Authority = () => {
  const highlights = [
    { text: "Vender de verdade. Todos os dias.", icon: TrendingUp },
    { text: "Aprender com quem vive do próprio faturamento.", icon: Target },
    { text: "Aplicar, ajustar e lucrar. Sem papo de fórmula.", icon: Zap },
    { text: "Ter alguém que te guia, não que te ilude.", icon: Users }
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
                Eu opero lojas reais, com faturamento em euro, dólar e libra. Todos os dias. 
                Onde tem internet, tem mercado. E eu sei como escalar.
              </p>
              
              <p>
                Estudei Business Management na Irlanda e Estratégia Corporativa em Londres, 
                já escalei operações múltiplos países, sem depender de sorte ou fórmulas mágicas.
              </p>
            </div>

            {/* What matters section */}
            <div className="space-y-6 pt-8">
              <h3 className="text-2xl md:text-3xl font-bold">
                Mas o que <span className="bg-gradient-accent bg-clip-text text-transparent">realmente importa?</span>
              </h3>
              
              <div className="grid gap-4">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div
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
              
              <p className="font-semibold text-xl pt-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Essa mentoria não veio de livro. Veio da prática.
                </span>{" "}
                Agora, eu te ensino o mesmo caminho, sem enrolação.
              </p>
              
              <p className="text-lg italic pt-4 text-muted-foreground">
                *Porque no fim, o que paga conta é resultado, não promessa bonita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
