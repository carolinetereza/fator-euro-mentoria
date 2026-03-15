import { Instagram, Facebook } from "lucide-react";

export const LuxuryFooter = () => {
  return (
    <footer className="dark-section bg-charcoal border-t border-border/10 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg text-primary-foreground/80">
              <span className="font-light">Dr.</span> Marcel Ferreira
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/30 font-sans mt-1">
              Dental Boutique — Jardins, São Paulo
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/drmarcelferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/30 hover:text-gold transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/drmarcelferreira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/30 hover:text-gold transition-colors duration-300"
            >
              <Facebook size={18} />
            </a>
          </div>

          <p className="text-[10px] tracking-[0.15em] text-primary-foreground/20 font-sans">
            © {new Date().getFullYear()} Dental Boutique. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
