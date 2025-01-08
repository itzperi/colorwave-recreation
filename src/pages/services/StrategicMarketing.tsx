import Header from "@/components/Header";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import StrategicMarketingHero from "@/components/services/strategic-marketing/Hero";
import StrategicMarketingContent from "@/components/services/strategic-marketing/Content";

const StrategicMarketing = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <StrategicMarketingHero />
      <Brands />
      <StrategicMarketingContent />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default StrategicMarketing;