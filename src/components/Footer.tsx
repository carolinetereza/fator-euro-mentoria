import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import logoFatorEuro from "@/assets/logo-fator-euro.png";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/carolinemorette",
      label: "Instagram"
    },
    {
      icon: MessageCircle,
      url: "https://wa.me/5521969574147",
      label: "WhatsApp"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/carolinemorette/",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
            {/* Left side - Branding */}
            <div className="space-y-4">
              <div className="flex flex-col items-center md:items-start gap-3">
                <img 
                  src={logoFatorEuro} 
                  alt="Logo Fator Euro" 
                  className="w-24 md:w-28 h-auto"
                />
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                  FATOR EURO
                </h3>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Resultado é o Novo Luxo.
                <br />
                Do zero ao lucro real.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost-premium"
                      size="icon"
                      asChild
                      className="hover:scale-110"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Right side - Contact */}
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-bold">Entre em Contato</h4>
              <a
                href="https://wa.me/5521969574147"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto"
              >
                <ShinyButton className="w-full md:w-auto flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  FALAR NO WHATSAPP
                </ShinyButton>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom */}
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mentoria FATOR EURO - Caroline Morette. 
              Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Esta não é uma promessa de resultado. Os resultados podem variar de acordo
              com dedicação e aplicação do método.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
