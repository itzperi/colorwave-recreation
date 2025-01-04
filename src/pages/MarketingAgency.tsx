import Header from "@/components/Header";
import MarketingHero from "@/components/marketing/MarketingHero";
import MarketingServices from "@/components/marketing/MarketingServices";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

const MarketingAgency = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <MarketingHero />
      <Brands />
      <MarketingServices />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default MarketingAgency;