import { ShinyButton } from "@/components/ui/shiny-button";
import mentorImage from "@/assets/mentor-caroline-new.png";
import mentee1 from "@/assets/mentee-1.png";
import mentee2 from "@/assets/mentee-2.png";
import mentee3 from "@/assets/mentee-3.png";
import mentee4 from "@/assets/mentee-4.png";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Background mentor image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={mentorImage} 
          alt="Caroline Morette" 
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(202,36%,20%,0.2),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in-up">
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Fature em euro, dólar e libra.
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Escale para o mundo.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Mentoria individual guiada por resultados reais.
            </p>
          </div>

          <div>
            <ShinyButton 
              onClick={scrollToForm}
              className="group"
            >
              APLICAR AGORA
            </ShinyButton>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
