import { Home, LayoutGrid, Image, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { icon: Home, label: "Início", href: "#inicio" },
  { icon: LayoutGrid, label: "Plantas", href: "#plantas" },
  { icon: Image, label: "Galeria", href: "#conceito" },
  { icon: MessageCircle, label: "WhatsApp", href: "#contato" },
];

const MobileBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold/20 bg-ocean/95 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex flex-col items-center gap-1 p-2 text-primary-foreground/70 transition-colors hover:text-gold"
          >
            <item.icon className={cn("h-5 w-5", item.label === "WhatsApp" && "mt-0.5")} strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-wider">
              {item.label}
            </span>
          </a>
        ))}
      </div>

      {/* Sticky CTA Button */}
      <div className="border-t border-gold/20 p-3">
        <a
          href="https://wa.me/5585999990000"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold flex w-full items-center justify-center gap-2 py-4"
        >
          <MessageCircle className="h-5 w-5" />
          Falar com Corretor
        </a>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
