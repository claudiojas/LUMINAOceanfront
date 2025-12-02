const Footer = () => {
  return (
    <footer className="bg-ocean border-t border-gold/10 py-12 pb-32 md:pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="font-serif text-xl tracking-wide text-primary-foreground">
            <span className="font-medium">LUMINA</span>
            <span className="ml-1 font-light italic text-gold">Oceanfront</span>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs uppercase tracking-wider text-primary-foreground/40">
            © 2025 Módulo Web. Todos os direitos reservados.
          </p>

          {/* CRECI */}
          <p className="text-xs uppercase tracking-wider text-primary-foreground/40">
            CRECI-CE 12345-J
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
