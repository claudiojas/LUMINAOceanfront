import { Helmet } from "react-helmet";
import DesktopHeader from "@/components/DesktopHeader";
import MobileBottomNav from "@/components/MobileBottomNav";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FloorPlansSection from "@/components/FloorPlansSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lumina Oceanfront | Exclusive Residences - São Luis - MA</title>
        <meta
          name="description"
          content="Descubra o Lumina Oceanfront, residências exclusivas à beira-mar em São Luis. Apartamentos de luxo com vista infinita para o oceano Atlântico."
        />
        <meta
          name="keywords"
          content="apartamento luxo Saão Luis, imóvel beira mar, penthouse oceanfront, residência exclusiva"
        />
        <link rel="canonical" href="https://luminaoceanfront.com.br" />
      </Helmet>

      <main className="min-h-screen">
        <DesktopHeader />
        <MobileBottomNav />

        <HeroSection />
        <section id="conceito">
          <ConceptSection />
        </section>
        <section id="diferenciais">
          <DifferentialsSection />
        </section>
        <FloorPlansSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
