import DisplayCards from "@/components/ui/display-cards";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import mentee1 from "@/assets/mentee-1.png";
import mentee3 from "@/assets/mentee-3.png";
import mentee4 from "@/assets/mentee-4.png";
import result1 from "@/assets/result-1.jpeg";
import result2 from "@/assets/result-2.jpeg";
import result3 from "@/assets/result-3.jpeg";
import result4 from "@/assets/result-4.jpeg";
import result5 from "@/assets/result-5.jpeg";
import result6 from "@/assets/result-6.jpeg";
import result7 from "@/assets/result-7.jpeg";
import result8 from "@/assets/result-8.jpeg";
import result9 from "@/assets/result-9.jpeg";
import result10 from "@/assets/result-10.jpeg";

export const Testimonials = () => {
  const resultImages = [
    result1, result2, result3, result4, result5, 
    result6, result7, result8, result9, result10
  ];

  const testimonialCards = [
    {
      icon: <img src={mentee1} alt="Anna Rossi" className="size-8 rounded-full object-cover" />,
      title: "Anna Rossi",
      description: "Primeira venda em 10 dias",
      date: "E-commerce Owner",
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <img src={mentee3} alt="Pedro Amorim" className="size-8 rounded-full object-cover" />,
      title: "Pedro Amorim",
      description: "Caminho certo pela primeira vez",
      date: "Empreendedor Digital",
      iconClassName: "text-primary",
      titleClassName: "text-primary",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <img src={mentee4} alt="Mariana Costa" className="size-8 rounded-full object-cover" />,
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
              Eles ativaram o <span className="bg-gradient-accent bg-clip-text text-transparent">Fator Euro™</span>
            </h2>
          </div>

          {/* 3D Carousel for result screenshots */}
          <div className="w-full max-w-4xl mx-auto">
            <ThreeDPhotoCarousel images={resultImages} />
          </div>

          {/* Testimonials cards */}
          <div className="flex justify-center min-h-[400px] py-10">
            <DisplayCards cards={testimonialCards} />
          </div>
        </div>
      </div>
    </section>
  );
};
