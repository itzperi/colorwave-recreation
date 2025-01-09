import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import B2BMarketingHero from "@/components/services/b2b-marketing/Hero";
import B2BMarketingContent from "@/components/services/b2b-marketing/Content";

const B2BMarketing = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <B2BMarketingHero />
      <B2BMarketingContent />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default B2BMarketing;