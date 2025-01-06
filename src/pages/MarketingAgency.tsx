import Header from "@/components/Header";
import MarketingHero from "@/components/marketing/MarketingHero";
import Brands from "@/components/Brands";
import MarketingSections from "@/components/marketing/MarketingSections";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

const MarketingAgency = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <MarketingHero />
      <Brands />
      <MarketingSections />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default MarketingAgency;