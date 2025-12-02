import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import logo from "../assets/logo-removebg.png";

const navLinks = [
  { label: "O Projeto", href: "#conceito" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Plantas", href: "#plantas" },
  { label: "Contato", href: "#contato" },
];

const DesktopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 hidden transition-all duration-300 md:block",
        isScrolled && "bg-ocean/80 shadow-elevated backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center font-serif text-xl tracking-wide text-primary-foreground"
        >
          <img src={logo} alt="Lumina Logo" className="mr-2 h-10" />
          <div>
            <span className="font-medium">LUMINA</span>
            <span className="ml-1 font-light italic text-gold">
              Oceanfront
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-sans text-sm uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="border border-gold/50 px-6 py-2 font-sans text-xs uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-ocean"
        >
          Agendar Visita
        </a>
      </div>
    </motion.header>
  );
};

export default DesktopHeader;
