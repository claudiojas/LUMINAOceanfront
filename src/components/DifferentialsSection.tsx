import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Waves, Sparkles, Shield, Plane } from "lucide-react";

const differentials = [
  {
    icon: Shield,
    title: "Concierge 24h",
    description: "Atendimento exclusivo e personalizado a qualquer momento.",
  },
  {
    icon: Waves,
    title: "Piscina Infinita",
    description: "Vista panorâmica para o oceano em 360 graus.",
  },
  {
    icon: Sparkles,
    title: "Spa Privativo",
    description: "Espaço de bem-estar com tratamentos exclusivos.",
  },
  {
    icon: Plane,
    title: "Heliponto",
    description: "Acesso direto para sua conveniência absoluta.",
  },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="bg-ocean py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-20"
        >
          <div className="gold-line mx-auto mb-8" />
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.2em] text-gold">
            Diferenciais
          </p>
          <h2 className="heading-luxury text-3xl text-primary-foreground md:text-4xl lg:text-5xl">
            Privilégios <span className="italic">exclusivos.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4"
        >
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 transition-all duration-300 group-hover:border-gold group-hover:shadow-gold">
                <item.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-serif text-lg text-primary-foreground md:text-xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
