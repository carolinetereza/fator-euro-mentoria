import mentorImage from "@/assets/mentor-caroline-authority.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Authority = () => {
  const titleRef = useScrollReveal<HTMLDivElement>({ y: 40 });
  const imageRef = useScrollReveal<HTMLDivElement>({ y: 60, delay: 0.15 });
  const statementRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.3 });
  const contentRef = useScrollReveal<HTMLDivElement>({ y: 50, delay: 0.2 });

  return (
    <section id="authority" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div ref={titleRef} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Conheça <span className="bg-gradient-accent bg-clip-text text-transparent">Caroline Morette</span>
            </h2>
          </div>

          {/* Photo - Desktop centered below title */}
          <div ref={imageRef} className="hidden lg:flex flex-col items-center mb-12 space-y-6">
            <div className="relative w-[400px]">
              <div className="absolute inset-0 bg-gradient-accent blur-3xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
                <img src={mentorImage} alt="Caroline Morette" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </div>
            <p ref={statementRef} className="text-2xl font-semibold text-center">
              Visão estratégica. <span className="bg-gradient-accent bg-clip-text text-transparent">Experiência em operação.</span>
            </p>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-accent blur-3xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
                <img src={mentorImage} alt="Caroline Morette" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6 lg:hidden">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-center">
                Visão estratégica.<br />

                <span className="bg-gradient-accent bg-clip-text text-transparent">Experiência em operação.</span>
              </h3>
            </div>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>Atuo na estruturação e no desenvolvimento de operações digitais internacionais, conectando decisões de mercado, posicionamento e execução.</p>
              <p>Minha experiência vem da atuação direta em e-commerces com faturamento internacional e operações em múltiplas moedas. Formação em Business Management na Irlanda e Estratégia Corporativa em Londres.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
