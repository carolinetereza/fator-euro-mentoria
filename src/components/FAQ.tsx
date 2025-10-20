import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Essa mentoria é pra mim?",
      answer: "Sim, se você quer resultado. Não, se busca mágica. A mentoria é para quem está disposto a trabalhar com método e ter o acompanhamento necessário para escalar."
    },
    {
      question: "Como funciona?",
      answer: "Ao vivo comigo, com aplicação prévia. Você só entra se for aprovado. Após a aprovação, começamos com diagnóstico, planejamento, execução e otimização contínua até você vender."
    },
    {
      question: "Preciso ter experiência?",
      answer: "Não. Precisa ter vontade de aplicar. O método foi criado para funcionar do zero, mas você precisa estar comprometido em seguir as orientações e executar."
    },
    {
      question: "E se eu não vender?",
      answer: "Eu refaço tudo com você. Simples assim. Se em 15 dias você não tiver vendas, revisamos toda a estratégia e execução juntos até funcionar."
    },
    {
      question: "A mentoria tem suporte?",
      answer: "Sim. Suporte VIP direto comigo pelo WhatsApp. Respostas rápidas, direção clara e ajustes certeiros sempre que você precisar."
    },
    {
      question: "Quanto tempo dura?",
      answer: "O acompanhamento é personalizado, mas o foco é ter resultados em até 15 dias. O suporte continua até você estar vendendo consistentemente."
    },
    {
      question: "Funciona para qualquer nicho?",
      answer: "Sim. O método V.E.N.D.® funciona para diversos nichos. No diagnóstico inicial, analisamos seu mercado e adaptamos a estratégia para seu produto específico."
    },
    {
      question: "Preciso investir em anúncios?",
      answer: "Sim. Para acelerar resultados, trabalho com Google Ads e Meta Ads. O valor depende do seu nicho, mas te oriento sobre o investimento mínimo recomendado."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-16 animate-fade-in">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Perguntas <span className="text-primary">Sem Rodeios</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Respostas diretas para dúvidas diretas
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
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
    </section>
  );
};
