import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Mensagem enviada!",
      description: "Em breve um de nossos consultores entrará em contato.",
    });
    setFormData({ name: "", phone: "" });
  };

  return (
    <section id="contato" className="relative min-h-[80vh] bg-ocean py-20 md:py-32">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div
          ref={ref}
          className="mx-auto max-w-4xl grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
        >
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-8" />
            <p className="mb-4 font-sans text-sm uppercase tracking-[0.2em] text-gold">
              Localização & Contato
            </p>
            <h2 className="heading-luxury mb-8 text-3xl text-primary-foreground md:text-4xl">
              Descubra o seu novo
              <br />
              <span className="italic">endereço.</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-primary-foreground">
                    Av. Beira Mar, 1000
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    Praia Olho D'agua, São Luis - MA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-primary-foreground">
                    +55 85 99999-0000
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    Atendimento de Seg a Sex, 9h às 18h
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-none border border-gold/20 bg-ocean-medium p-8 md:p-10"
          >
            <h3 className="mb-6 font-serif text-xl text-primary-foreground">
              Agende uma visita privada
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-wider text-primary-foreground/60"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-b border-gold/30 bg-transparent px-0 py-3 text-primary-foreground outline-none transition-colors focus:border-gold"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs uppercase tracking-wider text-primary-foreground/60"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border-b border-gold/30 bg-transparent px-0 py-3 text-primary-foreground outline-none transition-colors focus:border-gold"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <button type="submit" className="btn-gold w-full mt-4">
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
