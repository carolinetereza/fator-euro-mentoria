import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

export const FAQ = () => {
  const faqs = [
    { question: "Essa mentoria é pra mim?", answer: "Sim, se você quer resultado com método. Não, se busca fórmula mágica. A mentoria é para quem está disposto a trabalhar com estrutura e ter acompanhamento estratégico para escalar." },
    { question: "Como funciona o processo?", answer: "Tudo começa com a aplicação estratégica. Se aprovado, fazemos o diagnóstico da sua operação, estruturamos o plano de ação e executamos com supervisão contínua em sessões 1:1 ao vivo." },
    { question: "Preciso ter experiência?", answer: "Não. Precisa ter vontade de aplicar. O método foi criado para funcionar do zero, mas você precisa estar comprometido em seguir as orientações e executar." },
    { question: "E se eu não vender?", answer: "Eu refaço tudo com você. Se em 15 dias você não tiver vendas, revisamos toda a estratégia e execução juntos até funcionar." },
    { question: "Como é o suporte?", answer: "Suporte VIP direto comigo pelo WhatsApp. Respostas rápidas, direção clara e ajustes certeiros sempre que você precisar." },
    { question: "Quanto tempo dura o acompanhamento?", answer: "O acompanhamento é personalizado, mas o foco é ter resultados em até 15 dias. O suporte continua até você estar vendendo consistentemente." },
    { question: "Funciona para qualquer nicho?", answer: "Sim. O método V.E.N.D.® funciona para diversos nichos. No diagnóstico inicial, analisamos seu mercado e adaptamos a estratégia para seu produto específico." },
    { question: "Qual é o compromisso esperado?", answer: "Você precisa estar disponível para as sessões, aplicar as orientações e executar o que for definido. Quanto mais você se comprometer, mais rápido os resultados aparecem." }
  ];

  const headingRef = useScrollReveal<HTMLDivElement>({ y: 40 });
  const accordionRef = useStaggerReveal<HTMLDivElement>("[data-faq]", { y: 30, stagger: 0.08 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-16">
          <div ref={headingRef} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Perguntas <span className="bg-gradient-accent bg-clip-text text-transparent">Sem Rodeios</span>
            </h2>
            <p className="text-xl text-muted-foreground">Respostas diretas para dúvidas diretas</p>
          </div>

          <div ref={accordionRef}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  data-faq
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-card border border-border/50 rounded-xl px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
