import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/it-services/ServicesSection";
import HeroSection from "@/components/it-services/HeroSection";

const ITServices = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default ITServices;