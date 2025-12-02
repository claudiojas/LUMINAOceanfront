import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import livingRoom from "@/assets/living-room.png";

const ConceptSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative overflow-hidden"
          >
            <img
              src={livingRoom}
              alt="Living Room - Lumina Oceanfront"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            {/* Gold Accent Frame */}
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-gold/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:pl-8"
          >
            <div className="gold-line mb-8" />

            <p className="mb-4 font-sans text-sm uppercase tracking-[0.2em] text-gold">
              O Conceito
            </p>

            <h2 className="heading-luxury mb-8 text-3xl text-foreground md:text-4xl lg:text-5xl">
              Viver entre o céu
              <br />
              <span className="italic">e o oceano.</span>
            </h2>

            <div className="space-y-6 text-editorial text-muted-foreground">
              <p>
                O Lumina Oceanfront representa a convergência perfeita entre
                arquitetura contemporânea e a natureza intocada. Cada residência
                foi meticulosamente projetada para capturar a essência do viver
                à beira-mar.
              </p>
              <p>
                Com linhas orgânicas que abraçam o horizonte, nossos espaços
                convidam a luz natural a dançar através de panos de vidro que
                emolduram vistas infinitas do Atlântico.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10"
            >
              <a href="#plantas" className="btn-outline-gold">
                Conheça as Plantas
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
