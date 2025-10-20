import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "E-commerce Owner",
      quote: "Com 10 dias de mentoria, vendi meu primeiro produto sem estoque.",
      rating: 5
    },
    {
      name: "Pedro Santos",
      role: "Empreendedor Digital",
      quote: "A primeira vez que alguém realmente me mostrou o caminho certo.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      role: "Loja de Moda",
      quote: "Saí do zero e hoje vendo para 3 países diferentes. Método comprovado.",
      rating: 5
    }
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

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 space-y-6"
              >
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Quote */}
                <p className="text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-border/50">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
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
