import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

export const FAQ = () => {
  const faqs = [
  {
    "question": "Para quem é o Fator Euro?",
    "answer": "Para quem está planejando uma operação de e-commerce internacional ou quer revisar a estrutura de uma operação existente. A conversa inicial ajuda a avaliar o momento do negócio e a adequação do acompanhamento."
  },
  {
    "question": "Como funciona o acompanhamento?",
    "answer": "O trabalho parte de um diagnóstico e segue com planejamento e execução supervisionada em sessões individuais. O escopo e as condições são alinhados antes da contratação."
  },
  {
    "question": "Preciso ter uma operação em andamento?",
    "answer": "A consultoria atende diferentes momentos do negócio, desde o planejamento até a revisão de uma operação existente. O contexto e os objetivos são avaliados na conversa inicial."
  },
  {
    "question": "Como são avaliadas as prioridades?",
    "answer": "As decisões consideram o mercado de interesse, a oferta, a estrutura da loja e os indicadores disponíveis. A análise orienta o plano de ação e suas revisões."
  },
  {
    "question": "O que é acompanhado?",
    "answer": "O acompanhamento inclui sessões individuais, revisão de loja, oferta e comunicação, orientação sobre tráfego e SEO e acompanhamento das prioridades de execução."
  },
  {
    "question": "Como são definidos o escopo e a duração?",
    "answer": "O escopo, a duração e as condições do acompanhamento são alinhados antes da contratação, considerando o momento e as necessidades da operação."
  },
  {
    "question": "Como é escolhido o mercado de interesse?",
    "answer": "A análise parte do produto, do contexto competitivo e da capacidade de execução do negócio para definir prioridades de expansão."
  },
  {
    "question": "O que é necessário para começar?",
    "answer": "Compartilhar o contexto do negócio, os mercados de interesse e os principais desafios. Essas informações orientam a conversa sobre prioridades e próximos passos."
  }
];

  const headingRef = useScrollReveal<HTMLDivElement>({ y: 40 });
  const accordionRef = useStaggerReveal<HTMLDivElement>("[data-faq]", { y: 30, stagger: 0.08 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-16">
          <div ref={headingRef} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Informações <span className="bg-gradient-accent bg-clip-text text-transparent">sobre a consultoria</span>
            </h2>
            <p className="text-xl text-muted-foreground">O contexto do negócio orienta o acompanhamento</p>
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
