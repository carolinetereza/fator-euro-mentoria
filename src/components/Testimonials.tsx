import DisplayCards from "@/components/ui/display-cards";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonialCards = [
    {
      icon: <Star className="size-4 text-primary fill-primary" />,
      title: "Ana Silva",
      description: "Primeira venda em 10 dias",
      date: "E-commerce Owner",
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Star className="size-4 text-primary fill-primary" />,
      title: "Pedro Santos",
      description: "Caminho certo pela primeira vez",
      date: "Empreendedor Digital",
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Star className="size-4 text-primary fill-primary" />,
      title: "Mariana Costa",
      description: "Vendendo para 3 países",
      date: "Loja de Moda",
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16 animate-fade-in">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Resultados <span className="bg-gradient-accent bg-clip-text text-transparent">Reais</span> dos Mentorados
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja o que quem aplicou tem a dizer
            </p>
          </div>

          {/* Testimonials cards */}
          <div className="flex justify-center min-h-[400px] py-10">
            <DisplayCards cards={testimonialCards} />
          </div>

          {/* Note */}
          <div className="text-center">
            <p className="text-muted-foreground italic">
              * Mais prints de vendas, vídeos e depoimentos serão adicionados em breve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
