import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Maximize2, BedDouble, Car } from "lucide-react";
import gardenPlan from "@/assets/buildingplan/garden.png";
import penthousePlan from "@/assets/buildingplan/penhouse.png";

const plans = [
  {
    id: "garden",
    name: "Apartamento Garden",
    image: gardenPlan,
    details: {
      area: "287 m²",
      suites: "4 Suítes",
      parking: "4 Vagas",
    },
    description:
      "Um oásis particular onde a sofisticação encontra a natureza. Desfrute de um jardim privativo e da brisa do mar, com acesso direto às exclusivas áreas de lazer do condomínio.",
  },
  {
    id: "penthouse",
    name: "Penthouse",
    image: penthousePlan,
    details: {
      area: "520 m²",
      suites: "4 Suítes",
      parking: "6 Vagas",
    },
    description:
      "A coroação do luxo em uma residência suspensa. Com um terraço panorâmico, piscina privativa e uma vista espetacular de 360° para o oceano, esta é a definição de uma vida extraordinária.",
  },
];

const FloorPlansSection = () => {
  const [activePlan, setActivePlan] = useState("garden");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentPlan = plans.find((p) => p.id === activePlan)!;

  return (
    <section id="plantas" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="gold-line mx-auto mb-8" />
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.2em] text-gold">
            Plantas
          </p>
          <h2 className="heading-luxury text-3xl text-foreground md:text-4xl lg:text-5xl">
            Escolha seu <span className="italic">refúgio.</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div ref={ref} className="mb-12 flex justify-center gap-4">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(plan.id)}
              className={`relative px-6 py-3 font-sans text-sm uppercase tracking-widest transition-all duration-300 ${
                activePlan === plan.id
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {plan.name}
              {activePlan === plan.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPlan.id}
                src={currentPlan.image}
                alt={currentPlan.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPlan.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="heading-luxury mb-6 text-2xl text-foreground md:text-3xl">
                {currentPlan.name}
              </h3>

              <p className="mb-8 text-editorial text-muted-foreground">
                {currentPlan.description}
              </p>

              {/* Specs */}
              <div className="mb-10 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center border border-border p-4 text-center">
                  <Maximize2 className="mb-2 h-5 w-5 text-gold" strokeWidth={1.5} />
                  <span className="font-serif text-lg text-foreground">
                    {currentPlan.details.area}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Área
                  </span>
                </div>
                <div className="flex flex-col items-center border border-border p-4 text-center">
                  <BedDouble className="mb-2 h-5 w-5 text-gold" strokeWidth={1.5} />
                  <span className="font-serif text-lg text-foreground">
                    {currentPlan.details.suites}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Suítes
                  </span>
                </div>
                <div className="flex flex-col items-center border border-border p-4 text-center">
                  <Car className="mb-2 h-5 w-5 text-gold" strokeWidth={1.5} />
                  <span className="font-serif text-lg text-foreground">
                    {currentPlan.details.parking}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Vagas
                  </span>
                </div>
              </div>

              <a href="#contato" className="btn-gold">
                Solicitar Informações
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
