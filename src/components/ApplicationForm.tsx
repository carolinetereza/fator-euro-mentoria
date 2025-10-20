import { GradientButton } from "@/components/ui/gradient-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

export const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+55",
    phone: "",
    ecommerceExperience: "",
    investmentCapacity: ""
  });

  const countries = [
    { code: "+55", country: "🇧🇷 Brasil", flag: "🇧🇷" },
    { code: "+1", country: "🇺🇸 EUA/Canadá", flag: "🇺🇸" },
    { code: "+351", country: "🇵🇹 Portugal", flag: "🇵🇹" },
    { code: "+34", country: "🇪🇸 Espanha", flag: "🇪🇸" },
    { code: "+44", country: "🇬🇧 Reino Unido", flag: "🇬🇧" },
    { code: "+49", country: "🇩🇪 Alemanha", flag: "🇩🇪" },
    { code: "+33", country: "🇫🇷 França", flag: "🇫🇷" },
    { code: "+39", country: "🇮🇹 Itália", flag: "🇮🇹" },
    { code: "+54", country: "🇦🇷 Argentina", flag: "🇦🇷" },
    { code: "+52", country: "🇲🇽 México", flag: "🇲🇽" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `*Nova Aplicação - Mentoria FATOR EURO*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefone:* ${formData.countryCode} ${formData.phone}\n` +
      `*Experiência com E-commerce:* ${formData.ecommerceExperience}\n` +
      `*Capacidade de Investimento:* ${formData.investmentCapacity}`;
    
    const whatsappUrl = `https://wa.me/5521969574147?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecionando para WhatsApp...");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="application-form" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/10 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto space-y-12 animate-fade-in">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para ativar seu{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                FATOR EURO™?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Apenas 4 vagas por mês. Se essa página está no ar, ainda é possível aplicar.
            </p>
          </div>

          {/* Form */}
          <div className="relative">
            <GlowingEffect
              spread={50}
              glow={true}
              disabled={false}
              proximity={120}
              inactiveZone={0.01}
              borderWidth={2}
              className="rounded-3xl"
            />
            
            <form
              onSubmit={handleSubmit}
              className="relative bg-gradient-card rounded-3xl border border-primary/30 p-8 md:p-12 space-y-8"
            >
              <h3 className="text-2xl font-bold text-center">
                Aplicação para a Mentoria FATOR EURO™
              </h3>

              <div className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp *</Label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Select 
                      value={formData.countryCode}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, countryCode: value }))}
                    >
                      <SelectTrigger className="w-full sm:w-[140px] bg-background/50 border-border/50 focus:border-primary">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {country.country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 w-full bg-background/50 border-border/50 focus:border-primary"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                {/* E-commerce Experience */}
                <div className="space-y-2">
                  <Label htmlFor="ecommerceExperience">Experiência com E-commerce *</Label>
                  <Select 
                    required
                    value={formData.ecommerceExperience}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, ecommerceExperience: value }))}
                  >
                    <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Selecione sua experiência" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iniciante">Iniciante – Nunca tive e-commerce</SelectItem>
                      <SelectItem value="alguma">Alguma – Já tentei mas não deu certo</SelectItem>
                      <SelectItem value="intermediario">Intermediário – Tenho loja mas não vendo</SelectItem>
                      <SelectItem value="avancado">Avançado – Vendo pouco, quero escalar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Investment Capacity */}
                <div className="space-y-2">
                  <Label htmlFor="investmentCapacity">Capacidade de Investimento *</Label>
                  <Select 
                    required
                    value={formData.investmentCapacity}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, investmentCapacity: value }))}
                  >
                    <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Selecione o valor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1k-3k">R$ 1.000 – R$ 3.000</SelectItem>
                      <SelectItem value="3k-5k">R$ 3.000 – R$ 5.000</SelectItem>
                      <SelectItem value="5k-10k">R$ 5.000 – R$ 10.000</SelectItem>
                      <SelectItem value="10k+">R$ 10.000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <GradientButton
                type="submit"
                className="w-full group"
              >
                ENVIAR APLICAÇÃO
                <Send className="group-hover:translate-x-1 transition-transform" />
              </GradientButton>

              <p className="text-sm text-center text-muted-foreground">
                Ao enviar, você será redirecionado(a) para o WhatsApp para finalizar sua aplicação.
                <br />
                Sua aplicação será analisada e você receberá retorno em até 24h.
              </p>
            </form>
          </div>

          {/* VIP List CTA */}
          <div className="text-center space-y-4">
            <p className="text-xl font-semibold">Vagas Esgotadas?</p>
            <p className="text-muted-foreground">
              Entre para a Lista de Espera VIP e seja avisado(a) antes da próxima turma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
