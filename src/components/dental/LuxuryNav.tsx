import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Transformações", href: "#transformations" },
  { label: "Serviços", href: "#services" },
  { label: "Clínica", href: "#clinic" },
  { label: "Contato", href: "#contact" },
];

export const LuxuryNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "py-3 glass-card-dark"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <button onClick={() => scrollTo("#hero")} className="font-serif text-xl md:text-2xl tracking-wide text-primary-foreground">
          <span className="font-light">Dr.</span>{" "}
          <span className="font-medium">Marcel Ferreira</span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70 hover:text-gold transition-colors duration-300 font-sans font-light"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="luxury-btn text-xs py-2.5 px-6 !border-gold/40 !text-gold"
          >
            Agendar
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground/80 p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-card-dark absolute top-full left-0 w-full py-8 px-6 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block text-sm tracking-[0.15em] uppercase text-primary-foreground/70 hover:text-gold transition-colors font-sans font-light"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
