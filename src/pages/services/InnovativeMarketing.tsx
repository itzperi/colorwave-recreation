import Header from "@/components/Header";
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
      <InnovativeMarketingContent />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default InnovativeMarketing;