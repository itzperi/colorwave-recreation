import Header from "@/components/Header";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import InnovativeMarketingHero from "@/components/services/innovative-marketing/Hero";
import InnovativeMarketingContent from "@/components/services/innovative-marketing/Content";

const InnovativeMarketing = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <InnovativeMarketingHero />
      <Brands />
      <InnovativeMarketingContent />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default InnovativeMarketing;